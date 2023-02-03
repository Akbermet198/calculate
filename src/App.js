 
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/Main/Main';
import { ThemesProvider } from './store/ThemeProvider';
 

function App() {

   
  return (
     <>
     <ThemesProvider>
     <Header />  
     <Main />  
     </ThemesProvider>
     
     
     </>
  );
}

export default App;
