"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

export default function main() {
  return (
    <>
      <Box sx={{ flexGrow: 1, m: 4 }}>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={4}>
            <Link href="/unipolar">
              <Card>
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Unipolares </Typography>
                  <Typography variant='h6' sx={{ textAlign: 'center' }}>Datos técnicos unipolares</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={4}>
            <Link href="/subte">
              <Card>
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Subterráneos </Typography>
                  <Typography variant='h6' sx={{ textAlign: 'center' }}>Datos técnicos subterráneos</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </ Grid>

        <Grid container spacing={2} justifyContent='center' sx={{mt:1}}>
          <Grid item xs={4}>
            <Link href="/certificado/unipolar">
              <Card>
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Cert. Unipolares </Typography>
                  <Typography variant='h6' sx={{ textAlign: 'center' }}>Certificado unipolares</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/certificado/subte">
              <Card>
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Cert. Subterráneos </Typography>
                  <Typography variant='h6' sx={{ textAlign: 'center' }}>Certificado subterráneos</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent='center' sx={{mt:1}}>
          <Grid item xs={8}>
            <Link href="/nosotros/calidad">
              <Card>
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Calidad </Typography>
                  <Typography variant='h6' sx={{ textAlign: 'center' }}>Significado de calidad en Cavinap</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent='center' sx={{mt:1}}>
          <Grid item xs={4}>
            <Link href="/nosotros/contacto">
              <Card>
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Contáctenos </Typography>
                  <Typography variant='h6' sx={{ textAlign: 'center' }}>Datos para contactarse con nosotros</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/nosotros/historia">
              <Card>
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Nuestra historia </Typography>
                  <Typography variant='h6' sx={{ textAlign: 'center' }}>Pequeña historia sobre nuestros inicios</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
