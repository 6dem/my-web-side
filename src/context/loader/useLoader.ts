import { useContext } from "react"
import { LoaderContext } from "./LoaderContext"

export function useLoader() {
    const context = useContext(LoaderContext)
    if(!context) {
        throw new Error("useLoader must be used within LoaderProvider")
    }
    return context
}