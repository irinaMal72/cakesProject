import {ADMIN_ROUTE, BASKET_ROUTE, CAKE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";

import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import CakePage from "./pages/CakePage";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },

] //список маршрутов для тех страниц, которые имеет доступ авторизованный пользователь

export const publicRoutes =[
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CAKE_ROUTE+'/:id',
        Component: CakePage
    },
]//список маршрутов для всех пользователей
