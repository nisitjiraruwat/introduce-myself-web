import type { AppProps } from 'next/app'
import Script from 'next/script'

import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'

import '@/styles/globals.css'

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Script
      strategy='afterInteractive'
      src='https://www.googletagmanager.com/gtag/js?id=G-MFH80XYVB4'
    />
    <Script
      id='gtag-init'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-MFH80XYVB4');
        `
      }}
    />
    <Component {...pageProps} />
  </>
}
