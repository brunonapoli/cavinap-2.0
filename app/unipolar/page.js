"use client";

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Typography, TableBody } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

import {datos, titulos, medidas, color} from '../../utils/datos';

export default function  Unipolar() {
    return (
        <>
        <Container sx={{mt:4}}>
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
        </Container>
        </>
    );
};