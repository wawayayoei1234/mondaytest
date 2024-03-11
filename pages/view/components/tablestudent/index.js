import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>รหัสประจำตัวนักเรียน</TableCell>
              <TableCell>เพศ</TableCell>
              <TableCell>ชื่อ</TableCell>
              <TableCell>นามสกุล</TableCell>
              <TableCell>วันเดือนปีเกิด</TableCell>
              <TableCell>สัญชาติ</TableCell>
              <TableCell>เชื้อชาติ</TableCell>
            
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
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Index;
