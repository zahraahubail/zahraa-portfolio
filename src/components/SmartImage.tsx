import { useState, type ImgHTMLAttributes } from 'react'

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  /** Shown if `src` fails to load (e.g. a screenshot hasn't been added yet). */
  fallbackSrc?: string
}

/**
 * `<img>` that swaps to a fallback if the real file is missing, so the layout
 * never breaks while screenshots are still being added.
 */
export function SmartImage({
  src,
  alt,
  fallbackSrc = '/assets/projects/placeholder.svg',
  loading = 'lazy',
  ...rest
}: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc)
      }}
      {...rest}
    />
  )
}
