"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
import Link from 'next/link';
import Image from 'next/image';


export default function MainPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1, m:5}}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Link href = "/unipolar">
              <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}>
                Unipolares 
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href = "/subte">
              <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Subterráneos </Typography>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href = "/certificado/unipolar">
              <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Cert. Unipolares </Typography>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href = "/certificado/subte">
              <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Cert. Subterráneos </Typography>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href = "/calidad">
              <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Calidad </Typography>
            </Link>
          </Grid>
          <Grid item xs={6}>
              <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Contáctenos </Typography>
          </Grid>
          <Grid item xs={6}>
            <Link href = "/unipolar">
              <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Nuestra historia </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}
