import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import {
  AppleIcon,
  GooglePlayIcon,
  InstagramIcon,
  SiteIcon,
  TikTokIcon,
} from '../icons/BrandIcons'
import { isLive } from '../lib/links'

const ICONS = {
  site: SiteIcon,
  appStore: AppleIcon,
  googlePlay: GooglePlayIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
}

function LinkRow({ link, index }) {
  const Icon = ICONS[link.icon]
  const live = isLive(link)
  const number = String(index + 1).padStart(2, '0')

  const content = (
    <>
      <span className="row-num mono">{number}</span>
      <span className="row-icon">
        <Icon width={20} height={20} />
      </span>
      <span className="row-text">
        <span className="row-title">{link.label}</span>
        <span className="row-desc">{link.description}</span>
      </span>
      {live ? (
        <span className="row-go" aria-hidden="true">
          <ArrowUpRight size={20} strokeWidth={2} />
        </span>
      ) : (
        <span className="row-soon mono">Em breve</span>
      )}
    </>
  )

  if (!live) {
    return (
      <li style={{ '--i': index }}>
        <span id={`link-${link.id}`} className="row is-soon" aria-disabled="true" title="Link em breve">
          {content}
        </span>
      </li>
    )
  }

  return (
    <li style={{ '--i': index }}>
      <a
        id={`link-${link.id}`}
        className="row"
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${link.title} — ${link.description}`}
      >
        {content}
      </a>
    </li>
  )
}

export function LinksSection({ links }) {
  const ref = useReveal()

  return (
    <section className="links" aria-labelledby="links-title" ref={ref}>
      <div className="links-inner">
        <div className="links-head">
          <p className="mono links-kicker">
            <b>//</b> Acesse
          </p>
          <h2 id="links-title" className="links-title">
            <span className="skew">
              Links oficiais<span className="accent-dot">.</span>
            </span>
          </h2>
          <p className="links-lede">Site, aplicativo e redes do AJ Fit.</p>
        </div>
        <nav aria-label="Links principais">
          <ol className="rows">
            {links.map((link, index) => (
              <LinkRow key={link.id} link={link} index={index} />
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
