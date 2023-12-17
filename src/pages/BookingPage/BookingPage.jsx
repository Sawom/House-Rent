import React, { useState } from 'react';
import useAuth from '../Auth/useAuth/useAuth';
import { useFormAction, useParams } from 'react-router-dom';

const BookingPage = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [booking, setBooking] = useState({});
    const { register, handleSubmit, reset } = useFormAction();


    return (
        <div>
            booking page hoiche!!
        </div>
    );
};

export default BookingPage;