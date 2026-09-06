import { useCallback, useState } from 'react'
import { CertificateCard } from '../components/CertificateCard'
import { CertificateLightbox } from '../components/CertificateLightbox'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { certifications } from '../data/certifications'
import type { Certificate } from '../types'

export function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null)
  const closeLightbox = useCallback(() => setSelected(null), [])

  return (
    <Section id="certifications" ariaLabel="Certifications and awards">
      <SectionHeading
        index="06"
        title="Certifications & Awards"
        description="Professional development workshops, programmes, and recognition. Click a card to view the certificate."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certificate) => (
          <li key={certificate.slug} className="h-full">
            <CertificateCard certificate={certificate} onOpen={setSelected} />
          </li>
        ))}
      </ul>

      <CertificateLightbox certificate={selected} onClose={closeLightbox} />
    </Section>
  )
}
