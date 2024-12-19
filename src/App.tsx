import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';


import { Router } from './Router';

import { defaultTheme } from './styles/themes/themes';

import { GlobalStyled } from './styles/global';


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>

  )
}

