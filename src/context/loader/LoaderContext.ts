import { createContext } from "react"

interface LoaderContextType {
    isAnimating: boolean;
    start: () => void;
    stop: () => void;
}

export const LoaderContext = createContext<LoaderContextType | null>(null)