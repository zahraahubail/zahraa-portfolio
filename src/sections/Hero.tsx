import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { site } from '../data/site'

/** Small code-styled snippet used as a decorative element in the hero. */
function CodeAside() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-border-subtle bg-navy-850/80 p-5 font-mono text-[13px] leading-relaxed shadow-card"
    >
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500/30" />
      </div>
      <pre className="overflow-x-auto text-ink-400">
        <code>
          <span className="text-accent">const</span> engineer = {'{'}
          {'\n'}  name: <span className="text-accent-soft">'Zahraa Hubail'</span>,
          {'\n'}  focus: [<span className="text-accent-soft">'full-stack'</span>,{' '}
          <span className="text-accent-soft">'backend'</span>,{' '}
          <span className="text-accent-soft">'data'</span>],
          {'\n'}  learning: <span className="text-accent-soft">true</span>,
          {'\n'}  university: <span className="text-accent-soft">'Bahrain Polytechnic'</span>,
          {'\n'}  graduates: <span className="text-accent-soft">2027</span>,
          {'\n'}{'}'}
        </code>
      </pre>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Subtle blueprint grid + glow */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl motion-safe:animate-[float-slow_9s_ease-in-out_infinite]" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-3 py-1 font-mono text-xs text-ink-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for internships · {site.location}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">
            {site.role}
          </p>
          <p className="mt-1 font-mono text-sm text-ink-400">{site.secondaryRole}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-300">
            {site.heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" icon="code">
              View My Projects
            </Button>
            <Button href={site.cvPath} download variant="secondary" icon="download">
              Download CV
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-subtle bg-surface text-ink-300 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-ink-100"
            >
              <Icon name="github" size={20} />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-subtle bg-surface text-ink-300 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-ink-100"
            >
              <Icon name="linkedin" size={20} />
            </a>
            <span className="ml-1 font-mono text-xs text-ink-500">
              github.com/zahraahubail
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <CodeAside />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-max text-ink-500 transition-colors hover:text-accent sm:block"
      >
        <Icon name="chevronDown" size={26} className="motion-safe:animate-bounce" />
      </a>
    </section>
  )
}
