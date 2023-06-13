import React from "react";
import { Navigate } from 'react-router-dom';

const ProtectUser = ({ children }) => {
  if (!localStorage.getItem('usertoken')) {
    return <Navigate to="/noAccess" replace />;
  }
  return children;
};

export default ProtectUser;
