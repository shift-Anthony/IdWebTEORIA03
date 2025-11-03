//ej2
function contarFrecuencia(numeros) {
    const conteoMapa = new Map();
    for (const numero of numeros) {
        const conteoActual = (conteoMapa.get(numero) || 0) + 1;
        conteoMapa.set(numero, conteoActual);
    }
    return conteoMapa;
}
//ejecucion del codigo
const lista = [1, 5, 2, 3, 5, 1, 8, 2, 5, 5, 1, 10];
let texto = '';
contarFrecuencia(lista).forEach((veces, numero) => {
    texto += `Número: ${numero}  =>  Aparece: ${veces} veces\n`;
});
alert(texto);