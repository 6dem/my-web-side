import { PortfolioSection } from "@/sections/PortfolioSection"
import type { JSX } from "react"
import { ResumeSection } from "../../sections/ResumeSection"

export function HomePage(): JSX.Element {
    return <>
            <ResumeSection />
            <PortfolioSection />
        </>
}
