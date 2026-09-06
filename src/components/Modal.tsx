import { useEffect, useRef, type ReactNode } from 'react'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { Icon } from './Icon'

interface ModalProps {
  open: boolean
  onClose: () => void
  /** Accessible title for the dialog (referenced by aria-labelledby). */
  titleId: string
  children: ReactNode
  /** `panel` for content modals, `image` for the certificate lightbox. */
  size?: 'panel' | 'image'
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Accessible modal dialog: focus is moved in on open and restored on close,
 * Escape closes, Tab is trapped, and the background is inert + non-scrolling.
 */
export function Modal({ open, onClose, titleId, children, size = 'panel' }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useBodyScrollLock(open)

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement as HTMLElement
    const panel = panelRef.current
    const firstFocusable = panel?.querySelector<HTMLElement>(FOCUSABLE)
    if (firstFocusable) {
      firstFocusable.focus()
    } else {
      panel?.focus()
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panel) return

      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm motion-safe:animate-[fade_.2s_ease]"
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative w-full overflow-hidden rounded-2xl border border-border-subtle bg-navy-850 shadow-2xl motion-safe:animate-[pop_.22s_cubic-bezier(.16,1,.3,1)] ${
          size === 'image'
            ? 'max-w-3xl'
            : 'max-w-3xl max-h-[calc(100dvh-2rem)] flex flex-col'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-3 top-3 z-10 rounded-lg bg-navy-950/60 p-1.5 text-ink-300 transition-colors hover:bg-navy-950 hover:text-ink-100 focus-visible:outline-none"
        >
          <Icon name="close" size={20} />
        </button>
        {children}
      </div>
    </div>
  )
}
