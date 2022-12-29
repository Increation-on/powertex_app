import About from "../pages/About";
import Delivery from "../pages/Delivery";
import Main from "../pages/Main";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import Products from "../pages/Products";

const NamesById = {
    1: "Powertex A",
    2: "Powertex B",
    3: "Powertex C",
    4: "Powertex D",
    5: "Powertex M90",
    6: "Powertex M110",
    7: "Powertex M140",
};

export const DynamicBreadcrumb = ({ match }) => {
    return <span>{NamesById[match.params.id]}</span>
};

export const routes = [
    { path: "/main", breadcrumb: "Главная", component: Main },
    { path: "/about", component: About },
    { path: "/payment", component: Payment },
    { path: "/delivery", component: Delivery },
    { path: "/products", breadcrumb: "Продукция", component: Products },
    { path: "/", breadcrumb: "Главная", component: Main },
    { path: "products/:id", breadcrumb: DynamicBreadcrumb, component: Product },
]