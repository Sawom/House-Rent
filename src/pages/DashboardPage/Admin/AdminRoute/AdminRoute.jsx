import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Auth/useAuth/useAuth';
import useAdmin from '../../../../Hooks/useAdmin';

const AdminRoute = () => {
     const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading]  = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className='progress w-56' ></progress>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/'  state={{from: location}} replace ></Navigate>;
};

export default AdminRoute;