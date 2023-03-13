"use client";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import Typography from '@mui/material/Typography';

export default function Footer () {
    return(
        <>
            <Box sx={{ width: '100%', position: 'fixed', bottom: '0' }}>
                <BottomNavigation showLabels sx={{borderTop: '0.5px solid grey'}}>
                    <Typography variant='h7' sx={{mt:2}}>
                    Copyright © 2023 Cavinap - All Rights Reserved
                    </Typography>
                </BottomNavigation>
            </Box>
        </>
    );
};