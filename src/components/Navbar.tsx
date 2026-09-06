import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { Icon } from './Icon'

// Stable array reference for the scroll spy (defined once, not per render).
const SECTION_IDS = navLinks.map((link) => link.href.replace('#', ''))

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useBodyScrollLock(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-border-subtle bg-navy-900/90 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between"
      >
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm font-medium text-ink-100"
          onClick={() => setMenuOpen(false)}
        >
          <Icon name="code" size={18} className="text-accent" />
          <span>
            zahraa<span className="text-accent">.</span>hubail
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, i) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'text-ink-100'
                      : 'text-ink-400 hover:text-ink-100'
                  }`}
                >
                  <span className="font-mono text-xs text-accent/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={site.cvPath}
          download
          className="hidden items-center gap-2 rounded-lg border border-border-subtle bg-surface px-4 py-2 text-sm font-medium text-ink-100 transition-all hover:-translate-y-0.5 hover:border-accent lg:inline-flex"
        >
          <Icon name="download" size={16} />
          CV
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border-subtle bg-surface p-2 text-ink-100 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-border-subtle bg-navy-900/98 lg:hidden"
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link, i) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 text-base transition-colors ${
                    isActive
                      ? 'bg-surface text-ink-100'
                      : 'text-ink-300 hover:bg-surface hover:text-ink-100'
                  }`}
                >
                  <span className="font-mono text-xs text-accent/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </a>
              </li>
            )
          })}
          <li className="mt-2">
            <a
              href={site.cvPath}
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-accent-strong px-4 py-3 text-sm font-semibold text-navy-950"
            >
              <Icon name="download" size={16} />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
