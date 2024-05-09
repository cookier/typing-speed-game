import useDarkMode from "./useDarkMode"
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export const DarkModeToggle = () => {
    const { isDark, setIsDark } = useDarkMode()
    return (<button className='p-2 rounded-full dark:text-slate-400
      absolute top-4 right-4'
        onClick={() => setIsDark(!isDark)}>{isDark ? <MdDarkMode /> : <CiLight />}</button>
    )
}