import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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

  return (
    <Box>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>รหัสประจำตัวครู</TableCell>
              <TableCell>เพศ</TableCell>
              <TableCell>ชื่อ</TableCell>
              <TableCell>นามสกุล</TableCell>
              <TableCell>วันเดือนปีเกิด</TableCell>
              <TableCell>สัญชาติ</TableCell>
              <TableCell>เชื้อชาติ</TableCell>
              <TableCell>วุฒิการศึกษา</TableCell>
              <TableCell>รหัสวิชา</TableCell>
              <TableCell>ชื่อวิชา</TableCell>
              <TableCell>จำนวนหน่วยกิต</TableCell>
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
