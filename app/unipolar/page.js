"use client";

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Typography, TableBody } from '@mui/material';

import {datos, titulos, medidas, color} from '../../utils/datos';

export default function  Unipolar() {
    return (
        <>
        <Container sx={{mt:4}}>
            <TableContainer>
                <Table>
                    <TableHead sx={{backgroundColor: 'black'}}>
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
                <Table sx={{mt:4}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                
                            </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
        </>
    );
};