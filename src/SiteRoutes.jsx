import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductLayout from './products/ProductLayout' 
import PageNotFound from './pages/PageNotFound'
import Products from './products/Products'
import Category from './products/Category'
import Product from './products/Product'
import Login from './pages/Login'
import Cart from './pages/Cart'
import PrivateRoute from './PrivateRoute'

export default function SiteRoutes({handleLogin,user}) {
  return (

          <Routes>
            <Route path='/' element={<Home user={user}/>}/>
            <Route path='/products' element={<ProductLayout/>}>
              <Route index={true} element={<Products user={user}/>}/>
              <Route path='category/:categoryName' element={<Category/>}/>
              <Route path='product/:productId' element={<Product user={user}/>}/>
            </Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login handleLogin={handleLogin}/>}/>
            <Route path='/cart' element={<PrivateRoute user={user}><Cart user={user}/></PrivateRoute>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
  )
}
