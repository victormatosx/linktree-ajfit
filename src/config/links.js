/**
 * Single source of truth for every link rendered on the page.
 *
 * `url: null` means the real destination hasn't been provided yet — the
 * card renders disabled instead of pointing somewhere wrong. Replace the
 * `PLACEHOLDER_*` constants below with the real AJ Fit URLs before launch.
 */

export const PLACEHOLDER_SITE_URL = null
export const PLACEHOLDER_APP_STORE_URL = 'https://apps.apple.com/br/app/aj-fit/id6795349343'
export const PLACEHOLDER_GOOGLE_PLAY_URL = null
export const PLACEHOLDER_INSTAGRAM_URL = 'https://www.instagram.com/ajfit.app/'
export const PLACEHOLDER_TIKTOK_URL = 'https://www.tiktok.com/@ajfit.app'

export const links = [
  {
    id: 'site',
    label: 'Site oficial',
    title: 'Conheça nosso site',
    description: 'Descubra tudo sobre o AJ Fit',
    url: PLACEHOLDER_SITE_URL,
    icon: 'site',
    enabled: true,
  },
  {
    id: 'app-store',
    label: 'App Store',
    title: 'Baixe na App Store',
    description: 'Disponível para iPhone',
    url: PLACEHOLDER_APP_STORE_URL,
    icon: 'appStore',
    enabled: true,
  },
  {
    id: 'google-play',
    label: 'Google Play',
    title: 'Baixe no Google Play',
    description: 'Disponível para Android',
    url: PLACEHOLDER_GOOGLE_PLAY_URL,
    icon: 'googlePlay',
    enabled: true,
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    title: 'Siga no TikTok',
    description: 'Conteúdos, dicas e novidades',
    url: PLACEHOLDER_TIKTOK_URL,
    icon: 'tiktok',
    enabled: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    title: 'Siga no Instagram',
    description: 'Bastidores, treinos e resultados',
    url: PLACEHOLDER_INSTAGRAM_URL,
    icon: 'instagram',
    enabled: true,
  },
]

export const profile = {
  name: 'AJ FIT',
  tagline: 'Treino e dieta em um só lugar.',
}

/**
 * Official trial copy, reused verbatim/near-verbatim from the app's own
 * paywall strings (`src/i18n/resources/pt-BR/common.json` → `paywall.*` in
 * the AJ Fit app repo) so this page never invents a claim the product
 * doesn't make.
 */
export const trialOffer = {
  headline: '7 dias grátis',
  headlineTail: 'para testar tudo',
  subtitle: 'Treino completo, dieta e o AJ com você desde hoje.',
  footnote: 'Disponível para iPhone e Android.',
  cta: 'Baixar o app',
}
