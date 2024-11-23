import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
    const [user,setUse]=useState(false)
    if (user) {
       return children
    }
    return <Navigate to="/login"/>
};

export default ProtectRoute;