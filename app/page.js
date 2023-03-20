"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Image from 'next/image';

export default function main() {
  return (
    <>
      <Box sx={{ flexGrow: 1, m:5}}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Link href = "/unipolar" sx={{border: '1px solid #ef5350'}}>
              <Typography variant='h2'sx={{textAlign: 'center'}}>
                Unipolares 
              </Typography>
              <Typography variant='h5' sx={{textAlign: 'center'}}>Datos técnicos unipolares</Typography>
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
            <Link href = "/nosotros/calidad">
              <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Calidad </Typography>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href= "/nosotros/contacto">
              <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Contáctenos </Typography>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href = "/nosotros/historia">
              <Typography variant='h2'sx={{textAlign: 'center', border: '1px solid #ef5350'}}> Nuestra historia </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
