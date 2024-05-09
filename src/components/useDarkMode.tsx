import { useEffect, useState } from "react"

const matchDark = "(prefers-color-scheme: dark)"

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() =>
        window.matchMedia && window.matchMedia(matchDark).matches
    )

    useEffect(() => {
        const media = window.matchMedia(matchDark)
        const listener = (e: MediaQueryListEvent) => setIsDark(e.matches)
        media.addEventListener("change", listener)
        return () => media.removeEventListener("change", listener)
    }, [])

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark])

    return { isDark, setIsDark }
}

export default useDarkMode