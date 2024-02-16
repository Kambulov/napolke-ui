import React from 'react'

const DarkModeContext = React.createContext<any>({
   mode: '',
   toggleMode: () => {},
});

export default DarkModeContext;