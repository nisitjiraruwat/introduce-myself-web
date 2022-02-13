import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/common/Layout'
import PassHrefToolTip from '@/components/common/PassHrefToolTip'
import useResposiveValue from '@/hooks/useResposiveText'

export default function Home (): JSX.Element {
  const resumeImageSize = useResposiveValue<number>(240, { md: 333.5 })

  return (
    <Layout
      className='h-screen bg-primary-500'
      isShowNavber={false}
    >
      <div className='w-full'>
        <div className='flex py-[15px] px-8'>
          <div className='flex items-center ml-auto'>
            <a
              className='text-white hover:text-secondary-900 hover:animate-wobble animate-none hover:animate-infinite hover:animate-fast'
              href='https://github.com/nisitjiraruwat/resume-chan-web'
              target='_blank'
              rel='noreferrer'
            >
              <i className='text-current fab fa-github fa-lg'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='absolute top-12 left-12 sm:top-24 sm:left-24'>
        <Link
          href='/nisit.jiraruwat'
          passHref
        >
          <PassHrefToolTip title='Creator'>
            <a className='group block relative w-14 h-14 bg-white rounded-full hover:drop-shadow-xl cursor-pointer'>
              <div className='flex absolute inset-0 justify-center items-center pointer-events-none'>
                <i className='text-secondary-500 group-hover:opacity-0 transition-all duration-300 group-hover:-translate-y-8 fas fa-file fa-2x' />
              </div>
              <div className='flex absolute inset-0 justify-center items-center pointer-events-none'>
                <i className='text-secondary-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-8 group-hover:translate-y-0 fas fa-user-astronaut fa-2x' />
              </div>
            </a>
          </PassHrefToolTip>
        </Link>
      </div>
      <div className='flex flex-col px-12 pt-16 w-full sm:px-24 sm:pt-28 md:flex-row'>
        <div className='flex flex-none items-center w-full md:w-3/5'>
          <div>
            <h1 className='text-4xl font-semibold text-white whitespace-nowrap sm:text-5xl'>Resume Chan</h1>
            <h1 className='mt-4 text-4xl font-semibold text-white sm:text-5xl'>เรซูเม่ฉัน</h1>
          </div>
        </div>
        <div className='flex flex-none justify-end mt-4 w-full md:mt-0 md:w-2/5'>
          <Image
            className='rounded-full'
            src='/assets/images/resumes-desk.jpg'
            alt='Resume Chan Landing Page'
            width={resumeImageSize}
            height={resumeImageSize}
            objectFit='cover'
          />
        </div>
      </div>
    </Layout>
  )
}
