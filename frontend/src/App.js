import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Container } from 'react-bootstrap';
import './App.css';
import {StrictMode} from "react";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import Header from "./Components/Header";
import Order from "./Components/Order/Order";

function App() {
  return (
  <StrictMode>
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>} />
            <Route path="/Order" element={<Order/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  </StrictMode>
  );
}

export default App;
