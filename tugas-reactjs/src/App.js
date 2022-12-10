import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import "./App.css";
import Navbar from "./component/Navbar";
import Tugas7 from "./tugas7/Tugas7";
import Tugas15Form from "./tugas15/Tugas15Form";
import Tugas15List from "./tugas15/Tugas15List";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Tugas7 />} />
            <Route path='/tugas15' element={<Tugas15List/>} />
            <Route path='/create' element={<Tugas15Form />} />
            <Route path='/edit/:IdData' element={<Tugas15Form />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
