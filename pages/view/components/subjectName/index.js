import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function Index() {

  const teachers = [
    {
      id: 1,
      teacherId: 'T001',
      subjectCode: 'SC002',
      subjectName: 'Science',
      creditHours: 4,
    },
  ];
  const Edit = () => {

  }
  const Delete = () => {

  }

  return (
    <Box>
      <TableContainer component={Paper} style={{ width: '90%', margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Subject Code</TableCell>
            <TableCell>Subject Name</TableCell>
            <TableCell>Credit Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.subjectCode}</TableCell>
                <TableCell>{teacher.subjectName}</TableCell>
                <TableCell>{teacher.creditHours}</TableCell>
                <TableCell>
                <Button variant="contained"   sx={{width: '30%',backgroundColor: '#4CAF50',  marginRight: '5px', }}onClick={(Edit)}>
                    Edit
                  </Button>
                  <Button variant="contained"sx={{width: '30%',backgroundColor: '#f44336', }}onClick={(Delete) }>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Index;
