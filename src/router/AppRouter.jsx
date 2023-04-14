import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import About from "../pages/About";
import Delivery from "../pages/Delivery";
import MobileMain from '../pages/mobile/MobileMain';
import Main from "../pages/Main";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import Products from "../pages/Products";
// import { routes } from './routes';


const NamesById = {
    1: "Powertex A",
    2: "Powertex B",
    3: "Powertex C",
    4: "Powertex D",
    5: "Powertex M90",
    6: "Powertex M110",
    7: "Powertex M140",
    8: "Powertex S",
};

export const DynamicBreadcrumb = ({ match }) => {
    return <span>{NamesById[match.params.id]}</span>
};



const AppRouterTest = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Routes>
            <Route path={'/main'} breadcrumb="Главная" element={screenWidth <= 859 ? <MobileMain /> : <Main />} />
            <Route path={'/'} breadcrumb="Главная" element={screenWidth <= 859 ? <MobileMain /> : <Main />} />
            <Route path={'/about'} breadcrumb="О нас" element={<About />} />
            <Route path={'/payment'} breadcrumb="Оплата" element={<Payment />} />
            <Route path={'/delivery'} breadcrumb="Доставка" element={<Delivery />} />
            <Route path={'/products'} breadcrumb="Продукция" element={<Products />} />
            <Route path={'/products/:id'} breadcrumb={DynamicBreadcrumb} element={<Product />} />
        </Routes>
    )
}

export default AppRouterTest;
