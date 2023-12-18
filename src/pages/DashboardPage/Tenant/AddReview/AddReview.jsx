import ArticleIcon from '@mui/icons-material/Article';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../Auth/useAuth/useAuth';
import axios from 'axios';

const AddReview = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();

    // add review
    const onSubmit = (data) =>{
        const formData = new FormData();
        const { name, profession, rating, review} = data; 
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
        <div className='container '>
            <form style={{width:'70%'}} onSubmit={handleSubmit(onSubmit)} >
                {/* name */}
                <div className="form-group mb-2">
                    <label htmlFor="inputName">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        {...register("name", { required: true })} 
                        placeholder='Your Name'
                    />
                </div>

                {/* profession */}
                <div className="form-group mb-2">
                    <label htmlFor="inputName">Profession:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        {...register("profession", { required: true })} 
                        placeholder='Your Profession'
                    />
                </div>

                {/* rating */}
                <div className="form-group mb-2">
                    <label htmlFor="inputName">Rating:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="inputName"
                        {...register("profession", { required: true })} 
                        placeholder='Enter a number between 1-5'
                    />
                </div>

                {/* reviews */}
                <div className="form-group mb-2">
                    <label htmlFor="inputName">Review:</label>
                    <input
                        style={{height:'80px'}}
                        type="text"
                        className="form-control"
                        id="inputName"
                        {...register("review", { required: true })} 
                        placeholder='Your Review'
                    />
                </div>

                <button variant="contained" className="px-3 text-white btn btn-outline-primary active" >
                    <small className="d-flex"> <ArticleIcon /> Post Your Review </small> 
                </button>

            </form>
            
        </div>
    );
};

export default AddReview;