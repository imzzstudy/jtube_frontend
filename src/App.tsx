import React from "react";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "routes";


const App = () => {
  // const onClickHandler = (event?:React.MouseEvent) => {
  //   console.log('Click Button')
  // }
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
};

export default App;
