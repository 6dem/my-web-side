
interface IContact {
    link: string
    content: string
    label: string
    icon: React.ComponentType<{ size?: number; className?: string }>
}

export interface IContacts {
    number: IContact
    email: IContact
    tgId: IContact
    gitHubProfile: IContact
}