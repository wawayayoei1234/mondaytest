import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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

  return (
    <Box>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>รหัสวิชา</TableCell>
              <TableCell>ชื่อวิชา</TableCell>
              <TableCell>จำนวนหน่วยกิต</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.subjectCode}</TableCell>
                <TableCell>{teacher.subjectName}</TableCell>
                <TableCell>{teacher.creditHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Index;
