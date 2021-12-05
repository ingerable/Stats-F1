import * as React from 'react';
import DriverCard from '../components/Driver/DriverCard';
import Grid from '@mui/material/Grid';

export default function Drivers({drivers}) {

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                    <DriverCard></DriverCard>
                </Grid>
                <Grid item xs={3}>
                    <DriverCard></DriverCard>
                </Grid>
                <Grid item xs={3}>
                    <DriverCard></DriverCard>
                </Grid>
                <Grid item xs={3}>
                    <DriverCard></DriverCard>
                </Grid>
            </Grid>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/driver/drivers");
    const drivers = res.json();

    return {
      props: {
          
      }, // will be passed to the page component as props
    }
  }
