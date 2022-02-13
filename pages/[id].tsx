import { gql } from '@apollo/client'
import { GetServerSidePropsContext, InferGetServerSidePropsType, GetServerSidePropsResult } from 'next'

import Layout from '@/components/common/Layout'
import Tooltip from '@/components/common/Tooltip'
import SoftwareDeveloper from '@/components/resume/SoftwareDeveloper'
import apolloClient from '@/lib/apollo-client'
import { ResumeType } from '@/types/Resume'
import { isTextNotEmpty } from '@/utils/text'

export async function getServerSideProps ({ params }: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{ resume: ResumeType }>> {
  const id = params!.id as string
  const { data } = await apolloClient.query<{resumes: ResumeType[]}>({
    query: gql`
      query {
        resumes(where: {user: { username: {equals: "${id}"}}}, take: 1) {
            id
            fullname
            email
            phone
            address
            website
            educations {
                id
                name
                level
                graduation
            }
            additionalSkills 
            experiences(orderBy: { fromDate: desc }) {
                id
                position
                company
                address
                fromDate
                toDate
                works
            }
        }
      }
    `
  })

  if (data.resumes.length === 0) {
    return {
      notFound: true
    }
  }

  return { props: { resume: data.resumes[0] } }
}

export default function Profile ({ resume }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <Layout
      className='print:overflow-hidden overflow-x-auto bg-gray-100'
      title={`Resume - ${resume.fullname}`}
    >
      <div className='mx-auto w-print min-h-print font-sarabun bg-white'>
        <div className='relative w-full'>
          <div className='w-full h-16 bg-white' />
          <div className='w-full h-32 bg-gray-300' />
          <div className='absolute inset-0 py-8 px-16 w-full h-full bg-transparent'>
            <div className='flex justify-center items-center w-full h-full bg-white border-4 border-orange-300'>
              <span className='text-7xl font-semibold uppercase'>{resume.fullname}</span>
            </div>
          </div>
        </div>
        <div className='flex p-8'>
          <div className='pr-4 space-y-4 w-2/5 border-r-4 border-orange-300'>
            <div className='space-y-2'>
              <div className='flex justify-end items-center space-x-3'>
                <span className='text-xl font-semibold tracking-widest'>CONTACT</span>
                <svg
                  height='28'
                  width='48'
                >
                  <line
                    className='text-orange-300 stroke-current stroke-[4px]'
                    x1='0'
                    y1='14'
                    x2='48'
                    y2='14'
                  />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
              <div>
                <div className='flex justify-end items-center space-x-4'>
                  <span className='text-lg'>{resume.email}</span>
                  <div className='flex flex-none justify-center w-8'><i className='text-2xl fas fa-envelope' /></div>
                </div>
                {isTextNotEmpty(resume.phone) && <div className='flex justify-end items-center space-x-4'>
                  <span className='text-lg'>{resume.phone}</span>
                  <div className='flex flex-none justify-center w-8'><i className='text-2xl fas fa-phone' /></div>
                </div>}
                {isTextNotEmpty(resume.address) && <div className='flex justify-end items-center space-x-4'>
                  <span className='text-lg'>{resume.address}</span>
                  <div className='flex flex-none justify-center w-8'><i className='text-2xl fas fa-map-marker-alt' /></div>
                </div>}
                {isTextNotEmpty(resume.website) && <div className='flex justify-end items-center space-x-4'>
                  <a
                    className='text-lg text-blue-600 print:text-current underline print:no-underline break-all'
                    href={resume.website!}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {resume.website}
                  </a>
                  <div className='flex flex-none justify-center w-8'><i className='text-2xl fas fa-globe' /></div>
                </div>}
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex justify-end items-center space-x-3'>
                <span className='text-xl font-semibold tracking-widest'>EDUCATION</span>
                <svg
                  height='28'
                  width='48'
                >
                  <line
                    className='text-orange-300 stroke-current stroke-[4px]'
                    x1='0'
                    y1='14'
                    x2='48'
                    y2='14'
                  />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
              <div className='flex flex-col'>
                <span className='text-lg font-bold text-right uppercase'>{resume.educations[0].name}</span>
                <span className='text-lg text-right'>{resume.educations[0].level}<br />({resume.educations[0].graduation})</span>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex justify-end items-center space-x-3'>
                <span className='text-xl font-semibold tracking-widest text-right'>ADDITIONAL SKILLS</span>
                <svg
                  height='28'
                  width='48'
                >
                  <line
                    className='text-orange-300 stroke-current stroke-[4px]'
                    x1='0'
                    y1='14'
                    x2='48'
                    y2='14'
                  />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
              <div className='flex flex-col'>
                {
                  resume.additionalSkills.map((additionalSkill, index) => {
                    return (
                      <span
                        key={`additional-skill-${index}`}
                        className='text-lg text-right'
                      >{additionalSkill}
                      </span>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='pl-4 space-y-4 w-3/5'>
            <div className='space-y-2'>
              <div className='flex items-center space-x-3'>
                <svg
                  height='28'
                  width='96'
                >
                  <line
                    className='text-orange-300 stroke-current stroke-[4px]'
                    x1='0'
                    y1='14'
                    x2='96'
                    y2='14'
                  />
                  Sorry, your browser does not support inline SVG.
                </svg>
                <span className='text-xl font-semibold tracking-widest'>PROFESSIONAL EXPERIENC</span>
              </div>
              <div className='space-y-5'>
                {resume.experiences.map((experience) => {
                  return (
                    <SoftwareDeveloper
                      key={`experience-${experience.id}`}
                      experience={experience}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tooltip title='Print'>
        <button
          className='print-btn'
          onClick={() => print()}
        >
          <i className='text-white fas fa-print fa-lg' />
        </button>
      </Tooltip>
    </Layout>
  )
}
