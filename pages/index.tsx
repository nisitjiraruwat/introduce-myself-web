import Image from 'next/image'

import Layout from '@/components/common/Layout'

export default function Home (): JSX.Element {
  return (
    <Layout className='h-full bg-primary-500'>
      <div className='absolute top-24 left-24'>
        <div className='flex justify-center items-center w-14 h-14 bg-white rounded-full'>
          <i className='text-secondary-500 fas fa-file fa-2x' />
        </div>
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
