import type { IProject } from "./types"

export const projects: IProject[] = [
    {
        id: "5",
        type: "Website",
        title: "Go \"KIRI\" School",
        description: "A responsive website for the Go “KIRI” School, featuring an online enrollment form and server-side request handling. Integrated with an external Telegram bot (managed as a separate service) for processing submissions and notifying administrators in real time. Deployed through automated CI/CD pipelines using GitHub Actions.",
        stack: ["Next", "SCSS Modules", "TypeScript", "Node.js", "API Integration", "Telegram Bot Integration", "Webpack", "CI/CD", "GitHub Actions"],
        image: "/assets/kiri-go.png",
        link: "https://kiri-go.ru",
        date: "2025-09"
    },
    {
        id: "6",
        type: "TG Bot",
        title: "KiriBot",
        description: "A Telegram bot for the Go “KIRI” School that handles student enrollment, processes form submissions through an interactive flow, and sends structured applications to administrators. Includes developer debugging tools, group-invite generation, and automated deployment to a VDS via PM2 and GitHub Actions.",
        stack: ["Telegraf", "Linux (VDS)", "Node.js", "PM2", "JavaScript", "API Integration", "Telegram Bot API", "CI/CD", "GitHub Actions"],
        image: "/assets/kiri-bot.png",
        link: "https://t.me/schoolgo_kiribot",
        date: "2025-09"
    },
    {
        id: "1",
        type: "Web App",
        title: "FCircuit Simulator",
        description: "FCircuit Simulator is a web application for modeling, visualizing, and analyzing functional element circuits with delay.",
        stack: ["JavaScript", "HTML", "CSS", "Konva", "Apache ECharts", "Jest"],
        image: "/assets/fcircuit-sim.png",
        link: "https://6dem.github.io/fcircuit-sim/",
        repo: "https://github.com/6dem/fcircuit-sim",
        date: "2024-11"
    },
    {
        id: "2",
        type: "Web App",
        title: "React Cards",
        description: "React Cards is an educational web application for learning key React concepts and tools through interactive card work.",
        stack: ["React", "CSS Modules", "REST API", "JavaScript", "HTML", "CSS", "React Router", "React Toastify", "Vite"],
        image: "/assets/react-cards-app.png",
        link: "https://react-cards-app-0gli.onrender.com",
        repo: "https://github.com/6dem/react-cards-app",
        date: "2025-05"
    },
    {
        id: "3",
        type: "Landing",
        title: "Aivazovski Landing",
        description: "Layout of the landing page of the Russian marine artist Ivan Aivazovsky",
        stack: ["HTML", "CSS", "JavaScript"],
        image: "/assets/aivazovski-page.png",
        link: "https://6dem.github.io/aivazovski_page/",
        repo: "https://github.com/6dem/aivazovski_page",
        date: "2024-10"
    },
    {
        id: "4",
        type: "Landing",
        title: "Alivio Landing",
        description: "Layout of the landing page",
        stack: ["HTML", "CSS", "JavaScript"],
        image: "/assets/alivio-page.png",
        link: "https://6dem.github.io/alivio_page/",
        repo: "https://github.com/6dem/alivio_page",
        date: "2024-10"
    },
    {
        id: "0",
        type: "Website",
        title: "My Web Side",
        description: "My Web Side is my personal portfolio website (SPA) showcasing my frontend development skills, attention to UI detail, and the technology stack I work with.",
        stack: ["TypeScript", "React", "CSS Modules", "Vite"],
        image: "/assets/my-web-side.png",
        repo: "https://github.com/6dem/my-web-side",
        date: "2025-06"
    }
]