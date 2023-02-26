import { useEffect, useState } from "react"
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

const options = [
    {
        icon: LightModeIcon,
        text: "light"
    },
    {
        icon: Brightness4Icon,
        text: "dark"
    },
    {
        icon: DisplaySettingsIcon,
        text: "system"
    }
]

export function Theme() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    )
    const element = document.documentElement
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

    function onWindowMatch() {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }

    }

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break;
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                break;

            default:
                localStorage.removeItem('theme')
                onWindowMatch()
                break;
        }
    }, [theme])

    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) {
                element.classList.add("dark")
            } else {
                element.classList.remove("dark")
            }
        }
    })
    return (
        <>
            {
                options?.map((opt) => (
                    <div>
                        <button key={opt.text} onClick={() => setTheme(opt.text)} className={`w-16 h-16 m-2 text-white  rounded-3xl bg-violet-700 ${theme == opt.text && "text-red-600 opacity-70"}`}><opt.icon /></button>
                    </div>
                ))
            }

        </>
    )
}