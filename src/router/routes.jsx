import About from "../pages/About";
import Delivery from "../pages/Delivery";
import Main from "../pages/Main";
import Payment from "../pages/Payment";
import Product from "../pages/Product";


export const routes = [
    { path: "/main", component: Main },
    { path: "/about", component: About },
    { path: "/payment", component: Payment },
    { path: "/delivery", component: Delivery },
    { psth: "/product", component: Product },
    { path: "/", component: Main },
]