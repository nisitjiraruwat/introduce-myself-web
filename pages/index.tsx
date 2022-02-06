import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/common/Layout'

export default function Home (): JSX.Element {
  return (
    <Layout
      className='h-full bg-primary-500'
      isShowNavber={false}
    >
      <div className='w-full'>
        <div className='flex py-[15px] px-8'>
          <div className='flex items-center ml-auto'>
            <a
              className='text-white hover:text-secondary-900'
              href='https://github.com/nisitjiraruwat/resume-chan-web'
              target='_blank'
              rel='noreferrer'
            >
              <i className='text-current fab fa-github fa-lg'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='absolute top-24 left-24'>
        <Link href='/nisit.jiraruwat'>
          <a className='group block relative w-14 h-14 bg-white rounded-full hover:drop-shadow-xl'>
            <div className='flex absolute inset-0 justify-center items-center'>
              <i className='text-secondary-500 group-hover:opacity-0 transition-all duration-300 group-hover:-translate-y-8 fas fa-file fa-2x' />
            </div>
            <div className='flex absolute inset-0 justify-center items-center'>
              <i className='text-secondary-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-8 group-hover:translate-y-0 fas fa-user-astronaut fa-2x' />
            </div>
            <div className='hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2'>
              <h3 className='flex px-2 pb-0.5 text-sm text-white bg-zinc-900 rounded'>Creator</h3>
            </div>
          </a>
        </Link>
      </div>
      <div className='flex px-24 pt-28 w-full'>
        <div className='flex flex-none items-center w-3/5'>
          <div>
            <h1 className='text-5xl font-semibold text-white'>Resume Chan</h1>
            <h1 className='mt-4 text-5xl font-semibold text-white'>เรซูเม่ฉัน</h1>
          </div>
        </div>
        <div className='flex flex-none justify-end w-2/5'>
          <Image
            className='rounded-full'
            src='/assets/images/resumes-desk.jpg'
            alt='Resume Chan Landing Page'
            width={333.5}
            height={333.5}
            objectFit='cover'
          />
        </div>
      </div>
    </Layout>
  )
}
