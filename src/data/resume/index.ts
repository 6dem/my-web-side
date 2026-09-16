import type { IResumeData } from "./types"

export const resumeData: IResumeData = {
    specialization: "Software Engineer — AI & Process Automation",

    about: "I am a Software Engineer focused on AI and process automation. I build and optimize technical processes using Python, Groovy, SQL, and internal tools, designing solutions from initial concept to production. My work includes developing end-to-end pipelines, integrating ML/GPT technologies into business processes, and building scalable, maintainable automation systems. I enjoy solving complex technical problems, improving existing processes, and turning repetitive or inefficient workflows into reliable automated solutions. I also have a background in frontend development with React and TypeScript, which gives me a broader perspective when designing end-to-end systems. Feel free to explore my projects and experience below.",

    workExperience: [
        {
            content: "Yandex",
            position: "Senior Technical Process Automation Specialist",
            years: "2025",
            isCurrent: true
        },
        {
            content: "Yandex Crowd",
            position: "Data Labeling Specialist",
            years: "2023 - 2025",
            isCurrent: false
        },
    ],

    education: [{
        content: "MSU (Lomonosov Moscow State University), Faculty of Computational Mathematics and Cybernetics",
        years: "2021 - 2025",
        isCurrent: false
    }],

    skills: ["Python", "Groovy", "SQL", "Git", "JavaScript", "TypeScript", "React", "React Router", "Context API", "HTML", "CSS", "CSS Modules", "Jest", "Vite", "Web Workers", "Next", "Webpack"]

}