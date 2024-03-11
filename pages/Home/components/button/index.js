import { Box, Button } from '@mui/material'
import React from 'react'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

function Menu () {
const registerstuden = () => {

}
const registerteacher = () => {

}
const viewtable = () => {

}
  return (
    <Box sx={{display:'flex' ,flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:25,fontFamily: ' sans-serif',color:"#fff"}}>
      <Box>
      <HistoryEduIcon sx={{ fontSize: 90 }}  />
      </Box>
      <h1>School administration system</h1>
        <Button variant="contained" onClick={registerstuden} sx={{width:"20%",height:'auto'}}>register student</Button>
        <br></br>
        <Button variant="contained" onClick={registerteacher} sx={{width:"20%",height:'auto'}}>register teacher</Button>
        <br></br>
        <Button variant="contained" onClick={viewtable} sx={{width:"20%",height:'auto'}}>view</Button>
    </Box>
  )
}

export default Menu