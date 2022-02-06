export type EducationType = {
  id: string
  name: string
  level: string
  graduation: string
}

export type ExperienceType = {
  id: string
  position: string
  company: string
  address: string
  fromDate: string
  toDate: string | null
  works: string[]
}

export type ResumeType = {
  id: string
  fullname: string
  email: string
  phone: string | null
  address: string | null
  website: string | null
  additionalSkills: string[]
  educations: EducationType[]
  experiences: ExperienceType[]
}
