import { useEffect, useRef, type JSX } from "react"
import { useLoader } from "../../context/loader"
import cls from './Emerald.module.css'

interface EmeraldProps {
  size?: number; // ширина в пикселях
}

export function Emerald({size = 100}: EmeraldProps): JSX.Element {
    const { isAnimating } = useLoader()

    const loaderRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const loader = loaderRef.current
        const wrapper = wrapperRef.current

        if(loader && wrapper) {
            if (isAnimating) {
                loader.classList.add(cls.tilt)
                wrapper.classList.add(cls.spin)
            } else {
                loader.classList.remove(cls.tilt)
                wrapper.classList.remove(cls.spin)
            }
        }
    }, [isAnimating])

    return (
        <div ref={loaderRef} className={cls.pyramidLoader} style={{width: size, height: size}}>
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