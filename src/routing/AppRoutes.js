import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home'
import Albums from '../components/Albums';
import Photos from '../components/Photos';

const ErrorPage = () => {
    return (
        <div>
            <h1>Page Not found !</h1>
        </div>
    )
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/album/:userId" element={<Albums />} />
            <Route path="/photo/:id" element={<Photos />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes