// ACTIVIDAD 1

let nombre = 'Homero';
let apellido = 'Simpson';
let edad = 48;

console.log(`${nombre}, ${apellido}, ${edad}`);


// ACTIVIDAD 2

const CIUDAD1 = 'Springfield';
const CIUDAD2 = 'Shelbyville';
const CIUDAD3 = 'Capital City';
const CIUDAD4 = 'Brockway';
const CIUDAD5 = 'Humbleton';

var ciudades = `${CIUDAD1}, ${CIUDAD2}, ${CIUDAD3}, ${CIUDAD4}, ${CIUDAD5}`;

console.log(`Las ciudades elegidas son: ${ciudades}`);


// ACTIVIDAD 3 aca reutilice cosas de actividad 1 y 2

let fechaNacimiento = '02-11-70';
let direccion = 'Calle falsa 123';
let sexo = 'H';
let altura = 180;
let ojos = 'azules';
let peso = 80;
let codigoLicencia = 89456454;

carnet = (`${CIUDAD1}
Licencia de conducir
Codigo: ${codigoLicencia}
Nombre: ${nombre} ${apellido}
Direccion: ${direccion}, ${CIUDAD1}
Fecha de nacimiento: ${fechaNacimiento}
SEXO - ALTURA - OJOS - PESO
${sexo}     ${altura}     ${ojos}     ${peso}`
);


console.log(carnet);


// ACTIVIDAD 4

let madre = prompt("Asignar nombre a la madre:");
let padre = prompt("Asignar nombre al padre:");
let hermanoMayor = prompt("Asignar nombre al hermano mayor:");
let hermanaMedio = prompt("Asignar nombre a la hermana del medio:");
let hermanaMenor = prompt("Asignar nombre a la hermana menor:");

let familia = (`La madre se llama ${madre} esta casada con ${padre} y tienen tres hijos: ${hermanoMayor}, ${hermanaMedio} y ${hermanaMenor}`);

alert(familia);


// ACTIVIDAD 5

let precio = Number(prompt("ingresar precio"));
let iva = precio - (precio * 0.21);
let descuento30 = precio - (precio * 0.30);

console.log(`precio sin iva: ${iva}
precio con descuento del 30%: ${descuento30}
`);