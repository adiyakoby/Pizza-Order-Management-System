import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Container } from 'react-bootstrap';
import './App.css';
import {StrictMode} from "react";
import Home from "./Components/Home";

function App() {
  return (
  <StrictMode>
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  </StrictMode>
  );
}

export default App;
