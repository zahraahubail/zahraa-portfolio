import type { Certificate } from '../types'
import { Icon } from './Icon'
import { SmartImage } from './SmartImage'

interface CertificateCardProps {
  certificate: Certificate
  onOpen: (certificate: Certificate) => void
}

export function CertificateCard({ certificate, onOpen }: CertificateCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(certificate)}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-card-hover focus-visible:outline-none focus-visible:border-accent"
      aria-label={`View certificate: ${certificate.title}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border-subtle bg-navy-850">
        <SmartImage
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          fallbackSrc="/assets/certificates/placeholder.svg"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-navy-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 rounded-md border border-accent/40 bg-navy-900/80 px-3 py-1.5 text-xs font-medium text-ink-100">
            <Icon name="external" size={14} /> Enlarge
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm font-medium leading-snug text-ink-100">
          {certificate.title}
        </p>
        <p className="mt-auto pt-3 font-mono text-xs text-ink-500">
          {certificate.organization
            ? `${certificate.organization} · ${certificate.year}`
            : certificate.year}
        </p>
      </div>
    </button>
  )
}
