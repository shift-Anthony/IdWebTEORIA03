//Ej8
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    toString() {
        return `Persona: ${this.nombre} ${this.apellido} (Edad: ${this.edad})`;
    }
}
//Estudiante
class Estudiante extends Persona {
    constructor(nombre, apellido, edad, carrera, codigo) {
        super(nombre, apellido, edad);
        this.carrera = carrera;
        this.codigo = codigo;
    }
    matricularCurso(curso) {
        alert(`${this.nombre} se matriculo en ${curso}.`);
    }
    presentar() {
        alert(`Hola, soy ${this.nombre} y estudio ${this.carrera}.`);
    }

    toString() {
        return `Estudiante: ${this.nombre} ${this.apellido} (Código: ${this.codigo})`;
    }
}
//Profesor
class Profesor extends Persona {
    constructor(nombre, apellido, edad, materia, antiguedad) {
        super(nombre, apellido, edad);
        this.materia = materia;
        this.antiguedad = antiguedad;
    }
    tomarCurso() {
        alert(`El profesor ${this.apellido} tomo la materia: ${this.materia}.`);
    }
    calificarExamen() {
        alert(`Calificando exámenes de ${this.materia}...`);
    }
    toString() {
        return `Profesor: ${this.nombre} ${this.apellido} (Materia: ${this.materia})`;
    }
}
//Ejecucion del Codigo
const est1 = new Estudiante('Carlos', 'Perez', 20, 'Ing. de Sistemas', 'S-2024');
const prof1 = new Profesor('Lucía', 'Gomez', 45, 'Programación Web', 10);
est1.presentar();
prof1.tomarCurso();
const personasEnArray = [est1, prof1];
function mostrarElementos(arr) {
    let textoAlert = "";
    arr.forEach(persona => {
        textoAlert += persona.toString() + '\n\n';
    });
    alert(textoAlert);
}
mostrarElementos(personasEnArray);