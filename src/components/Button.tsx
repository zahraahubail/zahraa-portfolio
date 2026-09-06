import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'sm'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  /** Optional leading icon. */
  icon?: IconName
  /** Optional trailing icon (e.g. an external-link arrow). */
  iconTrailing?: IconName
  className?: string
}

type AsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: undefined }

type AsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string }

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-strong text-navy-950 hover:bg-accent hover:-translate-y-0.5 shadow-[0_8px_24px_-10px_rgba(14,165,233,0.6)]',
  secondary:
    'border border-border-subtle bg-surface text-ink-100 hover:border-accent hover:bg-surface-hover hover:-translate-y-0.5',
  ghost: 'text-ink-300 hover:text-ink-100 hover:bg-surface',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  sm: 'px-3.5 py-2 text-xs',
}

/**
 * One button component for the whole site. Renders an `<a>` when `href` is
 * provided, otherwise a `<button>`. External links get safe rel attributes.
 */
export function Button(props: AsButton | AsLink) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconTrailing,
    className = '',
    ...rest
  } = props

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const iconSize = size === 'sm' ? 15 : 17

  const content = (
    <>
      {icon && <Icon name={icon} size={iconSize} />}
      {children}
      {iconTrailing && <Icon name={iconTrailing} size={iconSize} />}
    </>
  )

  if ('href' in props && props.href !== undefined) {
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    const isExternal = /^https?:\/\//.test(props.href)
    return (
      <a
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...anchorRest}
      >
        {content}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} type={buttonRest.type ?? 'button'} {...buttonRest}>
      {content}
    </button>
  )
}
