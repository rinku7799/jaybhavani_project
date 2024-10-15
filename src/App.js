import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './componant/Header';
import Order from './componant/Order';
import { OrderAdress } from './componant/OrderAdress';
import { Routesdata } from './Rotes';
import {Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <>
 <Routes>
{Routesdata.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
</Routes>


    {/* <Header/> */}
    {/* <Order/> */}
    {/* <OrderAdress/> */}
  
    </>
  );
}

export default App;
