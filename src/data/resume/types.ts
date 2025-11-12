export interface IExpirienceList {
    content: string
    position?: string
    years: string
    isCurrent: boolean
}

export interface IResumeData {
    specialization: string
    about: string
    workExperience: IExpirienceList[]
    education: IExpirienceList[]
    skills: string[]
}