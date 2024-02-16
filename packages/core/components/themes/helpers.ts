export function setThemeModeCookieValue(value: string) {
   document.cookie = `theme=${value}; max-age=31536000; path=/`;
   document.cookie = `theme=${value}; max-age=31536000; domain=${document.location.origin}; path=/`;
}

export function getThemeModeCookieValue() {
   let value;
   if (typeof document !== 'undefined') {
      const cookies = document.cookie.split(';');
      const filteredCookies = cookies.filter(cookie => cookie.indexOf('theme=') >= 0);

      if (filteredCookies.length) {
         value =
            filteredCookies[0].substring(
               filteredCookies[0].indexOf('true'),
               filteredCookies[0].length
            ) === 'dark'
               ? 'dark'
               : 'light';
      }
   }

   return value;
}

export function getPreferredTheme() {
   // Проверка наличия объекта window
   if (typeof window !== 'undefined') {
      const preferredTheme = getThemeModeCookieValue();
      const userMedia = window.matchMedia('(prefers-color-scheme: light)')

      return preferredTheme || (userMedia.matches ? 'dark' : 'light');
   } else {
      // Обработка сценария, когда код выполняется в среде, где window не определен
      return 'light'; // или любое другое значение по умолчанию
   }
}