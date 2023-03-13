"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Image from 'next/image';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function Navbar() {
  return (
    <main>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" color='inherit'>
          <Toolbar sx={{mt: 1}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href = "/" underline="none" color = "inherit">
                <Image src="/logo.png" alt='Foto' width="400" height="125" ml="60"/>
              </Link>
            </Typography>
            <Typography variant='h4' sx={{mr: 2}}>
              Fábrica de conductores eléctricos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      
      <Box sx={{ flexGrow: 1, m:5}}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Unipolares </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Subterráneos </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Cert. Unipolares </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Cert. Subterráneos </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Calidad </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Contáctenos </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Nuestra historia </Typography>
          </Grid>
        </Grid>
        {/* <Grid container spacing={4}>
          <Grid item xs={6}>
            <Typography variant='h4'sx={{textAlign: 'center', border: '1px solid'}}> historia </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h4'sx={{textAlign: 'center', border: '1px solid'}}> Nuestra historia </Typography>
          </Grid>
        </Grid> */}
      </Box>

    </main>
  )
}
