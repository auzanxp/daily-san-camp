import React from "react";
import "./App.css";
import { GlobalProvider } from "./context/GlobalContext";
import Tugas10 from "./tugas10/Tugas10";
import Tugas11 from "./tugas11/Tugas11";
import Tugas12 from "./tugas12/Tugas12";
import Tugas13 from "./tugas13/Tugas13";
import Tugas7 from "./tugas7/Tugas7";
import Tugas8 from "./tugas8/Tugas8";
import Tugas9 from "./tugas9/Tugas9";

const App = () => {
  return (
    <GlobalProvider>
      {/* <Tugas7 />
      <Tugas8 name='Istikhori Auzan' batch='40' email='auzanxp@gmail.com' />
      <Tugas9 />
      <Tugas10 />
      <Tugas11/>
      <Tugas12/> */}
      <Tugas13 />
    </GlobalProvider>
  );
}

export default App;
