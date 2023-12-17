import React, { useEffect, useState } from 'react';
import useAuth from '../Auth/useAuth/useAuth';
import { useFormAction, useParams } from 'react-router-dom';
import HomeNavbar from '../../components/Navbar/HomeNav/HomeNavbar';
import { FormLabel, Grid } from '@mui/joy';
import { Paper } from '@mui/material';
import classes from "../Auth/styles.module.css";

const BookingPage = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [booking, setBooking] = useState({});
    const { register, handleSubmit, reset } = useFormAction();
    const [errors, setErrors] = useState("");

    // data load
    useEffect( ()=>{
        fetch(`http://localhost:5000/rent/${id}`)
        .then(data => data.json())
        .then(data => setBooking(data));
    } , [])

    // add booking

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
                    
                        {/* Your content for the first grid item */}
                        Example: <div>Content for the first grid item</div>
                    
                    </Grid>

                    {/* Second Grid rest form */}
                    <Grid item xs={12} sm={12} md={6}>
                        <form action="" className={classes.register_form} >
                            {/* name */}
                            <div className={classes.form_control}>
                                <div className={classes.input_group}>
                                <label htmlFor="name">
                                    <span className='d-flex mx-2'>
                                        <i
                                        className={`${classes.zmdi} zmdi zmdi-account material-icons-name`}
                                        ></i>
                                    <FormLabel>Name:</FormLabel>
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                />

                                </div>
                                {errors.name && (
                                <p className={classes.error_message}>{errors.name}</p>
                                )}
                            </div>

                            {/* email */}
                            <div className={classes.form_control}>
                                <div className={classes.input_group}>
                                <label htmlFor="email">
                                    <span className='d-flex mx-2'>
                                        <i className={`${classes.zmdi} zmdi zmdi-email`}></i>
                                        <FormLabel>Email:</FormLabel>
                                    </span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    
                                    required
                                />

                                </div>
                                {errors.email && (
                                <p className={classes.error_message}>{errors.email}</p>
                                )}
                            </div>

                            {/* address */}
                            <div className={classes.form_control}>
                                <div className={classes.input_group}>
                                <label htmlFor="address">
                                    <span className='d-flex mx-2'>
                                        <i
                                        className={`${classes.zmdi} zmdi zmdi-pin-drop material-icons-name`}
                                        ></i>
                                        <FormLabel>Address:</FormLabel>
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Your Address"
                                    required
                                />

                                </div>
                                {errors.name && (
                                <p className={classes.error_message}>{errors.name}</p>
                                )}
                            </div>

                            {/* code rent */}
                            <div className={classes.form_control}>
                                <div className={classes.input_group}>
                                <label htmlFor="name">
                                    <span className='d-flex mx-2'>
                                        <i
                                        className={`${classes.zmdi} zmdi zmdi-apps material-icons-name`}
                                        ></i>
                                        <FormLabel>Code:</FormLabel>
                                    </span> 
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Rent Code"
                                    required
                                />

                                </div>
                                {errors.name && (
                                <p className={classes.error_message}>{errors.name}</p>
                                )}
                            </div>

                            {/* announcement */}
                            <div className={classes.form_control}>
                                <div className={classes.input_group}>
                                
                                <label htmlFor="name">
                                    <span className='d-flex mx-2'>
                                        <i
                                    className={`${classes.zmdi} zmdi zmdi-info material-icons-name`}
                                    > </i> 
                                    <FormLabel>Announcement:</FormLabel>
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Announcement"
                                    required
                                />

                                </div>
                                {errors.name && (
                                <p className={classes.error_message}>{errors.name}</p>
                                )}
                            </div>

                            {/* rent */}
                            <div className={classes.form_control}>
                                <div className={classes.input_group}>
                                <label htmlFor="name">
                                    <span className='d-flex mx-2'>
                                        <i
                                        className={`${classes.zmdi} zmdi zmdi-paypal material-icons-name`}
                                        ></i>
                                        <FormLabel>Rent(BDT)/month:</FormLabel>
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Rent/month"
                                    required
                                />

                                </div>
                                {errors.name && (
                                <p className={classes.error_message}>{errors.name}</p>
                                )}
                            </div>

                        </form>
                    </Grid>

                </Grid>
            </div>

        </div>
    );
};

export default BookingPage;