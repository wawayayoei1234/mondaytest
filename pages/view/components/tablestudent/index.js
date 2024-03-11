import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function Index() {

  const students = [
    {
      id: 1,
      studentId: 'S001',
      gender: 'Male',
      firstName: 'John',
      lastName: 'Doe',
      birthDate: '1990-01-01',
      nationality: 'American',
      ethnicity: 'Caucasian',
      subjectCode: 'SC001',
      subjectName: 'Mathematics',
      creditHours: 3,
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
            <TableCell>Student ID</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell>Ethnicity</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.studentId}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.birthDate}</TableCell>
                <TableCell>{student.nationality}</TableCell>
                <TableCell>{student.ethnicity}</TableCell>
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
