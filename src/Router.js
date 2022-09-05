import React from 'react'
import { Routes, Route } from 'react-router'
import { Navigate } from 'react-router'
import cookie from 'cookie'
import Login from './components/Login'
import Add from "./components/Add"
import Listings from "./containers/Listings"

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
    const {component: Component, } = props;

    return checkAuth() === true ? <Component /> : <Navigate to="/login" />
}



const Router = () => {
    return (
        <Routes>
            <Route exact path="/"  element={<ProtectedRoute component={Listings}/>} />
            <Route path="/login" element={<Login/>} />
            {/* <Route path="/Listings" element={<ProtectedRoute component={Listings}/>} /> */}
            <Route path="/Add" element={<ProtectedRoute component={Add}/>} />
            <Route path="/Listings/:id" component={Add} />
        </Routes>
    );
};

export default Router;