import React from 'react';
import useCart from '../../../../Hooks/useCart';
import useAuth from '../../../Auth/useAuth/useAuth';
import Swal from 'sweetalert2';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item)=> item.price + sum, 0 )
    const {user} = useAuth();

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
                fetch(`http://localhost:5000/carts/${item._id}`, {
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
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell >#</TableCell>
                    <TableCell >Apartment </TableCell>
                    <TableCell >Code</TableCell>
                    <TableCell >Announcement</TableCell>
                    <TableCell >Rent/Month</TableCell>
                    <TableCell >Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cart.map( (item, index)=> <TableRow  key={item._id} >
                            <TableCell align=""> {index + 1} </TableCell>
                            <TableCell align="">
                                <img style={{width:'50px'}} src={item.img1} alt="" />
                            </TableCell>
                            <TableCell >{item.code}</TableCell>
                            <TableCell >{item.name}</TableCell>
                            <TableCell >{item.rent} BDT</TableCell>
                            <TableCell >
                                <button onClick={() => handleDelete(item)} className="p-2  text-white" 
                                    style={{backgroundColor: 'red', borderRadius:'10px'}} > <DeleteIcon></DeleteIcon>   
                                </button>
                            </TableCell>
                        </TableRow> )
                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageCart;