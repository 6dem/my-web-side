export interface IProject {
  id: string
  type: "Web App" | "Landing" | "Website"
  title: string
  description: string
  stack: string[]
  image: string
  link?: string
  repo: string
  date: string
}
