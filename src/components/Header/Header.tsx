import { useEffect, useState, type JSX } from "react"
import { Emerald } from "../Emerald"
import cls from './Header.module.css'

const navList: string[] = ["resume", "portfolio", "contacts"]

export function Header(): JSX.Element {

    const [active, setActive] = useState(0)
    const [hover, setHover] = useState<number | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    const itemWidth = 100

    const getOffset = (): number => {
        if (hover === null || hover === active) return active * itemWidth
    
        const delta: number = hover - active
        const direction: number = Math.sign(delta)
        const magnitude: number = Math.min(Math.abs(delta), 2)
        const partialOffset: number = direction * magnitude * itemWidth * 0.1

        return active * itemWidth + partialOffset
    }

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300)
        return () => clearTimeout(timer)
    }, [])


    return <header className={cls.header}>
        <Emerald size={35}/>
        <h1 className={`${cls.title} ${cls.typing}`}>My Web Side</h1>
        <nav className={cls.navMenu}>
            <ul className={cls.navList}>
                {navList.map((id, i) => (
                    <li key={id}>
                        <a href={`#${id}`}
                        className={`${cls.navLink} ${active === i ? cls.active : ""}`}
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => setActive(i)}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
            <div className={cls.underline} style={{
                transform: isVisible
                ? `translateX(${getOffset()}px) scaleX(1)`
                : `translateX(${getOffset()}px) scaleX(0)`,
            }}/>
        </nav>
    </header>
}
