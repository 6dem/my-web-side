import { ProjectCarousel } from "@/components/ProjectCarousel"
import cls from "./PortfolioSection.module.css"

export function PortfolioSection() {
    return (
        <>
            <section id="portfolio" className="section">
                <h2 className={cls.heading}>Portfolio</h2>
                <ProjectCarousel />
            </section>
        </>
        )
}
