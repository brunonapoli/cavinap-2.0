"use client";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction, Toolbar, Stack, AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <>
            <Box sx={{ width: '100%', bottom: '0' }}>
                <AppBar position='static' color='inherit' sx={{alignItems: 'center' }}>
                    <Toolbar>
                        <Stack direction='row' alignItems='center'>
                            <Typography variant='h7' sx={{ textAlign: 'center' }}>
                                Copyright © 2023 Cavinap - All Rights Reserved
                            </Typography>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};