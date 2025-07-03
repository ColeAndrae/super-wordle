import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Game from './Game.jsx'
import Menu from './Menu.jsx'
import Error from './Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu></Menu>,
    errorElement: <Error></Error>
  },
  {
    path: '/1',
    element: <Game wordLength={1} ></Game>
  },
  {
    path: '/2',
    element: <Game wordLength={2} ></Game>
  },
  {
    path: '/3',
    element: <Game wordLength={3} ></Game>
  },
  {
    path: '/4',
    element: <Game wordLength={4} ></Game>
  },
  {
    path: '/5',
    element: <Game wordLength={5} ></Game>
  },
  {
    path: '/6',
    element: <Game wordLength={6} ></Game>
  },
  {
    path: '/7',
    element: <Game wordLength={7} ></Game>
  },
  {
    path: '/8',
    element: <Game wordLength={8} ></Game>
  },
  {
    path: '/9',
    element: <Game wordLength={9} ></Game>
  },
  {
    path: '/10',
    element: <Game wordLength={10} ></Game>
  },
  {
    path: '/11',
    element: <Game wordLength={11} ></Game>
  },
  {
    path: '/12',
    element: <Game wordLength={12} ></Game>
  },
  {
    path: '/13',
    element: <Game wordLength={13} ></Game>
  },
  {
    path: '/14',
    element: <Game wordLength={14} ></Game>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
