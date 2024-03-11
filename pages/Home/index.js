import React from 'react'
import Menu from './components/button/index'
import { Box } from '@mui/material'


function index() {
  return (
    <Box sx={{
      height: '100vh',
      background: 'linear-gradient(to top, rgba(205, 156, 242, 1), rgba(246, 243, 255, 1))',
      overflow: 'hidden',
    }}>
      
      <Menu/>
      </Box>
  )
}

export default index