"use client";

import Footer from '@/app/components/Footer';
import Bar from '@/app/components/Bar';
import { Container, Typography } from '@mui/material';

export default function calidad() {
    return (
        <>
            <Bar posicion={5} />
            <Container sx={{ mt: 3 }}>
                <Typography variant='h3' sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline' }}> Calidad </Typography>
                <Typography variant='h5' sx={{ mb: 3 }}> CAVINAP define como política de calidad lo siguiente: </Typography>
                <Typography variant='h6' sx={{ mb: 2 }}>
                    - Calidad significa cumplir con todos los requerimientos de las normas aplicables al
                    sistema de gestión de la calidad, a la fabricación de conductores eléctricos
                    de cobre y a los acordados con nuestros clientes.
                </Typography>
                <Typography variant='h6' sx={{ mb: 2 }}>
                    - Estamos convencidos que solo por este camino se asegura la satisfacción de los clientes.
                    Sabemos que el grado de satisfacción es decisivo para mantener una posición competitiva en el mercado.
                </Typography>
                <Typography variant='h6' sx={{ mb: 2 }}>
                    - Para mejorar en forma continua la eficacia del sistema de gestión de la calidad,
                    establecemos programas con objetivos de calidad, con sus correspondientes
                    indicadores de desempeño y periódicamente son revisados para asegurar el cumplimiento y su adecuación.
                </Typography>
                <Typography variant='h6' sx={{ mb: 2 }}>
                    - Continuamente nos concientizamos que existen razones para que se produzcan desviaciones  en los estándares deseados.
                    Hacemos todo lo posible para prevenirlas, detectarlas y corregirlas o ayudar a corregirlas cuando esto depende de nuestros proveedores/clientes.
                    Por tal motivo los participamos de nuestro sistema de gestión de la calidad.
                </Typography>
                <Typography variant='h6' sx={{ mb: 2 }}>
                    - Nuestro compromiso es alcanzar el nivel de calidad requerido por nuestros clientes.
                    Solamente  estaremos en condiciones de cumplirlo cuando,
                    sin excepción entendemos que todos somos clientes y proveedores en algún momento.
                </Typography>
                <Typography variant='h6' sx={{ mb: 2 }}>
                    - Cada empleado es un eslabón con responsabilidad propia en la cadena de calidad,
                    por tal razón se provee del adoctrinamiento y l
                    os medios necesarios para que puedan cumplir con las exigencias del mercado referente a la calidad.
                </Typography>
            </ Container>
            <Footer posicion={'static'} />
        </>
    );
};