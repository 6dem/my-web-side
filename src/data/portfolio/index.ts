import type { IProject } from "./types"

export const projects: IProject[] = [
    {
        id: "1",
        type: "web-app",
        title: "FCircuit Simulator",
        description: "FCircuit Simulator is a web application for modeling, visualizing, and analyzing functional element circuits with delay.",
        stack: ["JavaScript", "HTML", "CSS", "Konva", "Apache ECharts","Jest"],
        image: "src/data/portfolio/assets/fcircuit-sim.png",
        link: "https://6dem.github.io/fcircuit-sim/",
        repo: "https://github.com/6dem/fcircuit-sim",
        date: "2025-05"
    },
    {
        id: "2",
        type: "web-app",
        title: "React Cards",
        description: "React Cards is an educational web application for learning key React concepts and tools through interactive card work.",
        stack: ["React", "CSS Modules", "json-server", "JavaScript", "HTML", "CSS", "React Router", "React Toastify", "Vite"],
        image: "src/data/portfolio/assets/react-cards-app.png",
        repo: "https://github.com/6dem/react-cards-app",
        date: "2025-05"
    },
    {
        id: "3",
        type: "landing",
        title: "Aivazovski Landing",
        description: "Layout of the landing page of the Russian marine artist Ivan Aivazovsky",
        stack: ["HTML", "CSS", "JavaScript"],
        image: "src/data/portfolio/assets/aivazovski-page.png",
        link: "https://6dem.github.io/aivazovski_page/",
        repo: "https://github.com/6dem/aivazovski_page",
        date: "2024-10"
    },
    {
        id: "4",
        type: "landing",
        title: "Alivio Landing",
        description: "Layout of the landing page",
        stack: ["HTML", "CSS", "JavaScript"],
        image: "src/data/portfolio/assets/alivio-page.png",
        link: "https://6dem.github.io/alivio_page/",
        repo: "https://github.com/6dem/alivio_page",
        date: "2024-10"
    },
    {
        id: "0",
        type: "web-app",
        title: "My Web Side",
        description: "My Web Side is my personal portfolio website (SPA) showcasing my frontend development skills, attention to UI detail, and the technology stack I work with.",
        stack: ["TypeScript", "React", "CSS Modules", "Vite"],
        image: "src/data/portfolio/assets/my-web-side.png",
        repo: "https://github.com/6dem/my-web-side",
        date: "2025-06"
    }
]