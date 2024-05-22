import React from 'react';
import ReactDOM from 'react-dom/client';
// import Loginn from './Pages/Loginn';
// import Uploadpage from './Pages/Uploadpage';
// import PaintNav from './Components/PaintNav';


import store from './Store/Store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider> */}

    {/* <PaintNav/> */}
    {/* <Loginn/> */}


    <Provider store={store}>
  
    <RouterProvider router={router}/>
  
    </Provider>
  </React.StrictMode>
);


