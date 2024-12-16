import * as React from 'react';
import DriverCard from '../components/Driver/DriverCard';
import Grid from '@mui/material/Grid';
import Driver from '../models/driver';

export default function Drivers({ drivers }) {

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {drivers.map((driver: any, i: Number) => {
                    return (<Grid item xs={3} key={'driver_grid'+i}>
                        <DriverCard driver={Driver.getDriverFromJson(driver)} key={'driver_card_'+i}></DriverCard>
                    </Grid>)
                })}
            </Grid>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/driver/drivers");

    const drivers = await res.json();
    return {
        props: {
            drivers: drivers
        }
    }
}
