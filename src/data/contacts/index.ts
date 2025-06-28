import GitHubIcon from '@/assets/github-mark.svg?react'
import { Mail, Send, Smartphone } from "lucide-react"
import type { IContacts } from "./types"

export const contacts: IContacts = {
    email: {link: "mailto:edem.ablaev57@yandex.ru", content: "edem.ablaev57@yandex.ru", label: "Email", icon: Mail},
    number: {link: "tel:+79787062453", content: "+79787062453", label: "Phone number", icon: Smartphone},
    tgId: {link: "https://t.me/l6deml", content: "l6deml", label: "Telegram", icon: Send},
    gitHubProfile: {link: "https://github.com/6dem", content: "6dem", label: "GitHub", icon: GitHubIcon},
}