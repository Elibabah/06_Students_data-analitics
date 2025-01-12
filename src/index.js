import {
  alumnasWild,
  ourData,
  traerGeneraciones,
  cleanGeneration,
  traerAlumnas,
  progress,
} from "./data.js"; //Recibe el EXPORT de fetch de data.js

document.getElementById("sedes").hidden = false;
document.getElementById("screenDash").hidden = true;

// funcion para busqueda de alumnas
/*let search = document.getElementById("buscar");
search.addEventListener("keyup", () => {
  buscaAlumna(sede, generacion);
});*/

let entrar = document.getElementById("entrar-dashboard");
entrar.addEventListener("click", () => {
  document.getElementById("sedes").hidden = true;
  document.getElementById("screenDash").hidden = false;
});

alumnasWild(ourData);

window.dashboard = {
  generacion: (generacion) => {
    traerGeneraciones(generacion);
  },
  alumnas: (alumnas) => {
    traerAlumnas(alumnas);
  },
  progreso: (progreso) => {
    progress(progreso);
  },
};

//-----------------------------// Botón Volver Inicio Sedes //---------------------------------//

let volver = document.getElementById("inicio");
volver.addEventListener("click", () => {
  document.getElementById("sedes-screen").hidden = false;
  document.getElementById("screenDash").hidden = true;
  cleanGeneration(); // encender función limpiar generación por sede
});
