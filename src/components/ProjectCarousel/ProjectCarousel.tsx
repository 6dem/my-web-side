import { projects } from "@/data/portfolio"
import { ProjectCard } from "../ProjectCard"
import cls from './ProjectCarousel.module.css'

export function ProjectCarousel() {
    return (
        <>
            <div className={cls.carousel}>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    )
}
