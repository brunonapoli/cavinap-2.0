"use client";

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Typography, TableBody, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

import {datos, titulos, medidas, color} from '../../utils/datosUni';

export default function  unipolar() {
    return (
        <>
        <Container sx={{mt:3}}>
            <Typography variant='h3'sx={{mb:3, textAlign:'center', textDecoration: 'underline'}}> Unipolares </Typography>
            <Typography variant='h7'paragraph> 
                CABLE UNIPOLAR DE COBRE CLASE 4 Y 5 CON AISLAMIENTO DE PVC PARA INSTALACIONES FIJAS
            </Typography>
            <Typography variant='h7' paragraph>
                CERTIFICADO SEGÚN NORMA IRAM NM 247-3 PARA TENSIONES NOMINALES HASTA 450/750 V
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead sx={{backgroundColor: 'black', border: '1px solid grey'}}>
                        <TableRow>
                            {titulos.map((titulo, index) => (
                                <TableCell align='center'>
                                    <Typography variant='h7' sx={{color: 'white'}}>
                                        {titulo}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datos.map((dato, index) => (
                            <TableRow>
                                {dato.map((valor) => (
                                <TableCell align='center' sx={{border: '1px solid grey'}}>
                                    <Typography variant='h7' sx={{color: 'black'}}>
                                        {valor}
                                    </Typography>
                                </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Table sx={{mt: 4, mb: 4}}>
                    <TableHead sx={{backgroundColor: 'black'}}>
                        <TableRow>
                            <TableCell align='center'>
                                <Typography variant='h6' sx={{color: 'white'}}>
                                    Colores
                                </Typography>
                            </TableCell>
                            {medidas.map((medida) => (
                            <TableCell align='center'>
                                <Typography variant='h6' sx={{color: 'white'}}>
                                    {medida}
                                </Typography>
                            </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {color.map((c) =>(
                            <TableRow>
                                    <TableCell align='center' sx={{border: '1px solid grey'}}>
                                        <Typography variant='h6'>
                                        {c}
                                        </Typography>
                                    </TableCell>
                                {medidas.map((medida) =>(
                                    (c === "Blanco" && (medida === 4 || medida === 6 || medida === 10)) ?
                                    <TableCell align='center' sx={{border: '1px solid grey'}}>
                                        <CancelIcon />
                                    </TableCell>
                                    : <TableCell align='center' sx={{border: '1px solid grey'}}>
                                        <CheckIcon />
                                    </TableCell>  
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{mb:3}}>
                <Typography variant='h6' paragraph> 
                    - Apto para instalaciones domiciliarias en cañerías embutidas o protegidas con cablecanal.
                </Typography>
                <Typography variant='h6' paragraph>
                    - Apto para cableado interno de aparatos en tableros y protegidos dentro y fuera de luminarias.
                </Typography>
                <Typography variant='h6' paragraph>
                    - La gran flexibilidad de los conductores CAVINAP permiten un óptimo deslizamiento durante su instalación en cañerías y bandejas.
                </Typography>
                <Typography variant='h6' paragraph>
                    - La flexión del cable aumenta en las secciones de 10 mm² a 50 mm² (clase 5), permitiendo mayor maniobrabilidad y ductilidad del conductor, facilitando así su manejo e instalación.
                </Typography>
                <Typography variant='h6' paragraph>
                    - El P.V.C. utilizado resiste la propagación de la llama ante un incendio. (Norma IRAM 2307)
                </Typography>
                <Typography variant='h6' paragraph>
                    - El cobre utilizado responde a la norma IRAM NM 280.
                </Typography>
                <Typography variant='h6' paragraph>
                    - Sello IRAM NM 247-3 y de Seguridad Eléctrica.
                </Typography>
            </Box>
        </Container>
        </>
    );
};