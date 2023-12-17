import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Person3Icon from '@mui/icons-material/Person3';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useQuery } from '@tanstack/react-query';
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
                    fetch(`http://localhost:5000/users/${user._id}`, {
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
        <TableContainer className='container' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell >#</TableCell>
                    <TableCell >Name </TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell >Address</TableCell>
                    <TableCell >Phone</TableCell>
                    <TableCell >Account Type</TableCell>
                    <TableCell >Role</TableCell>
                    <TableCell >Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                
                {
                    users.map( (user, index) =>  <TableRow key={user._id}  >
                        <TableCell > {index + 1} </TableCell>
                        <TableCell >{user.name}</TableCell>
                        <TableCell >{user.email}</TableCell>
                        <TableCell >{user.address}</TableCell>
                        <TableCell >{user.phone}</TableCell>
                        <TableCell >{user.type}</TableCell>
                        {/* user role */}
                        <TableCell >
                            {
                                user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="p-2 text-white" style={{backgroundColor: 'blue', borderRadius:'10px'}} >
                                     <Person3Icon></Person3Icon> </button>
                            }
                             
                        </TableCell>
                        {/* delete button */}
                        <TableCell >
                            <button onClick={() => handleDeleteUser(user)} className="p-2  text-white" 
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

export default ManageUsers;