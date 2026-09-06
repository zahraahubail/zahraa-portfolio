import type { ReactNode, SVGProps } from 'react'

/**
 * Small inline icon set. Inlining keeps us from pulling in an icon library and
 * lets every icon inherit `currentColor`. Add a new key to `paths` to extend.
 */
export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'external'
  | 'download'
  | 'arrowRight'
  | 'arrowUp'
  | 'menu'
  | 'close'
  | 'code'
  | 'play'
  | 'sparkle'
  | 'chevronDown'
  | 'chevronLeft'
  | 'chevronRight'
  | 'expand'
  | 'mapPin'
  | 'graduation'
  | 'briefcase'
  | 'award'
  | 'quote'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  /** Pixel size for width and height. Default 20. */
  size?: number
}

const paths: Record<IconName, ReactNode> = {
  github: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
    />
  ),
  linkedin: (
    <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.5h3.5V21H3.2V8.5Zm5.7 0h3.35v1.71h.05c.47-.88 1.6-1.81 3.3-1.81 3.53 0 4.18 2.32 4.18 5.34V21h-3.5v-5.56c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93V21H8.9V8.5Z" />
  ),
  mail: (
    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 7.6 5.3L19.6 7H4.4ZM20 8.9l-7.4 5.2a1 1 0 0 1-1.2 0L4 8.9V17h16V8.9Z" />
  ),
  external: (
    <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3ZM5 5h5v2H6v11h11v-4h2v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
  ),
  download: (
    <path d="M12 3a1 1 0 0 1 1 1v9.6l3.3-3.3 1.4 1.4L12 17.4l-5.7-5.7 1.4-1.4L11 13.6V4a1 1 0 0 1 1-1ZM5 19h14v2H5v-2Z" />
  ),
  arrowRight: <path d="M13.2 5.2 20 12l-6.8 6.8-1.4-1.4 4.4-4.4H4v-2h12.2l-4.4-4.4 1.4-1.4Z" />,
  arrowUp: <path d="M12 4.2 18.8 11l-1.4 1.4L13 8v11.8h-2V8l-4.4 4.4L5.2 11 12 4.2Z" />,
  menu: <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />,
  close: (
    <path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4 6.4 5Z" />
  ),
  code: <path d="m8.7 15.9-1.4 1.4L2 12l5.3-5.3 1.4 1.4L4.8 12l3.9 3.9Zm6.6 0 3.9-3.9-3.9-3.9 1.4-1.4L22 12l-5.3 5.3-1.4-1.4ZM13.9 4l-2.9 16-1.9-.3L12 3.7l1.9.3Z" />,
  play: <path d="M8 5v14l11-7L8 5Z" />,
  sparkle: (
    <path d="M12 2c.5 3.9 2.1 5.5 6 6-3.9.5-5.5 2.1-6 6-.5-3.9-2.1-5.5-6-6 3.9-.5 5.5-2.1 6-6Zm7 10c.3 1.9 1 2.7 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.3 2.7-1 3-3Z" />
  ),
  chevronDown: <path d="M12 15.4 5.6 9 7 7.6l5 5 5-5L18.4 9 12 15.4Z" />,
  chevronLeft: <path d="M15.4 18.4 9 12l6.4-6.4L16.8 7l-5 5 5 5-1.4 1.4Z" />,
  chevronRight: <path d="M8.6 5.6 15 12l-6.4 6.4L7.2 17l5-5-5-5 1.4-1.4Z" />,
  expand: (
    <path d="M9 3H3v6h2V6.4l4.3 4.3 1.4-1.4L6.4 5H9V3Zm12 12h-2v2.6l-4.3-4.3-1.4 1.4 4.3 4.3H15v2h6v-6Z" />
  ),
  mapPin: (
    <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 4.5A2.5 2.5 0 1 0 12 11.5 2.5 2.5 0 0 0 12 6.5Z" />
  ),
  graduation: <path d="m12 3 11 6-11 6L1 9l11-6Zm-7 9.7 7 3.8 7-3.8V17c0 1.7-3.1 3-7 3s-7-1.3-7-3v-4.3ZM21 11v5h1v-5h-1Z" />,
  briefcase: (
    <path d="M9 4h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3V6a2 2 0 0 1 2-2Zm0 4h6V6H9v2Z" />
  ),
  award: (
    <path d="M12 2a6 6 0 0 1 3 11.2V22l-3-2-3 2v-8.8A6 6 0 0 1 12 2Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
  ),
  quote: (
    <path d="M7.5 6C5 6 3 8 3 10.6c0 2.5 1.9 4.4 4.3 4.4.3 0 .6 0 .8-.1-.5 1.5-1.9 2.7-3.5 3.2l.6 1.9c3.5-1 6-4.3 6-8.1V10C11.2 7.7 9.6 6 7.5 6Zm9.7 0c-2.5 0-4.5 2-4.5 4.6 0 2.5 1.9 4.4 4.3 4.4.3 0 .6 0 .8-.1-.5 1.5-1.9 2.7-3.5 3.2l.6 1.9c3.5-1 6-4.3 6-8.1V10C20.9 7.7 19.3 6 17.2 6Z" />
  ),
}

export function Icon({ name, size = 20, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
