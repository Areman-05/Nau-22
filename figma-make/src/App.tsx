import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Program from './Program';
import ExhibitionDetail from './ExhibitionDetail';
import Artistas from './Artistas';
import PersonDetail from './PersonDetail';
import Info from './Info';
import Noticias from './Noticias';
import NoticiaDetail from './NoticiaDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      { 
        path: "programa", 
        element: <Program /> 
      },
      { 
        path: "programa/:id", 
        element: <ExhibitionDetail /> 
      },
      { 
        path: "artistas", 
        element: <Artistas /> 
      },
      { 
        path: "artistas/:id", 
        element: <PersonDetail /> 
      },
      { 
        path: "info", 
        element: <Info /> 
      },
      { 
        path: "noticias", 
        element: <Noticias /> 
      },
      { 
        path: "noticias/:id", 
        element: <NoticiaDetail /> 
      },
      { 
        path: "proyecto", 
        element: <Info /> 
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
