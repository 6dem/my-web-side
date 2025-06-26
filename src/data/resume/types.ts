export interface IExpirienceList {
    content: string
    years: string
}

export interface IResumeData {
    about: string
    workExperience: IExpirienceList[]
    education: IExpirienceList[]
    skills: string[]
}