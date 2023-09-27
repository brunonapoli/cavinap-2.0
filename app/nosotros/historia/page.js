"use client";

import Footer from '@/app/components/Footer';
import Bar from '@/app/components/Bar';
import { Container, Typography } from '@mui/material';

export default function historia() {
    return (
        <>
            <Bar posicion={7} posicionTabIndicator={64 * 8}/>
            <Container sx={{ mt: 3 }}>
                <Typography variant='h3' sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline' }}> Historia </Typography>
                <Typography variant='h6' sx={{ mb: 3 }}>
                    CAVINAP es una empresa  que nace de la visión de su fundador, Salvador “Totó ” Napoli y
                    sus dos hijos a principios de los años 90.
                    La gran habilidad y capacidad del siciliano para con la mecánica
                    (su oficio desde su llegada a la Argentina)
                    le permitió con muy poco capital comprar los primeros fierros viejos para transformarlos en maquinas productivas.
                </Typography>
                <Typography variant='h6' sx={{ mb: 3 }}>
                    Al tiempo se realizan las primeras inversiones importantes comprando nuevamente “cachivaches”
                    pero esta vez  importándolos  desde Italia. Para comparar con la industria nacional
                    (aunque suene feo hacerlo) era como si los tanos nos vendieran lo que para ellos era un Fiat 600
                    abandonado en el gallinero y nosotros cuando abríamos el conteiner en Buenos Aires nos encontrábamos
                    con el Mark 5 y Meteoro de piloto.
                </Typography>
                <Typography variant='h6' sx={{ mb: 3 }}>
                    Los primeros años fueron durísimos. La palabra “sacrificio” sí que la aprendimos.
                    Como todos los hijos de italianos (y en especial los sicilianos) se obedecía sin discusión lo que
                    “il capo” mandaba, y si, eventualmente, alguno de nosotros presentaba la osadía de cuestionar
                    la orden se sucedían dos actos divididos por etapas o pasos casi naturales.
                </Typography>
                <Typography variant='h6' sx={{ mb: 3 }}>
                    En la Primera etapa “Totó” te relataba todo el hambre que pasó cuando niño, el trabajo duro de sol a sol en el campo,
                    la guerra, las siete plagas y todos los desastres humanos que te imaginaras y si esto no llegaba a convencerte…
                    (Ay Dios mío)… Se pasaba rápidamente y sin mediar palabra a la Segunda etapa que era correrte con una barreta
                    de hierro de metro y medio de largo por toda la fábrica. Fue así que descubrimos la importancia de cumplir
                    con las reglamentaciones de la ART : Salidas de emergencia bien delimitadas y claras. Podemos asegurar que salvan vidas.
                </Typography>
                <Typography variant='h6' sx={{ mb: 3 }}>
                    Hoy en día Salvador se retiró de la empresa y vive en Italia con el cargo de “Consigliere”
                    presto a responder dudas y dar sabios consejos en el caso de vislumbrar algún problema en el horizonte.
                </Typography>
                <Typography variant='h6' sx={{ mb: 3 }}>
                    Ahora, bromas aparte, hubo algo en lo que siempre estuvimos todos de acuerdo: Nunca, pero nunca,
                    traicionar ni dejar de mejorar la calidad de nuestros productos. Ni siquiera en la crisis del 2002 se nos
                    ocurrió regatearle cobre al conductor para abaratarlo, como sí lo hicieron varias fábricas.
                    También nos negamos a tener dos marcas. No fabricamos  una “línea económica” o  “trucha”.
                    Solo una marca: CAVINAP  con todos los procedimientos de normalización y certificación de calidad
                    correspondientes avalados por IRAM.
                </Typography>
                <Typography variant='h6' sx={{ mb: 3 }}>
                    Gozamos hoy día de ese reconocimiento de calidad en plaza que nos enorgullece e identifica.
                    Agradecemos sinceramente a todos nuestros clientes y proveedores que nos comprendieron y
                    acompañaron en esta etapa de crecimiento.
                </Typography>
                <Typography variant='h6' sx={{ textAlign: ' center', mb: 2 }}>
                    Daniel y José Luis
                </Typography>
            </ Container>
            <Footer posicion={'static'} />
        </>
    );
};