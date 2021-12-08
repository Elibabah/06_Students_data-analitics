import {
  alumnasWild,
  ourData,
  traerGeneraciones,
  cleanGeneration,
  traerAlumnas,
  traerProgreso,
  searchStudents,
} from "./data.js"; //Recibe el EXPORT de fetch de data.js

document.getElementById("sedes").hidden = false;
document.getElementById("screenDash").hidden = true;

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
    traerProgreso(progreso);
  },
};

//------------------------- Datos por Ajusco ------------------------------//
/*let ajuscoSede = document.getElementById("ajus");

    ajuscoSede.addEventListener("click", () => {
        console.log("click en", ajuscoSede);
        //------ Función abrir sede en dashboard ------//
        window.location.href = "./index.html";
    });

    //---------------------- Datos por Chapultepec ---------------------------//

    let chapultepecSede = document.getElementById("chapu");
    chapultepecSede.addEventListener("click", () => {
        console.log("click en", chapultepecSede);
        //------ Función abrir sede en dashboard ------//
        window.location.href = "./index.html";
    });

    //----------------------- Datos por Iztapalapa ---------------------------//

    let iztapalapaSede = document.getElementById("ixtapa");
    iztapalapaSede.addEventListener("click", () => {
        console.log("click en", iztapalapaSede);
        //------ Función abrir sede en dashboard ------//
        window.location.href = "./index.html";
    });*/

//-----------------------------// Botón Volver Inicio Sedes //---------------------------------//

let volver = document.getElementById("inicio");
volver.addEventListener("click", () => {
  document.getElementById("sedes-screen").hidden = false;
  document.getElementById("screenDash").hidden = true;
  cleanGeneration(); // encender función limpiar generación por sede
});

//--------------------/ Ícono función /----------------------------//

/*let icono = document.getElementById("entrar-dashboard")
icono.addEventListener("click", () => {
    document.getElementById("icono-sede").innerHTML = "AQUí VA ÍCONO"
});*/
