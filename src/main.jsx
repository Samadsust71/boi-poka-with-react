import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/Root/Root';
import Home from './assets/components/Home/Home';
import ErrorPage from './assets/components/ErrorPage/ErrorPage';
import BookDetails from './assets/components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails/>,
        loader: ()=>fetch('/booksData.json')
      },
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
