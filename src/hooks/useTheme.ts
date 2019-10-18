import { useContext, useCallback } from 'react';
import { ThemeContext, Themes } from '../contexts/theme';
function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
        setTheme(newTheme);

        if (localStorage) localStorage.setItem('theme', newTheme);
    }, [theme, setTheme]);

    return {
        theme,
        toggleTheme,
        Themes,
    };
}
export default useTheme;
