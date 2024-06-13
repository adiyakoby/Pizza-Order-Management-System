import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Container } from 'react-bootstrap';
import './App.css';
import {StrictMode} from "react";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import Header from "./Components/Header";
import Order from "./Components/Order/Order";
import CheckOrder from "./Components/CheckOrder/CheckOrder";
import Cart from "./Components/Cart/Cart";
import CartContext from "./Components/Context/CartContext";
import Ingredients from "./Components/Order/Ingredients";
import IngredientsContext from "./Components/Context/IngredientsContext";

function App() {
  return (
  <StrictMode>
    <Container fluid>
        <BrowserRouter>
          <CartContext>
              <IngredientsContext>
                <Routes>
                    <Route path="/" element={<Header/>}>
                      <Route index element={<Home/>} />
                      <Route path="/Order" element={<Order/>} />
                      <Route path="/CheckOrder" element={<CheckOrder/>} />
                      <Route path="/Cart" element={<Cart/>} />
                      <Route path="*" element={<NoPage/>} />
                    </Route>
                </Routes>
              </IngredientsContext>
          </CartContext>
        </BrowserRouter>
    </Container>
  </StrictMode>
  );
}

export default App;
