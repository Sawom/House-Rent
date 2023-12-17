import React from 'react';
import useAuth from '../pages/Auth/useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';

const useBooking = () => {
    const {user, loading} = useAuth();

    const {refetch, data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
            return res.json();
        }
    })

    return [booking, refetch]
};

export default useBooking;