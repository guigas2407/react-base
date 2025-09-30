import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} class="toast-container" />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
