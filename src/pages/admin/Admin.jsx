import React, { useState } from 'react';
import Photo from "./Photo";
import Genre from "./Genre";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabList, TabContext, TabPanel } from '@mui/lab/';

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Admin = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
    <div className="ui grid container">
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="Admin tabs">
                    <Tab icon={<CategoryOutlinedIcon />} label="GENRES" value="1" />
                    <Tab icon={<InsertPhotoOutlinedIcon />} label="PHOTOS" value="2" />
                    <Tab icon={<PersonOutlineOutlinedIcon />} label="USERS" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1"><Genre /></TabPanel>
                <TabPanel value="2"><Photo /></TabPanel>
                <TabPanel value="3">User Admin Dashboard</TabPanel>
            </TabContext>
        </Box>
    </div>
    )
}

export default Admin