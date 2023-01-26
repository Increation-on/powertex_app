import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer';
import './index.css';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <AppRouter />
        <Footer />
        <ScrollToTop/>
      </div>
    </BrowserRouter>
  );
}

export default App;
