import React from 'react';
import useBooking from '../../../../Hooks/useBooking';
import useAuth from '../../../Auth/useAuth/useAuth';
import Swal from 'sweetalert2';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from '@mui/joy';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageBooking = () => {
    const [booking, refetch] = useBooking();
    const {user} = useAuth();
    const total = booking.reduce((sum, item)=> item.price + sum, 0 )
    
    // handle delete
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Order has deleted!',
                                'success'
                            )
                        }

                    })
            }
        })
    }


    return (
        <TableContainer className='container' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell >#</TableCell>
                    <TableCell >Name </TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell >Code</TableCell>
                    <TableCell >Announcement</TableCell>
                    <TableCell >Rent (BDT)/Month</TableCell>
                    <TableCell >Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                       booking.map( (item, index) => <TableRow key={item._id} >
                            <TableCell > {index + 1} </TableCell>
                            <TableCell > {item.name} </TableCell>
                            <TableCell > {item.email} </TableCell>
                            <TableCell > {item.code} </TableCell>
                            <TableCell > {item.announcement} </TableCell>
                            <TableCell > {item.rent} </TableCell>
                            <TableCell > 
                                <button onClick={() => handleDelete(item)} className="p-2  text-white" 
                                    style={{backgroundColor: 'red', borderRadius:'10px'}} > <DeleteIcon></DeleteIcon>   
                                </button>
                            </TableCell>
                       </TableRow>
                       ) 
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageBooking;