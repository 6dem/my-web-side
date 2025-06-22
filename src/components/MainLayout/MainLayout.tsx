import type { JSX } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import cls from "./MainLayout.module.css"

export function MainLayout(): JSX.Element {
    return <>
        <div className={cls.mainLayout}>
            <Header />
            <div className={cls.mainWrapper}>
                <main className={cls.main}>
                    {/* Main */}
                    {/* <Hero></Hero> */}
                    {/* <ProjectsCarousel></ProjectsCarousel> */}
                    {/* <Contacts></Contacts> */}
                </main>

                <Footer />
            </div>
        </div>
    </>
}
