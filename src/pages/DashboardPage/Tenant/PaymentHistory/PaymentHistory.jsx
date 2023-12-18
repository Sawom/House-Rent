import React from 'react';
import usePaymentHistory from '../../../../Hooks/usePaymentHistory';
import useAuth from '../../../Auth/useAuth/useAuth';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';


const PaymentHistory = () => {
    const [payments, refetch] = usePaymentHistory();
    const {user} = useAuth();
    const total = payments.reduce((sum, item)=> item.price + sum, 0 )

    return (
        <div className='container'>
            <h4 className='text-xl mx-1'> Total bill: {total} BDT </h4>
            <TableContainer  component={Paper}>
                <Table sx={{ minWidth: 850 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell >#</TableCell>
                        <TableCell >Email </TableCell>
                        <TableCell >TransactionId</TableCell>
                        <TableCell >Bill</TableCell>
                        <TableCell >Date</TableCell>
                        <TableCell >Quantity</TableCell>
                        <TableCell >Apartment</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            payments.map( (pay, index) => <TableRow  key={pay._id} >
                                <TableCell align=""> {index + 1} </TableCell>
                                <TableCell align=""> {pay.email} </TableCell>
                                <TableCell >{pay.transactionId}</TableCell>
                                <TableCell >{pay.price} BDT</TableCell>
                                <TableCell >{pay.date} </TableCell>
                                <TableCell > {pay.quantity} </TableCell>
                                <TableCell > {pay.apartment} </TableCell>
                            </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PaymentHistory;