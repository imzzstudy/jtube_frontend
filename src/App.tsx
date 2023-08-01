import React from "react";
import "./App.css";

import { RecoilRoot } from "recoil";

import { RouterProvider } from "react-router-dom";
import router from "routes";


const App = () => {
  // const onClickHandler = (event?:React.MouseEvent) => {
  //   console.log('Click Button')
  // }
  
  return (
    <RecoilRoot>
      <RouterProvider router={router}/>
    </RecoilRoot>
  );
};

export default App;
