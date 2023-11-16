import React from 'react'
import { Route, Routes } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth_pages/Login';
import SignUp from './pages/SignUp';
import RootLayOut from './Component/RootLayOut';
import HomePage from './pages/HomePage';
import UserRoutes from './Component/UserRoutes';
import ProductList from './pages/admin_pages/ProductList';
import AdminRoutes from './Component/AdminRoutes';
import AddProduct from './pages/admin_pages/AddProduct';



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={< RootLayOut />}>
          <Route index element={<HomePage />} />

          <Route element={<AdminRoutes />}>
            <Route path='admin/ProductList' element={<ProductList />} />
            <Route path='admin/AddProduct' element={<AddProduct />} />

          </Route>


          <Route element={<UserRoutes />}>
            <Route path='user/Login' element={<Login />} />
            <Route path='user/SignUp' element={<SignUp />} />
          </Route>
        </Route>

      </Routes >


      <ToastContainer autoClose={1000} />

    </>
  )
}
export default App