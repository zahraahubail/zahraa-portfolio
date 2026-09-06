import type { Certificate } from '../types'
import { Modal } from './Modal'
import { SmartImage } from './SmartImage'

interface CertificateLightboxProps {
  certificate: Certificate | null
  onClose: () => void
}

export function CertificateLightbox({ certificate, onClose }: CertificateLightboxProps) {
  const titleId = 'certificate-lightbox-title'

  return (
    <Modal
      open={certificate !== null}
      onClose={onClose}
      titleId={titleId}
      size="image"
    >
      {certificate && (
        <figure className="m-0">
          <SmartImage
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            fallbackSrc="/assets/certificates/placeholder.svg"
            loading="eager"
            className="max-h-[70dvh] w-full bg-navy-950 object-contain"
          />
          <figcaption className="border-t border-border-subtle p-4">
            <p id={titleId} className="text-sm font-medium text-ink-100">
              {certificate.title}
            </p>
            <p className="mt-1 font-mono text-xs text-ink-500">
              {certificate.organization
                ? `${certificate.organization} · ${certificate.year}`
                : certificate.year}
            </p>
          </figcaption>
        </figure>
      )}
    </Modal>
  )
}
