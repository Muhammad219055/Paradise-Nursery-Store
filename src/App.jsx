import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import './App.css'
import Checkout from './pages/Checkout';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />,
      
    },
    {
      path:'/cart',
      element:<Cart />
    },
    {
      path:'/products',
      element:<Products />
    },
    {
      path:'/checkout',
      element:<Checkout />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
