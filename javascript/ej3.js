function intercambiarMap(mapaOriginal) {
    const mapaInvertido = new Map();
    for (const [clave, valor] of mapaOriginal) mapaInvertido.set(valor, clave);
    return mapaInvertido;
}

//Ejecucion del Codigo
const mapaProfesiones = new Map([
    ['2', 'Doctora'],
    ['1', 'Ingeniero'],
    ['3', 'Abogada']
]);
let textoOriginal = "";
let textoInvertido = "";
mapaProfesiones.forEach((valor, clave) => {
    textoOriginal += `Clave: ${clave}  =>  Valor: ${valor}\n`;
});
intercambiarMap(mapaProfesiones).forEach((valor, clave) => {
    textoInvertido += `Clave: ${clave}  =>  Valor: ${valor}\n`;
});
alert(textoOriginal);
alert(textoInvertido);