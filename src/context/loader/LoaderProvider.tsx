import { useState } from "react"
import { LoaderContext } from "./LoaderContext"

export function LoaderProvider({children}: {children: React.ReactNode}) {
    const [isAnimating, setIsAnimating] = useState(false)

    const start = () => {
        console.log("start");
        setIsAnimating(true)}
    const stop = () => setIsAnimating(false)

    return (
        <LoaderContext.Provider value={{isAnimating, start, stop}}>
            {children}
        </LoaderContext.Provider>
    )
}