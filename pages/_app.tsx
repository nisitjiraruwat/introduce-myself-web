import type { AppProps } from 'next/app'

import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'

import '@/styles/globals.css'

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
