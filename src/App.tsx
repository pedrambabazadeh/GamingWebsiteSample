import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { BottomNavigation, Box, Button, createTheme, styled, ThemeProvider } from '@mui/material';
import {Header, Footer, ToggleMenu, IFrameProjector} from './components';
import {MainPage} from './containers'
import { RefsProvider } from './hooks/ModeProvider';
import ModesHOC from './hooks/ModesHOC'
import CartDetails from './components/CartDetails/CartDetails';


const StyledApp = styled(Box)`
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 40%;
    min-height: 100%;
    height: 100%;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      light: '#009793',
    },
    secondary: {
      main:'#FF1468',
      dark: '#000000',
      light: '#ffffff'
    },
   /* white: {
      main: '#ffffff',
      light: '#ffffff',
      Dark: '#ffffff',
      contrastText:'#000000',
    }*/
  },
});

function App() {
  return (
    <RefsProvider>
    <BrowserRouter>
    <ModesHOC>
    <ThemeProvider theme={theme}>
      <StyledApp>
      <Header/>
      <IFrameProjector/>
      <CartDetails data-text="light"/>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
          </Routes>
          <ToggleMenu/>
      <Footer/>
      </StyledApp>
    </ThemeProvider>
    </ModesHOC>
   </BrowserRouter>
   </RefsProvider>
  );
}

export default App;
