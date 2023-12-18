import React, { useState } from 'react';
import useAuth from '../../../Auth/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddReview = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [review, setReview] = useState({});

    // add review
    const onSubmit = (data) =>{
        const formData = new FormData();
        // 
        const {name, email,productcode, model, rating, productreview, servicereview} = data; 
        axios.post('http://localhost:5000/review', data)
        .then( data=>{
            if(data.data.insertedId){
                reset();
                Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Thanks for your review',
                            showConfirmButton: false,
                            timer: 1500
                    })
            }
        } )
    }



    return (
        <div>
            
        </div>
    );
};

export default AddReview;