import React, { useContext } from 'react';
import Tablestudent from './components/tablestudent/index';
import Tableteacher from './components/tableteacher/index';
import Switbutton from './components/button/index';
import Subject from './components/subjectName/index';
import { Box } from '@mui/material';
import { MyContext } from '@/context';


function Index() {
  const [state, setState] = useContext(MyContext);

  return (
    <Box sx={{
      height: '100vh',
      background: 'linear-gradient(to top, rgba(205, 156, 242, 1), rgba(246, 243, 255, 1))',
      overflow: 'hidden',
    }}>
      <Box sx={{ marginLeft: 8 ,fontFamily: ' sans-serif',color:"#000"}}>
        <h1>overview</h1>
      </Box>

      <Switbutton />
      {state.tablestudent ? <Tablestudent /> : ""}
      {state.tableteacher ? <Tableteacher /> : ""}
      {state.subject ? <Subject /> : ""}
    </Box>
  );
}

export default Index;
