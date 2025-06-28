export interface IProject {
  id: string
  type: "web-app" | "landing"
  title: string
  description: string
  stack: string[]
  image: string
  link?: string
  repo: string
  date: string
}
