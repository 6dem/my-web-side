import { getDisplayYear } from "@/utils/getDisplayYear"
import { Copyright } from "lucide-react"
import type { JSX } from "react"
import { useLoader } from "../../context/loader"
import cls from './Footer.module.css'

export function Footer(): JSX.Element {
    const {start, stop} = useLoader()

    const onLinkMouseDown = (): void => {
        start()
        setTimeout(stop, 1500)
    }

    return (
        <footer className={cls.footer}>
            <p className={cls.copyright}>{<Copyright size={14} />} {getDisplayYear(2025)} <span>Edem Ablaev</span></p>
            <a href="https://github.com/6dem/my-web-side" target="_blank" rel="noopener noreferrer" onMouseDown={onLinkMouseDown}>Repository</a>
        </footer>
        )
}