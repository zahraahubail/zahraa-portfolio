import { useEffect } from 'react'

/**
 * Prevents the page behind a modal / open mobile menu from scrolling while
 * `locked` is true. Restores the previous overflow value on cleanup.
 */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}
