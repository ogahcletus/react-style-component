import logo from './logo.svg'
import './App.css';
import StyledButton, { FancyButton} from './Components/Button/Button';
import './styles.css'
import { AnimatedLogo, DarkButton } from './Components/Button/Button.styles';
import {ThemeProvider, createGlobalStyle} from 'styled-components'

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'

  },

  light: {
    primary: '#fff',
    text: '#000'

  },

  fontFamily: 'Segoe UI'

}

const GlobalStyle = createGlobalStyle`
    button {
      font-family: ${(props) => (props.theme.fontFamily)}

    }
  
  `


function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App">
      {/*<img src={logo} className='App-logo' alt='logo'/>*/}
      <AnimatedLogo src={logo}/>
      <StyledButton type='submit'>StyledButton</StyledButton>
        <div><br /></div>
      <StyledButton variant='outline'>StyledButton</StyledButton>
      <div><br /></div>
      <FancyButton as='a'>FancyButton</FancyButton>
      <div><br /></div>

      <DarkButton>DarkButton</DarkButton>
    </div>
    
    
    </ThemeProvider>
  );
}

export default App;
