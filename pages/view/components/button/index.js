import { MyContext } from '@/context'
import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'

function Menu () {
    const [state,setState ] = useContext(MyContext)
const student = () => {
    setState({ ...state, tablestudent:true,tableteacher: false,subject:false  })}
const teacher = () => {
    setState({ ...state, tablestudent: false,tableteacher: true,subject:false })
}
const subject = () => {
    setState({ ...state, tablestudent: false,tableteacher: false,subject:true})
}
  return (
    <Box sx={{display:'flex' ,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:5}}>
        <Button variant="text" onClick={student} sx={{width:"10%",height:'auto'}}>student</Button>
        <br></br>
        <Button variant="text" onClick={teacher} sx={{width:"10%",height:'auto'}}>teacher</Button>
        <br></br>
        <Button variant="text" onClick={subject} sx={{width:"10%",height:'auto'}}>subject</Button>  
    </Box>
  )
}

export default Menu