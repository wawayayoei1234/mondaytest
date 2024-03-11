import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Education Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Education Level"
          onChange={handleChange}
        >
          <MenuItem value={10}>Bachelor’s Degree</MenuItem>
          <MenuItem value={20}>Master’s Degree</MenuItem>
          <MenuItem value={30}>Doctor’s Degree</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
