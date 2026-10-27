import logoBlue from '../assets/images/ajfit-logo-azul.webp'
import logoWhite from '../assets/images/ajfit-logo-branca.webp'

/** "AJ" mark + "Fit." wordmark, as used on the store artwork. */
export function BrandLockup({ tone = 'dark', className = '' }) {
  return (
    <span className={`lockup lockup-${tone} ${className}`}>
      <img
        className="lockup-mark"
        src={tone === 'light' ? logoWhite : logoBlue}
        alt=""
        width="360"
        height="243"
        aria-hidden="true"
      />
      <span className="lockup-word">
        Fit<span className="lockup-dot" />
      </span>
      <span className="sr-only">AJ Fit</span>
    </span>
  )
}
