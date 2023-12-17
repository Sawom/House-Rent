import React, { useEffect, useState } from 'react';
import useAuth from '../Auth/useAuth/useAuth';
import { useFormAction, useParams } from 'react-router-dom';
import HomeNavbar from '../../components/Navbar/HomeNav/HomeNavbar';
import { Grid } from '@mui/joy';
import { Paper } from '@mui/material';
// import { makeStyles } from '@material-ui/core';

const BookingPage = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [booking, setBooking] = useState({});
    const { register, handleSubmit, reset } = useFormAction();
    
    // const classes = useStyles();

    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //         flexGrow: 1,
    //         padding: theme.spacing(2),
    //     },
    //     paper: {
    //         padding: theme.spacing(2),
    //         textAlign: 'center',
    //         color: theme.palette.text.secondary,
    //     },
    // }));

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

            {/* form and image */}
            <div className='container' style={{ backgroundColor: 'white', padding: '16px' }} >
                <h2 className='my-4'>Booking Form</h2>

                <Grid container spacing={2} >
                    
                    {/* First Grid Item */}
                    <Grid item xs={12} sm={6} md={6}>
                    
                        {/* Your content for the first grid item */}
                        Example: <div>Content for the first grid item</div>
                    
                    </Grid>

                    {/* Second Grid Item */}
                    <Grid item xs={12} sm={6} md={6}>
                    
                        {/* Your content for the second grid item */}
                        Example: <div>Content for the second grid item</div>
                    
                    </Grid>

                </Grid>
            </div>

        </div>
    );
};

export default BookingPage;