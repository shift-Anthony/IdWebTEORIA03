//Ej 6
class EquipoFutbol {
    constructor(nombre, ciudad) {
        this.nombre = nombre;
        this.ciudad = ciudad;
    }
    saludar() {
        alert(`Somos el equipo ${this.nombre}, nuestra ciudad es: ${this.ciudad}.`);
    }
}
//Ejecucion del Codigo
const miEquipo = new EquipoFutbol('FBC Melgar', 'Arequipa');
miEquipo.saludar();