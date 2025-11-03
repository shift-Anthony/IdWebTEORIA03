//ej5
function mostrarYContarPropiedades(obj) {
    const claves = Object.keys(obj);
    claves.forEach(clave => {
        console.log(`${clave}: ${obj[clave]}`);
    });
    return claves.length;
}
//Ejecucion del Codigo
const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2022,
    color: 'Rojo'
};
console.log(`\nEl objeto tiene ${mostrarYContarPropiedades(auto)} propiedades.`);
alert("ejecutado en Consola")