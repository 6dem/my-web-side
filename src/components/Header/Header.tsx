import { FolderGit2, Mail, SquareUserRound, type LucideIcon } from "lucide-react"
import { useEffect, useState, type JSX } from "react"
import { Emerald } from "../Emerald"
import cls from './Header.module.css'

interface INavList {
    id: string;
    label: string;
    icon: LucideIcon;
}

const navList: INavList[] = [
  { id: "resume", label: "Resume", icon: SquareUserRound },
  { id: "portfolio", label: "Portfolio", icon: FolderGit2 },
  { id: "contacts", label: "Contacts", icon: Mail },
];

export function Header(): JSX.Element {

    const [active, setActive] = useState(0)
    const [hover, setHover] = useState<number | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [itemWidth, setItemWidth] = useState(100)

    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth
            setItemWidth(width < 750 ? 50 : 100)
        }

        updateWidth()
        window.addEventListener("resize", updateWidth)

        return window.removeEventListener("resize", updateWidth)
    }, [])

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
                {navList.map(({id, label, icon: Icon}, i) => (
                    <li key={id}>
                        <a href={`#${id}`}
                        className={`${cls.navLink} ${active === i ? cls.active : ""}`}
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => setActive(i)}
                        >
                            <span className={cls.iconOnly}><Icon size={20} /></span>
                            <span className={cls.textOnly}>{label}</span>
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
