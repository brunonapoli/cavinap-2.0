const titulos = [
    "Sección Nominal (mm²)",
    "Diámetro máximo alambres (mm)",
    "Espesor Nominal aislación (mm)",
    "Espesor Nominal vaina (mm)",
    "Corriente máxima admisible aire o bandeja a 40°C(Amper)",
    "Corriente máxima admisible enterrado(Amper)",
    "Resistencia eléctrica máxima a 20°C (Ω/Km.)(Amper)",
    "Diámetro exterior aproximado (mm)",
    "Peso aproximado (Kg. x Km.)" 
];

const diametroMaximo = 0.41;
const espesorVaina = 1.80;
const espesorNominalChico = 0.80;
const espesorNominalGrande = 1.00;

const seccionBipolar = [
    "2x1,5", "2x2,5", "2x4", "2x6", "2x10"
];

const seccionTripolar = [
    "3x1,5", "3x2,5", "3x4", "3x6", "3x10"
];

const seccionTetrapolar = [
    "4x1,5", "4x2,5", "4x4", "4x6", "4x10"
];

const corrienteAire = [15, 21, 28, 37, 50];
const corrienteEnterrado = [25, 35, 44, 56, 72];

const resistencia = [13.30, 7.98, 4.95, 3.30, 1.91];

const diametroExtBipolar = [9.50, 10.60, 12.30, 12.90, 16.20];
const diametroExtTripolar = [10.20, 11.80, 12.80, 13.90, 17.50];
const diametroExtTetrapolar = [10.90, 12.40, 13.90, 15.80, 19];

const pesoBipolar = [118, 175, 234, 290, 430];
const pesoTripolar = [155, 188, 278, 360, 550];
const pesoTetrapolar = [178, 244, 370, 450, 670];

const datosBipolar = [];
const datosTripolar = [];
const datosTetrapolar = [];

for (let i = 0; i < 5; i++) {
    if (seccionBipolar[i].toString().includes("4") || seccionBipolar[i].toString().includes("6") || seccionBipolar[i].toString().includes("10")) {
        datosBipolar.push([seccionBipolar[i], diametroMaximo, espesorNominalGrande, espesorVaina, corrienteAire[i], corrienteEnterrado[i], resistencia[i], diametroExtBipolar[i], pesoBipolar[i]])
        datosTripolar.push([seccionTripolar[i], diametroMaximo, espesorNominalGrande, espesorVaina, corrienteAire[i], corrienteEnterrado[i], resistencia[i], diametroExtTripolar[i], pesoTripolar[i]])
        datosTetrapolar.push([seccionTetrapolar[i], diametroMaximo, espesorNominalGrande, espesorVaina, corrienteAire[i], corrienteEnterrado[i], resistencia[i], diametroExtTetrapolar[i], pesoTetrapolar[i]])
    } else {
        datosBipolar.push([seccionBipolar[i], diametroMaximo, espesorNominalChico, espesorVaina, corrienteAire[i], corrienteEnterrado[i], resistencia[i], diametroExtBipolar[i], pesoBipolar[i]])
        datosTripolar.push([seccionTripolar[i], diametroMaximo, espesorNominalChico, espesorVaina, corrienteAire[i], corrienteEnterrado[i], resistencia[i], diametroExtTripolar[i], pesoTripolar[i]])
        datosTetrapolar.push([seccionTetrapolar[i], diametroMaximo, espesorNominalChico, espesorVaina, corrienteAire[i], corrienteEnterrado[i], resistencia[i], diametroExtTetrapolar[i], pesoTetrapolar[i]])
    }
}

export {titulos, datosBipolar, datosTripolar, datosTetrapolar}
