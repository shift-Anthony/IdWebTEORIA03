//Ej4
function cambiarResidencia(personaObj, nuevaCiudad) { personaObj.ciudadResidencia = nuevaCiudad; }
const miPersona = {
    nombre: 'Ana',
    edad: 30,
    ciudadResidencia: 'Madrid'
};
//Ejecucion del Codigo
let textoAntes = `Nombre: ${miPersona.nombre}
Edad: ${miPersona.edad}
Ciudad: ${miPersona.ciudadResidencia}`;

cambiarResidencia(miPersona, 'Barcelona');

let textoDespues = `Nombre: ${miPersona.nombre}
Edad: ${miPersona.edad}
Ciudad: ${miPersona.ciudadResidencia}`;

alert(textoAntes);
alert(textoDespues);