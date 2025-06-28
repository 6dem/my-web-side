import { contacts } from "@/data/contacts"
import cls from "./ContactsSection.module.css"

export function ContactsSection() {
    return (
        <>
            <section className="section" id="contacts"> 
                <h2 className={cls.heading}>Contacts</h2>
                <ul className={cls.contactsList}>
                    {Object.entries(contacts).map(([key, {link, content, label, icon: Icon}] )=> (
                        <li className={cls.contact} key={key}>
                            <span className={cls.contactIcon} title={label}><Icon size={24} /></span>
                            <a className={cls.contactLink} href={link} target="_blank" rel="noopener noreferrer">{content}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
