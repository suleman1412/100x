import { createContext, useState } from "react"

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    
    const toggleDarkTheme = () => {
        setIsDarkTheme(theme => !theme)
        document.body.classList.toggle('dark', !isDarkTheme)
    }
  return (
    <div>
      <ThemeContext.Provider value={
        toggleDarkTheme
      }>
        { children }
      </ThemeContext.Provider>
    </div>
  )
}

