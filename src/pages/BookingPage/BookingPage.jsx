import BeenhereIcon from '@mui/icons-material/Beenhere';
import { FormLabel, Grid } from '@mui/joy';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import HomeNavbar from '../../components/Navbar/HomeNav/HomeNavbar';
import classes from "../Auth/styles.module.css";
import useAuth from '../Auth/useAuth/useAuth';

const BookingPage = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [booking, setBooking] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const [errors, setErrors] = useState("");


    // data load
    useEffect( ()=>{
        fetch(`http://localhost:5000/rent/${id}`)
        .then(data => data.json())
        .then(data => setBooking(data));
    } , [])

    // add booking
    const onSubmit = (data) =>{
        const formData = new FormData();
        const {name,email,code,announcement,rent} = data;
        const newData = {name,email,code,announcement,rent: parseFloat(rent)}

        axios.post('http://localhost:5000/booking',newData)
        .then(data =>{
            if(data.data.insertedId){
                reset();
                Swal.fire(
                        'Done!',
                        'Your booking is confirmed!',
                        'success'
                    )
            }
        })
    }

    return (
        <div >
            <HomeNavbar></HomeNavbar>
            <br />
            {/* form and image */}
            <div className='container' style={{ backgroundColor: 'white', padding: '16px' }} >
                <h2 className='my-4'>Booking Form</h2>

                <Grid container spacing={2} >
                    
                    {/* First Grid image */}
                    <Grid item xs={12} sm={12} md={6}>
                        <img style={{width:'80%'}} src={booking.img1} alt="" />
                    </Grid>

                    {/* Second Grid rest form */}
                    <Grid item xs={12} sm={12} md={6}>
                        <form onSubmit={handleSubmit(onSubmit)} className={classes.register_form} >
                            {/* name */}
                            <div className="form-group mb-2">
                                <label htmlFor="inputName">Name:</label>
                                <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                {...register("name", { required: true })} readOnly
                                defaultValue={user.displayName} 
                                />
                            </div>

                            {/* email */}
                            <div className="form-group mb-2">
                                <label htmlFor="inputName">Email:</label>
                                <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                {...register("email", { required: true })} readOnly 
                                defaultValue={user.email} 
                                />
                            </div>


                            {/* code rent */}
                            <div className="form-group mb-2">
                                <label htmlFor="inputName">Code:</label>
                                <input
                                type="number"
                                className="form-control"
                                id="inputCode"
                                {...register("code", { required: true })} readOnly
                                defaultValue={booking.code}
                                />
                            </div>

                            {/* announcement */}
                            <div className="form-group mb-2">
                                <label htmlFor="inputName">Announcement:</label>
                                <input
                                type="text"
                                className="form-control"
                                id="inputAnnouncement"
                                {...register("announcement", { required: true })} readOnly
                                defaultValue={booking.name}
                                />
                            </div>

                            {/* rent */}
                            <div className="form-group mb-2">
                                <label htmlFor="inputName">Rent(BDT)/month:</label>
                                <input
                                type="number"
                                className="form-control"
                                id="inputCode"
                                {...register("rent", { required: true })} readOnly
                                defaultValue={booking.rent}
                                />
                            </div>

                            {/* button */}
                            <button variant="contained" className="px-3 text-white btn btn-outline-primary active" >
                                <small className="d-flex"> <BeenhereIcon></BeenhereIcon>  Book Now </small> 
                            </button>
                        </form>
                    </Grid>

                </Grid>
            </div>

        </div>
    );
};

export default BookingPage;