import { useLayoutEffect, useState } from 'react';

function useMediaQuery(mediaQuery: string): boolean {
    const initialValue = window.matchMedia(mediaQuery).matches;
    const [matches, setMatches] = useState(initialValue);
    useLayoutEffect(() => {
        const mediaQueryList = window.matchMedia(mediaQuery);
        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
        mediaQueryList.addListener(listener);
        return () => mediaQueryList.removeListener(listener);
    }, [mediaQuery]);

    return matches;
}
export default useMediaQuery;
