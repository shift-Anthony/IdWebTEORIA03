//Ej1
function crearMap(claves, valores) {
    const mapa = new Map();
    claves.forEach((clave, indice) => {
        mapa.set(clave, valores[indice]);
    });
    return mapa;
}
//Ejecucion del Codigo
const codigos = [1, 2, 3];
const empleados = ['Carlos', 'Diana', 'Pedro'];
let texto = '';
crearMap(codigos, empleados).forEach((valor, clave) => {
    texto += `Clave: ${clave}  =>  Valor: ${valor}\n`;
});
alert(texto);