import { AppleIcon, GooglePlayIcon } from '../icons/BrandIcons'
import { findLink, isLive } from '../lib/links'

const STORES = [
  { id: 'app-store', kicker: 'Baixar na', name: 'App Store', Icon: AppleIcon },
  { id: 'google-play', kicker: 'Disponível no', name: 'Google Play', Icon: GooglePlayIcon },
]

export function StoreButtons({ links, className = '' }) {
  return (
    <div className={`store-buttons ${className}`}>
      {STORES.map(({ id, kicker, name, Icon }) => {
        const link = findLink(links, id)
        const live = isLive(link)
        const inner = (
          <>
            <Icon className="store-icon" width={22} height={22} />
            <span className="store-text">
              <span className="store-kicker">{live ? kicker : 'Em breve'}</span>
              <span className="store-name">{name}</span>
            </span>
          </>
        )

        if (!live) {
          return (
            <span key={id} className="store-btn is-soon" aria-disabled="true" title="Link em breve">
              {inner}
            </span>
          )
        }

        return (
          <a
            key={id}
            className="store-btn"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
          >
            {inner}
          </a>
        )
      })}
    </div>
  )
}
