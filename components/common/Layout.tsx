import cn from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
  title?: string
  isShowNavber?: boolean
}

const Layout = ({ children, className = '', title = 'Resume Chan', isShowNavber = true }: Props): JSX.Element => (
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
    {isShowNavber &&
      <div className='sticky top-0 z-40 w-full bg-white/95 border-b border-slate-900/10 backdrop-blur'>
        <div className='flex py-4 px-8'>
          <div>
            <Link href='/'>
              <a className='flex items-center space-x-3'>
                <i className='text-secondary-500 fas fa-file fa-lg' />
                <span className='text-xl font-medium text-black-gray'>Resume Chan</span>
              </a>
            </Link>
          </div>
          <div className='flex items-center ml-auto'>
            <a
              className='text-slate-400 hover:text-slate-500'
              href='https://github.com/nisitjiraruwat/introduce-myself-web'
              target='_blank'
              rel='noreferrer'
            >
              <i className='text-current fab fa-github fa-lg'></i>
            </a>
          </div>
        </div>
      </div>}
    <main className={cn('w-full', className)}>
      {children}
    </main>
  </>
)

export default Layout
