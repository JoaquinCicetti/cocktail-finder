import { useContext, useCallback } from 'react';
import { ThemeContext, Themes } from '../contexts/theme';
function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        if (theme === Themes.dark) setTheme(Themes.light);
        else setTheme(Themes.dark);
    }, [theme, setTheme]);

    return {
        theme,
        toggleTheme,
        Themes,
    };
}
export default useTheme;
