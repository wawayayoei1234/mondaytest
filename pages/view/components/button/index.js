import { MyContext } from '@/context'
import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'

function Menu () {
    const [state,setState ] = useContext(MyContext)
const student = () => {
    setState({ ...state, teblestudent: true,tableteacher: false })

}
const teacher = () => {
    setState({ ...state, teblestudent: false,tableteacher: true })
}

  return (
    <Box sx={{display:'flex' ,flexDirection:'row',justifyContent:'center',alignItems:'center', width:"100%"}}>
        <Button variant="contained" onClick={student} sx={{width:"20%",height:'auto'}}>student</Button>
        <br></br>
        <Button variant="contained" onClick={teacher} sx={{width:"20%",height:'auto'}}>teacher</Button>
        
    </Box>
  )
}

export default Menu