import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'
import { SmartImage } from './SmartImage'

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface ProjectGalleryProps {
  images: GalleryImage[]
}

/**
 * Image carousel for the project modal: prev/next arrows, dot indicators, a
 * caption strip and an image counter. Handles a single image gracefully
 * (no controls). Keyboard: ArrowLeft / ArrowRight. Touch: horizontal swipe.
 */
export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0)
  const count = images.length
  const hasMultiple = count > 1
  const touchStartX = useRef<number | null>(null)

  const goTo = (next: number) => setIndex(((next % count) + count) % count)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  // Keyboard navigation while the gallery is mounted (i.e. the modal is open).
  useEffect(() => {
    if (!hasMultiple) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.stopPropagation()
        setIndex((i) => (i - 1 + count) % count)
      } else if (event.key === 'ArrowRight') {
        event.stopPropagation()
        setIndex((i) => (i + 1) % count)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [count, hasMultiple])

  const current = images[index]

  return (
    <div
      className="shrink-0 border-b border-border-subtle bg-navy-950"
      role="group"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
    >
      {/* Stage */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const delta = e.changedTouches[0].clientX - touchStartX.current
          if (Math.abs(delta) > 45) (delta > 0 ? prev : next)()
          touchStartX.current = null
        }}
      >
        {/* Sliding track */}
        <div
          className="flex h-full w-full transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, i) => (
            <div
              key={image.src}
              className="flex h-full w-full shrink-0 items-center justify-center p-3 sm:p-4"
            >
              <SmartImage
                src={image.src}
                alt={image.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="max-h-full max-w-full rounded-md object-contain"
              />
            </div>
          ))}
        </div>

        {hasMultiple && (
          <>
            <span className="absolute left-3 top-3 rounded-md bg-navy-950/80 px-2 py-0.5 font-mono text-xs text-ink-300">
              {index + 1} / {count}
            </span>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="group absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-navy-950/70 text-ink-300 backdrop-blur-sm transition-colors hover:border-accent hover:bg-navy-950 hover:text-ink-100 focus-visible:outline-none sm:h-10 sm:w-10"
            >
              <Icon name="chevronLeft" size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="group absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-navy-950/70 text-ink-300 backdrop-blur-sm transition-colors hover:border-accent hover:bg-navy-950 hover:text-ink-100 focus-visible:outline-none sm:h-10 sm:w-10"
            >
              <Icon name="chevronRight" size={20} />
            </button>
          </>
        )}
      </div>

      {/* Caption + dots — announced together for assistive tech */}
      <div className="flex min-h-11 items-center justify-between gap-4 px-4 py-2">
        <p
          className="min-w-0 flex-1 truncate text-sm text-ink-300"
          aria-live="polite"
        >
          {current?.caption ?? current?.alt}
        </p>

        {hasMultiple && (
          <div className="-mr-1.5 flex shrink-0 items-center">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className="group flex h-8 w-6 items-center justify-center focus-visible:outline-none"
              >
                <span
                  className={`h-2 rounded-full transition-all group-focus-visible:ring-2 group-focus-visible:ring-accent group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-navy-950 ${
                    i === index
                      ? 'w-5 bg-accent'
                      : 'w-2 bg-border-subtle group-hover:bg-ink-500'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
