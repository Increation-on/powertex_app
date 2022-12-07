import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
