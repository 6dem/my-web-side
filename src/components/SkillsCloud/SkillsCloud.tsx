import { useMemo } from 'react'
import cls from './SkillsCloud.module.css'

export const SkillsCloud = ({ skills }: { skills: string[] }) => {
  const placed = useMemo(() =>
    skills.map(skill => ({
      skill,
      colSpan: Math.random() < 0.4 ? 2 : 1,
      rowSpan: Math.random() < 0.4 ? 2 : 1,
    })), [skills]);

  return (
    <>
      <ul className={cls.cloud}>
        {placed.map(({ skill, colSpan, rowSpan }, i) => (
          <li
            key={i}
            className={cls.item}
            style={{
              gridColumnEnd: `span ${colSpan}`,
              gridRowEnd: `span ${rowSpan}`,
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
};
