import { Copyright } from "lucide-react"
import cls from './Footer.module.css'

const startYear = 2025
const currentYear = new Date().getFullYear()
const displayYear = currentYear === startYear ? `${startYear}` : `${startYear} - ${currentYear}`

export function Footer() {
    return (
        <footer className={cls.footer}>
            <p className={cls.copyright}>{<Copyright size={14} />} {displayYear} <span>Edem Ablaev</span></p>
            <a href="https://github.com/6dem/my-web-side" target="_blank" rel="noopener noreferrer">Repository</a>
        </footer>
        )
}