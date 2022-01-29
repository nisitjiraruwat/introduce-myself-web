import { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'My Resume' }: Props): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
      />
      <link
        rel='shortcut icon'
        href='/favicon.ico'
      />
    </Head>
    <main className='relative w-full'>
      {children}
    </main>
  </>
)

export default Layout
