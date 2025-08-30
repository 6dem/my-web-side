import { ContactForm } from "@/components/ContactForm"
import { contacts } from "@/data/contacts"
import cls from "./ContactsSection.module.css"

export function ContactsSection() {
    return (
        <>
            <section className={`section ${cls.contacts}`} id="contacts"> 
                <h2 className={cls.heading}>Contacts</h2>
                <div className={cls.contactsWrapper}>
                    <ul className={cls.contactsList}>
                        {Object.entries(contacts).map(([key, {link, content, label, icon: Icon}] )=> (
                            <li className={cls.contact} key={key}>
                                <span className={cls.contactIcon} title={label}><Icon size={24} /></span>
                                <a className={cls.contactLink} href={link} target="_blank" rel="noopener noreferrer">{content}</a>
                            </li>
                        ))}
                    </ul>
                    <ContactForm />
                </div>
            </section>
        </>
    )
}
