import cn from 'classnames'
import { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  className?: string
  title?: string
}

const Layout = ({ children, className = '', title = 'Resume Chan' }: Props): JSX.Element => (
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
    <main className={cn('w-full', className)}>
      {children}
    </main>
  </>
)

export default Layout
