import {
    alumnasWild,
    ourData,
    traerGeneraciones,
    cleanGeneration,
    traerAlumnas,
    traerProgreso,
} from "./data.js"; //Recibe el EXPORT de fetch de data.js

document.getElementById("sedes").hidden = false;
document.getElementById("screenDash").hidden = true;

let entrar = document.getElementById("entrar-dashboard");
entrar.addEventListener("click", () => {
    document.getElementById("sedes").hidden = true;
    document.getElementById("screenDash").hidden = false;
});

//buscador de alumnas
/*const formulario = document.querySelector;
("formulario");*/

alumnasWild(ourData);

window.dashboard = {
    generacion: (generacion) => {
        traerGeneraciones(generacion);
    },
    alumnas: (alumnas) => {
        traerAlumnas(alumnas);
    },
    progreso: (progreso) => {
        traerProgreso(progreso);
    },
};


//-----------------------------// Botón Volver Inicio Sedes //---------------------------------//

let volver = document.getElementById("inicio");
volver.addEventListener("click", () => {
    document.getElementById("sedes-screen").hidden = false;
    document.getElementById("screenDash").hidden = true;
    cleanGeneration(); // encender función limpiar generación por sede
});