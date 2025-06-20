import type { JSX } from "react"
import { Emerald } from "../Emerald"
import cls from "./MainLayout.module.css"

export function MainLayout(): JSX.Element {
    return <>
        <div className={cls.mainLayout}>
            <header className={cls.header}>Header</header>
            <div className={cls.mainWrapper}>
                <main className={cls.main}>
                    Main
                    <Emerald size={100}/>
                    {/* <Hero></Hero> */}
                    {/* <ProjectsCarousel></ProjectsCarousel> */}
                    {/* <Contacts></Contacts> */}
                </main>

                <footer className={cls.footer}>Footer</footer>
            </div>
        </div>
    </>
}
