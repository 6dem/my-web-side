import type { JSX } from "react"
import cls from './Emerald.module.css'

interface EmeraldProps {
  size?: number; // ширина в пикселях
}

export function Emerald({size}: EmeraldProps): JSX.Element {
    return (
        <div className={cls.pyramidLoader} style={{width: size, height: size}}>
        <div className={cls.wrapper}>
            <span className={`${cls.side} ${cls.side1}`} />
            <span className={`${cls.side} ${cls.side2}`} />
            <span className={`${cls.side} ${cls.side3}`} />
            <span className={`${cls.side} ${cls.side4}`} />
            <span className={`${cls.side} ${cls.sideBottom} ${cls.side5}`} />
            <span className={`${cls.side} ${cls.sideBottom} ${cls.side6}`} />
            <span className={`${cls.side} ${cls.sideBottom} ${cls.side7}`} />
            <span className={`${cls.side} ${cls.sideBottom} ${cls.side8}`} />
        </div>
      </div>
        );
}