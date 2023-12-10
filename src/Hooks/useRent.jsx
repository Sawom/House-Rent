import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useRent = () => {
    const {data: rent = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['rent'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/rent');
            return res.json()
        }
    })

    return [rent ,loading, refetch ]
};

export default useRent;