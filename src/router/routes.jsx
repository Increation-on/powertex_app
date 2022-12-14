import About from "../pages/About";
import Delivery from "../pages/Delivery";
import Main from "../pages/Main";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import Products from "../pages/Products";


export const routes = [
    { path: "/main", component: Main },
    { path: "/about", component: About },
    { path: "/payment", component: Payment },
    { path: "/delivery", component: Delivery },
    { path: "/products", component: Products },
    { path: "/", component: Main },
    { path: "/products/product/:id", component: Product },
]