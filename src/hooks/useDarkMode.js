import { useLocalStorage } from "./useLocalStorage"
import useMedia from 'use-media'

export const useDarkMode = (value) => {
    const preference = useMedia(["(prefers-color-scheme: dark)"], [true], value);
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', preference)
    return [darkMode, setDarkMode]
}