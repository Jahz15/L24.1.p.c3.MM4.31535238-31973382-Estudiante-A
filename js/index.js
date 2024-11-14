let estudiante = [
    { nombre: 'Luis', semestre: 5, nota: 14 },
    { nombre: 'Pedro', semestre: 6, nota: 12 },
    { nombre: 'Maria', semestre: 5, nota: 11 },
    { nombre: 'Ana', semestre: 7, nota: 18 },
    { nombre: 'Carlos', semestre: 5, nota: 15 },
    { nombre: 'Luisa', semestre: 4, nota: 16 }, ]

let estudiantesSemestre = (estudiante, semestre,) => {
    let estudiantesFiltrados = [];
    estudiante.forEach((estudiante) => {
        if (estudiante.semestre == semestre) {
            estudiantesFiltrados.push(estudiante);
        }
    });
    return estudiantesFiltrados;
}
let salida = document.getElementById('salida');
let estudianteS = estudiantesSemestre(estudiante, 5);
salida.innerHTML = `Estudiantes del semestre 5:<br> `;
estudianteS.forEach((estudiante) => {
    salida.innerHTML += `Nombre: ${estudiante.nombre} - Nota: ${estudiante.nota}<br>`;
});
