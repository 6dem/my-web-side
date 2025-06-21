import { useEffect, useRef, useState, type JSX } from "react"
import { useLoader } from "../../context/loader"
import cls from './Emerald.module.css'

interface EmeraldProps {
  size?: number; // ширина в пикселях
}

export function Emerald({size = 100}: EmeraldProps): JSX.Element {
    const { isAnimating } = useLoader()
    const [isHovered, setIsHovered] = useState(false)

    const loaderRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    const active = isAnimating || isHovered

    useEffect(() => {
        const loader = loaderRef.current
        const wrapper = wrapperRef.current

        if(loader && wrapper) {
            if (active) {
                loader.classList.add(cls.tilt)
                wrapper.classList.add(cls.spin)
            } else {
                loader.classList.remove(cls.tilt)
                wrapper.classList.remove(cls.spin)
            }
        }
    }, [active])

    return (
        <div 
            ref={loaderRef} 
            className={cls.pyramidLoader} 
            style={{width: size, height: size}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        <div ref={wrapperRef} className={cls.wrapper}>
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