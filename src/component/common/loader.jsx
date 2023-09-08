import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./loader.css"
export default function Loader() {
  return (
    <div className="loader" >
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    <p>Loading.... Please wait...!</p>
    </div>
  )
}
