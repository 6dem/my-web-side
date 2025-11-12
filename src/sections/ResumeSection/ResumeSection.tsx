import { SkillsCloud } from "@/components/SkillsCloud"
import { resumeData } from "@/data/resume"
import { getDisplayYear } from "@/utils/getDisplayYear"
import type { JSX } from "react"
import cls from './ResumeSection.module.css'

const birthYear: number = 2004
const currentYear: number = new Date().getFullYear()
const age: number = currentYear - birthYear
const location: string = "Simferopol, Russia"

export function ResumeSection(): JSX.Element {

    return (
        <section id="resume" className="section">
            <h2 className={cls.heading}>Resume</h2>

            <div className={`${cls.block} ${cls.hero}`}>
                <div className={cls.mainInfo}>
                    <h3 className={cls.name}>Ablaev Edem</h3>
                    <p className={cls.profession}>{resumeData.specialization}</p>
                </div>
                <div className={cls.extraInfo}>
                    <p className={cls.age}><b>Age:</b> {age}</p>
                    <p className={cls.location}><b>Location:</b> {location}</p>
                </div>
            </div>

            <div className={cls.block}>
                <h3 className={cls.subheading}>About me</h3>
                <div className={cls.aboutContent}>
                    {resumeData.about.split("\n").map( (line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            </div>

            {resumeData.workExperience?.length > 0 && (
                <div className={cls.block}>
                    <h3 className={cls.subheading}>Work Experience</h3>
                    <ul>
                        {resumeData.workExperience.map((item, i) => {
                            const years = item.isCurrent
                                ? getDisplayYear(parseInt(item.years), true)
                                : item.years

                            return (
                                <li key={i} className={`${cls.listItem} ${item.isCurrent ? cls.currentListItem : ""}`}>
                                    <div className={cls.years}>{years}</div>
                                    <div>
                                        <strong>{item.content}</strong>
                                        {item.position && " — "}
                                        {item.position}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}

            {resumeData.education?.length > 0 && (
                <div className={cls.block}>
                    <h3 className={cls.subheading}>Education</h3>
                    <ul className={cls.educationList}>
                        {resumeData.education.map((item, i) => (
                            <li key={i} className={`${cls.listItem} ${item.isCurrent ? cls.currentListItem : ""}`}>
                                <div className={cls.years}>{getDisplayYear(parseInt(item.years))}</div>
                                {item.content}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className={cls.block}>
                <h3 className={cls.subheading}>Skills</h3>
                <SkillsCloud skills={resumeData.skills}/>
            </div>
        </section>
    )
}
