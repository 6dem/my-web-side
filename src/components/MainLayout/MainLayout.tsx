import type { JSX } from "react"
import cls from "./MainLayout.module.css"

export function MainLayout(): JSX.Element {
    return <>
        <div className={cls.mainLayout}>
            <header>Header</header>
            <div className={cls.mainWrapper}>
                <main className={cls.main}>
                    Main
                    {/* <Hero></Hero> */}
                    {/* <ProjectsCarousel></ProjectsCarousel> */}
                    {/* <Contacts></Contacts> */}
                </main>

                <footer>Footer</footer>
            </div>
        </div>
    </>
}
