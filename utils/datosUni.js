const medidas = [
    0.75, 1.00, 1.50, 2.50, 4, 6, 10
];

const titulos = [
    "Sección Nominal (mm²)",
    "Diámetro máximo alambres (mm)",
    "Clasificación tipo",
    "Espesor Nominal aislación (mm)",
    "Diámetro exterior aproximado (mm)",
    "Resistencia eléctrica máxima a 20°C (Ω/Km.)(Amper)",
    "Corriente máxima admisible (1)(Amper)",
    "Peso aproximado (Kg. x Km.)",
    "Fusible NH a emplear (Amper)" 
];

const diametro = [
    0.31,
    0.31,
    0.41,
    0.41,
    0.41,
    0.41,
    0.41
];

const tipo = [
    "Clase 4",
    "Clase 4",
    "Clase 4",
    "Clase 4",
    "Clase 4",
    "Clase 4",
    "Clase 5"
];

const espesor = [
    0.60,
    0.60,
    0.70,
    0.80,
    0.80,
    0.80,
    1.00
];

const diametroExt = [
    2.50,
    2.70,
    3.00,
    3.70,
    4.20,
    5.10,
    6.50
];

const resistencia = [
    26,
    19.50,
    13.30,
    7.98,
    4.95,
    3.30,
    1.91
];

const corriente = [
    8,
    10,
    13,
    18,
    24,
    31,
    43
];

const peso = [
    12,
    15,
    20,
    32,
    48,
    67,
    120
];

const fusible = [
    6,
    10,
    10,
    16,
    20,
    25,
    35
];

const color = [
    "Negro", "Celeste", "Verde/Amarillo", "Marrón", "Rojo", "Blanco" 
];

const datos = [];

for (let i = 0; i < 6; i++) {
    datos.push([
        medidas[i], 
        diametro[i], 
        tipo[i], 
        espesor[i], 
        diametroExt[i], 
        resistencia[i], 
        corriente[i], 
        peso[i], 
        fusible[i]
    ])
}

export {datos, titulos, medidas, color};
