import { ExperienceType } from '@/types/Resume'

type Props = {
  experience: ExperienceType
}

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const SoftwareDeveloper = ({ experience }: Props): JSX.Element => {
  const fromDate = new Date(experience.fromDate)
  const fromDateText = `${MONTHS[fromDate.getMonth()]} ${fromDate.getFullYear()}`

  const toDate = experience.toDate === null ? null : new Date(experience.toDate)
  const toDateText = toDate === null
    ? 'Present'
    : `${MONTHS[toDate.getMonth()]} ${toDate.getFullYear()}`

  return (
    <div className='flex flex-col'>
      <span className='text-lg font-bold uppercase'>{experience.position}</span>
      <span className='text-lg italic'>{experience.company}, {experience.address} / {fromDateText} – {toDateText}</span>
      <ul className='pl-8 mt-2 list-disc'>
        {experience.works.map((work, index) => {
          return (
            <li key={`${experience.id}-work-${index}`}>{work}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default SoftwareDeveloper
