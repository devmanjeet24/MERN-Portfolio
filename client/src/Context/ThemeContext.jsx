import { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [Theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{Theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

};


export default ThemeContext;