import cardDieta from '../assets/app/card-dieta.webp'
import cardRecorde from '../assets/app/card-novo-recorde.webp'
import screenEvolucao from '../assets/app/screen-evolucao.webp'
import screenHome from '../assets/app/screen-home.webp'
import { BrandLockup } from './BrandLockup'
import { FloatCard, PhoneMockup } from './PhoneMockup'
import { StoreButtons } from './StoreButtons'

export function Hero({ links, offer }) {
  return (
    <header className="hero">
      <div className="hero-bar reveal" style={{ '--d': 0 }}>
        <BrandLockup />
        <a className="mono hero-bar-tag" href="#baixar">
          {offer.cta} <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="hero-copy">
        <p className="mono kicker reveal" style={{ '--d': 1 }}>
          App de treino e dieta
        </p>
        <h1 className="hero-title reveal" style={{ '--d': 2 }}>
          <span className="skew">Treino</span>
          <span className="skew">
            e dieta<span className="accent-dot">.</span>
          </span>
        </h1>
        <p className="hero-sub reveal" style={{ '--d': 3 }}>
          <span className="skew">Em um só lugar.</span>
        </p>
      </div>

      <div className="stage">
        <div className="stage-back reveal" style={{ '--d': 5 }}>
          <PhoneMockup src={screenEvolucao} alt="" className="phone-back" />
        </div>
        <div className="stage-main reveal" style={{ '--d': 4 }}>
          <div className="drift">
            <PhoneMockup
              src={screenHome}
              alt="Tela inicial do AJ Fit com o treino de hoje"
              className="phone-main"
              eager
            />
          </div>
        </div>
        <FloatCard
          src={cardRecorde}
          alt="Card de novo recorde de carga"
          width={600}
          height={459}
          className="card-record reveal"
        />
        <FloatCard
          src={cardDieta}
          alt="Resumo da dieta do dia"
          width={500}
          height={477}
          className="card-diet reveal"
        />
      </div>

      <div className="offer reveal" style={{ '--d': 6 }} id="baixar">
        <p className="offer-title">
          <span className="skew">{offer.headline}</span>
        </p>
        <p className="offer-tail">{offer.headlineTail}</p>
        <p className="offer-sub">{offer.subtitle}</p>
        <StoreButtons links={links} />
        <p className="mono offer-foot">{offer.footnote}</p>
      </div>
    </header>
  )
}
