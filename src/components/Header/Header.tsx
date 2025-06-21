import type { JSX } from "react"
import { Emerald } from "../Emerald"
import cls from './Header.module.css'

export function Header(): JSX.Element {

    return <header className={cls.header}>
        <Emerald size={35}/>
        <h1 className={`${cls.title} ${cls.typing}`}>My Web Side</h1>
        <nav className={cls.navMenu}>
            <ul className={cls.navList}>
                <li>
                    <a href="" className={cls.navLink}>Resume</a>
                </li>
                <li>
                    <a href="" className={cls.navLink}>Portfolio</a>
                </li>
                <li>
                    <a href="" className={cls.navLink}>Contacts</a>
                </li>
            </ul>
        </nav>
    </header>
}
