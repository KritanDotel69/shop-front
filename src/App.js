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
import EditPage from './pages/admin_pages/EditPage';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/user_pages/CartPage';
import LogRoutes from './Component/LogRoutes';
import Shipping from './pages/auth_pages/Shipping';



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={< RootLayOut />}>
          <Route index element={<HomePage />} />

          <Route element={<AdminRoutes />}>
            <Route path='admin/ProductList' element={<ProductList />} />
            <Route path='admin/AddProduct' element={<AddProduct />} />
            <Route path='admin/productEdit/:id' element={<EditPage />} />

          </Route>

          <Route path='product/:id' element={<ProductDetail />} />

          <Route element={<LogRoutes />}>
            <Route path='user/Login' element={<Login />} />
            <Route path='user/SignUp' element={<SignUp />} />

          </Route>


          <Route element={<UserRoutes />}>

            <Route path='user/cart' element={<CartPage />} />
            <Route path='user/shipping' element={<Shipping />} />
          </Route>



        </Route>

      </Routes >


      <ToastContainer autoClose={1000} />

    </>
  )
}
export default App
