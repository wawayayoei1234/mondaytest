import React, { useContext } from 'react'
import Tablestudent from './components/tablestudent/index'
import Tableteacher from './components/tableteacher/index'
import Switbutton from './components/button/index'
import { Box } from '@mui/material'
import { MyContext } from '@/context'


function index() {
  const [state,setState ] = useContext(MyContext)
  return (
    <Box>
      <Switbutton/>
      {state.teblestudent? <Tablestudent/>:<Tableteacher/>}
      
      
    </Box>
  )
}

export default index