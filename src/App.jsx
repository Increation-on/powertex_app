import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer';
import './index.css';
import ScrollToTop from './ScrollToTop';
import AppRouterTest from './router/AppRouterTest';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        {/* <AppRouterTest /> */}
        <AppRouter/>
        <Footer />
        <ScrollToTop/>
      </div>
    </BrowserRouter>
  );
}

export default App;
