import type { IResumeData } from "./types"

export const resumeData: IResumeData = {
    specialization: "Software Engineer — Frontend & Process Automation",

    about: "I am a Software Engineer with experience in building modern web applications using React and TypeScript, as well as automating technical processes with Python, Groovy, and SQL-based tools. This combination allows me to design end-to-end solutions, from user interfaces to data pipelines, process optimization, and integration of ML/GPT solutions. I enjoy turning complex problems into efficient, scalable solutions, managing internal technical processes, and continuously expanding my technical expertise. Feel free to explore my projects and experience below.",

    workExperience: [
        {
            content: "Yandex",
            position: "Technical Process Automation Specialist",
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

    skills: ["JavaScript", "TypeScript", "React", "React Router", "Context API", "HTML", "CSS", "CSS Modules", "Jest", "Git", "Vite", "Web Workers", "Next", "Webpack", "SQL", "Python", "Groovy"]

}