import * as React from 'react';
import DriverCard from '../components/Driver/DriverCard';
import Grid from '@mui/material/Grid';

export default function Drivers() {
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