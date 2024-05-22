import App from '../App';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Loginn';
import News from '../Pages/News';
import Paintings from '../Components/Paintings';
import Paintings2 from '../Components/Paintings2';
import Layout from '../Components/Layout';
import PaintContent from '../Pages/PaintContent';
import PaintContentB from '../Pages/PaintContentB';
import PaintContentC from '../Pages/PaintContentC';
import Uploadpage from '../Pages/Uploadpage';
import Article from '../Pages/Publish/Article';
import Publish from '../Pages/Publish/Publish';
import PaintNav from '../Components/PaintNav';




const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/upload",
        element: <Login />,
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/paintcontent",
        element: <PaintContent />
      },
      {
        path: "/paintcontentB",
        element: <PaintContentB />
      },
      {
        path: "/paintcontentC",
        element: <PaintContentC />
      },
      {
        path: "/uploadpage",
        element: <Uploadpage />
      },
      {
        path: "/upload/article",
        element: <Article />
      },
      {
        path: "/upload/publish",
        element: <Publish />
      },
      {
        path: '/paintings',
        element: <PaintNav />,
        children: [
          {
            path: '2024',
            element: <Paintings/>
          },
          {
            path: '2023',
            element: <Paintings2/>
          },
        ]
      }
    ]
  }
])

export default router