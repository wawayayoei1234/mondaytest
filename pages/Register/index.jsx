import { Box, TextField } from '@mui/material'
import React from 'react'
import Gender from '../Register/Component/Gender/index'
import Nationality from '../Register/Component/Nationality/index'
import Ethnicity from '../Register/Component/Ethnicity/index'
import EducationalLevel from '../Register/Component/Educational-level/index'
import Button from '../Register/Component/Button/index'
import teachericon from '../Register/Component/icon/teacher.svg'
import Image from 'next/image'

function index() {
    return (
        <Box sx={{ width: "100%", height: "100vh", bgcolor: "white", display: "flex", justifyContent: "center", alignItems: 'center' }}>
            <Box sx={{ display: "flex", width: '100%', px: '150px', gap: "100px", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: "35%", height: "80vh", borderRadius: "17px", background: "linear-gradient(to bottom, #1e6ef6, #c3ddfd)", justifyContent: "center", alignItems: "center", display: "flex", flexDirection:"column", gap:"25px" }}>
                    <Image src={teachericon} alt='icon' style={{ height:"100px", width:"auto" }} />
                    <Box sx={{ fontSize: "30px", color: "white", fontFamily: 'Roboto, sans-serif', fontWeight:"600" }}>Register for Teacher</Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "25px", width: "37%", justifyContent: "center", height: "80vh" }}>
                    <Box sx={{ display: "flex", gap: "20px", width: "100%" }}>
                        <TextField style={{ width: "50%" }} id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField style={{ width: "50%" }} id="outlined-basic" label="Last Name" variant="outlined" />
                    </Box>
                    <TextField id="outlined-basic" label="Birthdate" variant="outlined" ></TextField>
                    <Gender />
                    <Nationality />
                    <Ethnicity />
                    <EducationalLevel />
                    <Button />
                </Box>
            </Box>
        </Box>
    )
}

export default index