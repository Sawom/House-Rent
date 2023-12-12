import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Person3Icon from '@mui/icons-material/Person3';
import Swal from 'sweetalert2';


const ManageUsers = () => {
    const {data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            return res.json()
        }
    })

    // const [axiosSecure] = useAxiosSecure(); 
    // const {data: users = [], refetch } = useQuery(['users'], async() =>{
    //     const res = await axiosSecure.get('/users')
    //     return res.data ;
    // })

    // make admin function
    const handleMakeAdmin = (user) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin!'
        }).then( (result)=>{
            if(result.isConfirmed){
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                method: 'PATCH'
        })
        .then(res => res.json())
        .then( (data) =>{
            if(data.modifiedCount ){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                
              }
                } )
            }
        } )
    }

     // user delete function 
    const handleDeleteUser = (user) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( (result) =>{
                if(result.isConfirmed){
                    fetch(`https://ars-restaurant-db-production.up.railway.app/users/${user._id}`, {
                        method: 'DELETE'
                    } )
                    .then( res => res.json() )
                    .then( data =>{ 
                        if( data.deletedCount > 0 ){
                            refetch();
                            Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${user.name} has deleted!`,
                            showConfirmButton: false,
                            timer: 1500
                        })

                        }
                    })
                }
        } ) 
    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Name </TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Account Type</TableCell>
                    <TableCell align="right">Role</TableCell>
                    <TableCell align="right">Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                
                {
                    users.map( (user, index) =>  <TableRow key={user._id}  >
                        <TableCell align="right"> {index + 1} </TableCell>
                        <TableCell align="right">{user.name}</TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                        <TableCell align="right">{user.phone}</TableCell>
                        <TableCell align="right">{user.type}</TableCell>
                        {/* user role */}
                        <TableCell align="right">
                            {
                                user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className=" bg-blue-700
                                    "> <Person3Icon></Person3Icon> </button>
                            }
                             
                        </TableCell>
                        <TableCell align="right"></TableCell>
                        
                    </TableRow>
                     )
                }

                


                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageUsers;