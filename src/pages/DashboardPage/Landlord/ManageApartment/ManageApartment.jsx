import React from 'react';
import useRent from '../../../../Hooks/useRent';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from '@mui/joy';
import Paper from '@mui/material/Paper';


const ManageApartment = () => {
    const [rent ,loading, refetch ] = useRent();
    const [axiosSecure] = useAxiosSecure();

    // delete apartment
    const handleDelete = (item) =>{
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
                axiosSecure.delete(`/rent/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Apartment has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <TableContainer className='container' component={Paper}>
            <Table sx={{ minWidth: 1350 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell >#</TableCell>
                    <TableCell >Apartment </TableCell>
                    <TableCell >Announcement</TableCell>
                    <TableCell >Rent/Month</TableCell>
                    <TableCell >Update</TableCell>
                    <TableCell >Delete</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rent.map( (item, index) => <TableRow key={item._id} >
                            <TableCell > {index + 1} </TableCell>
                            <TableCell align="">
                                    <img style={{width:'50px'}} src={item.img1} alt="" />
                            </TableCell>
                            <TableCell >{item.name}</TableCell>
                            <TableCell > {item.rent} BDT </TableCell>
                            {/* update button */}
                            <TableCell > 
                                Edit 
                            </TableCell>
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

export default ManageApartment;