import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
