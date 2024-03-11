import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function Index() {

  const teachers = [
    {
      id: 1,
      teacherId: 'T001',
      gender: 'Female',
      firstName: 'Jane',
      lastName: 'Smith',
      birthDate: '1985-05-15',
      nationality: 'British',
      ethnicity: 'Asian',
      qualification: 'Ph.D. in Education',
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
    <Box >
      <TableContainer component={Paper} style={{ width: '90%', margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Teacher ID</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell>Ethnicity</TableCell>
            <TableCell>Educational Qualification</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.teacherId}</TableCell>
                <TableCell>{teacher.gender}</TableCell>
                <TableCell>{teacher.firstName}</TableCell>
                <TableCell>{teacher.lastName}</TableCell>
                <TableCell>{teacher.birthDate}</TableCell>
                <TableCell>{teacher.nationality}</TableCell>
                <TableCell>{teacher.ethnicity}</TableCell>
                <TableCell>{teacher.qualification}</TableCell>
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
