import { useState, useEffect } from 'react';
import { getPreferredTheme, setThemeModeCookieValue } from './helpers';

export default function useDarkMode():any {
  const [mode, setMode] = useState(getPreferredTheme());

  function toggleMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  function setBodyCssClass(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  useEffect(() => {
    setThemeModeCookieValue(mode);
    setBodyCssClass(mode);
  }, [mode]);

  return [mode, toggleMode];
}