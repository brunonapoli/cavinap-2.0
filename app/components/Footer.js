"use client";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <>
            <Box sx={{ width: '100%', bottom: '0' }}>
                <BottomNavigation sx={{ borderTop: '0.5px solid grey' }}>
                    <BottomNavigationAction label= 'Copyright © 2023 Cavinap - All Rights Reserved'/>
                    {/* <Typography variant='h7' sx={{ mt: '18px' }}>
                        Copyright © 2023 Cavinap - All Rights Reserved
                    </Typography> */}
                </BottomNavigation>
            </Box>
        </>
    );
};