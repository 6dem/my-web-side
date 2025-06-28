import type { IProject } from "@/data/portfolio/types"
import cls from './ProjectCard.module.css'

interface IProps {
    project: IProject
}

export function ProjectCard({project}: IProps) {
    return (
        <>
            <div className={cls.card}>
                <img src={project.image} alt={project.title} className={cls.image} />
                <div className={cls.content} >
                    <h3 className={cls.title}>{project.title}</h3>
                    <p className={cls.type}>{project.type}</p>
                    <p className={cls.description}>{project.description}</p>
                    <p className={cls.stack}>{project.stack.join(" | ")}</p>
                    <div className={cls.links}>
                        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className={cls.link}>View Project</a>}
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className={cls.link}>Project Repository</a>
                    </div>
                        <p className={cls.date}>{project.date}</p>
                </div>
            </div>
        </>
    )
}
