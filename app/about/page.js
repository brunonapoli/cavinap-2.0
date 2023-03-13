"use client";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'


export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{border: '1px solid'}}>
          <h2>Contáctenos</h2>
        </Grid>
        <Grid item xs={4} sx={{border: '1px solid'}}>
          <h2>Contáctenos</h2>
        </Grid>
        <Grid item xs={4} sx={{border: '1px solid'}}>
          <h2>Contáctenos</h2>
        </Grid>
        <Grid item xs={8} sx={{border: '1px solid'}}>
          <h2>Contáctenos</h2>
        </Grid>
      </Grid>
    </Box>
  );
}