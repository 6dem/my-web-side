import type { JSX } from "react"
import { Outlet } from "react-router-dom"
import { Footer } from "../Footer"
import { Header } from "../Header"
import cls from "./MainLayout.module.css"

export function MainLayout(): JSX.Element {
    return <>
        <div className={cls.mainLayout}>
            <div className={cls.headerBlur} />
            <Header />
            <div className={cls.mainWrapper}>
                <main className={cls.main}>
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    </>
}
