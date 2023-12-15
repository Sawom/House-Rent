import { Container, Grid } from '@mui/joy';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Rentcard from './Rentcard';

const LoadRent = () => {
    const {data: recent = [],isLoading: loading, refetch } = useQuery({
        queryKey: ['recent'],
        queryFn: async()=>{
            const result = await fetch('http://localhost:5000/recent');
            return result.json()
        }
    })

    return (
        <div id="content" className="">
            {/* load recent data */}
            <Container className='mt-5 ' item sx={{ padding: 1 }} >
                <Grid  container  >
                      {
                        recent.map( recentData => <Rentcard
                            delayTime="0.3s" key={recentData._id} recentData={recentData}
                        ></Rentcard> )
                      }  
                    
                </Grid>
            </Container>
        </div>
    );
};

export default LoadRent;