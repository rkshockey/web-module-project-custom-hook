import { useLocalStorage } from "./useLocalStorage"
import {useMedia} from 'react'

export const useDarkMode = (value) => {
    function useDarkModePreference () {
        return useMedia(['(prefers-color-scheme: dark)'], [true], value)
    }
    console.log(useDarkModePreference())
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', value)
    return [darkMode, setDarkMode]
}