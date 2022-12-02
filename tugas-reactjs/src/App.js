import React from "react";
import "./App.css";
import Tugas10 from "./tugas10/Tugas10";
import Tugas7 from "./tugas7/Tugas7";
import Tugas8 from "./tugas8/Tugas8";
import Tugas9 from "./tugas9/Tugas9";

const App = () => {
  return (
    <>
      <Tugas7 />
      <Tugas8 name='Istikhori Auzan' batch='40' email='auzanxp@gmail.com' />
      <Tugas9 />
      <Tugas10/>
    </>
  );
}

export default App;
