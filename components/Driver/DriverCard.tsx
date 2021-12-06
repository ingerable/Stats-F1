import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Driver from '../../models/driver';

interface DriverCardProps {
  driver: Driver;
}

export default function DriverCard(props: DriverCardProps) {
  
  return (
    <Card sx={{ minWidth: 275, border: "2px solid #1C6EA4", borderRadius: "12px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.driver.name} {props.driver.familyName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.driver.nationality}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.driver.wikipediaArticleUrl} target="_blank">Learn More</Button>
      </CardActions>
    </Card>
  );
}

