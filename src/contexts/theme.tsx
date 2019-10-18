import React, { useState, useEffect } from 'react';
enum Themes {
    dark = 'dark',
    light = 'light',
}
interface ThemeContext {
    theme: Themes.dark | Themes.light;
    setTheme: (theme: Themes.dark | Themes.light) => void;
}
const voidContext: ThemeContext = {
    theme: Themes.dark,
    setTheme: theme => {},
};
const ThemeContext = React.createContext<ThemeContext>(voidContext);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(Themes.dark);

    const themeHandler = {
        theme,
        setTheme,
    };

    // load last theme
    useEffect(() => {
        if (localStorage) {
            const loadedTheme = localStorage.getItem('theme');
            if (loadedTheme === Themes.dark || loadedTheme === Themes.light) setTheme(loadedTheme);
        }
    }, []);
    return <ThemeContext.Provider value={themeHandler}>{children}</ThemeContext.Provider>;
};

export { Themes, ThemeContext, ThemeProvider };
