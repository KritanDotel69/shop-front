import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const UserRoutes = () => {

  const { user } = useSelector((store) => store.userInfo);
  return user === null ? <Navigate to='/user/Login' /> :
    user?.isAdmin ? <h1>You are not a User</h1> : <Outlet />
}

export default UserRoutes
