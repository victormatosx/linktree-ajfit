/**
 * iPhone frame drawn in CSS around a real AJ Fit screen (exported from the
 * store artwork). Size it with the `--pw` custom property.
 */
export function PhoneMockup({ src, alt, className = '', eager = false }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-glass">
        <img
          src={src}
          alt={alt}
          width="780"
          height="1688"
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
        />
      </div>
    </div>
  )
}

/** A real app component floating over the composition. */
export function FloatCard({ src, alt, width, height, className = '' }) {
  return (
    <img
      className={`float-card ${className}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  )
}
