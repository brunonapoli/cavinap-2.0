"use client";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function About (){
    return (
        <div>
            <h2>About</h2>
            <Stack spacing={2} direction="row">
                <Button variant="text" href='/'>Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
        
    );
};