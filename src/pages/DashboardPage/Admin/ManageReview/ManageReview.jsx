import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Rating } from '@smastrom/react-rating';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageReview = () => {
    const [axiosSecure] = useAxiosSecure();

    // load reviews
    const {data: review = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/review');
            return res.json()
        }
    })

    // delete review
    const handleDeleteReview = (reviews) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( (result)=>{
            if(result.isConfirmed){
                fetch(`http://localhost:5000/review/${reviews._id}`, {
                    method: 'DELETE'
                } )
                .then( res => res.json()  )
                .then( data=>{
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Review has deleted!`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                } )
            }
            

        } )
    }


    return (
        <div className='container'>
            <h4 > Total Reviews: {review.length} </h4>
            <div >
                {
                    review.map( (reviews) => <div key={reviews._id} className="card  my-5"  
                    style={{
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                    borderBottom: "1px solid rgba(240, 240, 240, 1)",
                    }}  >
                        <div className="p-4">
                            <h2 className="card-title">  </h2>
                            <Rating style={{ maxWidth: 100 }} value={reviews.rating} readOnly  />
                            <br />
                            <p> <span style={{fontWeight:'bold'}}  > Review: </span>  {reviews.review}  </p>
                            <br />
                            <p> <span style={{fontWeight:'bold'}}  > Reviewed by: </span> <span className='text-primary'> {reviews.name} </span>  </p>
                            <br />
                            <div className="card-actions justify-end">
                                <button onClick={() => handleDeleteReview(reviews)}
                                    style={{backgroundColor: 'red', borderRadius:'10px'}}
                                 className="p-2  text-white"> 
                                 <DeleteIcon></DeleteIcon> 
                                 </button>
                            </div>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default ManageReview;