import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Navbar() {
    return(<AppBar>
        <Toolbar>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/drivers">Drivers</Button>
          <Button color="inherit">Races</Button>
        </Toolbar>
      </AppBar>)
}