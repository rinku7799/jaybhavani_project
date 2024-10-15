// import { ByAddress } from "../pages/ByAdress/ByAddress";
import { OrderAddress } from "../componant/OrderAdress";
import  {HomePage}  from '../pages/Home';
import Myprofile from "../pages/Myprofile";
import PaymentContainer from "../pages/Payment";
import OrderHistory from "../pages/order/orderpage";

export const Routesdata = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path :'/account',
        element:<Myprofile/>
    },{
        path :'/payment',
        element :<PaymentContainer/>
    },
    {
        path :'/orderpage',
        element :<OrderHistory/>
    }
]