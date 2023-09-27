"use client";

import Footer from './components/Footer';
import Bar from './components/Bar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Avatar, Stack } from '@mui/material';
import Link from 'next/link';

export default function Main() {
  return (
    <>
      <Bar posicion={0} posicionTabIndicator={64} />
      <Box sx={{ flexGrow: 1, m: 4 }}>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={9} md={4}>
            <Link href="/unipolar">
              <Card>
                <CardMedia component={'img'} height='90' image='/head1.gif' alt='Imagen' />
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Unipolares </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={9} md={4}>
            <Link href="/subte">
              <Card>
                <CardMedia component={'img'} height='90' image='/head4.gif' alt='Imagen' />
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Subterráneos </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </ Grid>

        <Grid container spacing={2} justifyContent='center' sx={{ mt: 1 }}>
          <Grid item xs={9} md={4}>
            <Link href="/certificado/unipolar">
              <Card>
                <CardContent>
                  <Stack direction='row' alignItems='center' justifyContent='center' gap={1}>
                    <Avatar alt="Certificado" src='/iram.jpg' 
                      sx={{ width: {xs: 40, sm: 60}, height: {xs: 40, sm: 60} }} 
                    />
                    <Typography variant='h4' 
                      sx={{ textAlign: 'center', fontSize: {xs: '1.65rem', sm: '2.125rem'} }}> 
                      Cert. Unipolares 
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={9} md={4}>
            <Link href="/certificado/subte">
              <Card>
                <CardContent>
                  <Stack direction='row' alignItems='center' justifyContent='center' gap={1}>
                    <Avatar alt="Certificado" src='/iram.jpg' 
                      sx={{ width: {xs: 40, sm: 60}, height: {xs: 40, sm: 60} }} 
                    />
                    <Typography variant='h4' 
                      sx={{ textAlign: 'center', fontSize: {xs: '1.65rem', sm: '2.125rem'} }}> 
                      Cert. Subterráneo
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent='center' sx={{ mt: 1 }}>
          <Grid item xs={9} md={8}>
            <Link href="/nosotros/calidad">
              <Card>
                <CardContent>
                  <Stack direction='row' alignItems='center' justifyContent='center' gap={1}>
                    <Avatar alt="Certificado" src='/calidad.png' sx={{ width: 40, height: 40 }} />
                      {/* <Typography variant='h4' sx={{ textAlign: 'center' }}> ¿Qué definimos como Calidad en Cavinap? </Typography> */}
                      <Typography variant='h4' sx={{ textAlign: 'center' }}> Calidad </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent='center' sx={{ mt: 1 }}>
          <Grid item xs={9} md={4}>
            <Link href="/nosotros/contacto">
              <Card>
                <CardMedia component={'img'} height='65' image='/contacto.jpg' alt='Imagen' />
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Contacto </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={9} md={4}>
            <Link href="/nosotros/historia">
              <Card>
                <CardMedia component={'img'} height='65' image='/head5new.gif' alt='Imagen' />
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}> Historia </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Footer posicion={'static'} />
    </>
  )
}
