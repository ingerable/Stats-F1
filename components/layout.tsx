import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Navbar></Navbar>
    </Box>
    <main>{children}</main>
    </>
  )
}