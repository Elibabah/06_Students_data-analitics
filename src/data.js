export const ourData = "../data/students.json";
let dataToArray = [];
//let generacionPorSede = [];
let estudiantes = [];
/*const limpiarArray = () => {
    return generacionPorSede = [];
}*/



//let iconoDinamico = ""

//función limpiar generacion
export const cleanGeneration = () => {
    document.getElementById("generations").innerHTML = "";
}


export const alumnasWild = () => {
    fetch(ourData)
        .then((response) => response.json())
        .then((data) => {
            traerSedes(data);
            // wildCodeCamp(data, sede)
            // Pasar data a array vacío
            dataToArray.push(data);
            console.log(dataToArray);
        })
        .catch((error) => console.log(error));
};
//----------------------------- Función iterar sedes --------------------------//
//------------ Traer llaves ----------------//
export const traerSedes = (nuestraData) => {
    console.log(nuestraData);

    let img;
    let map;

    for (const key in nuestraData) {
        console.log(key);
        if (key == "ajusco") {
            img = "../assets/Ajusede.png"
            map = ""
        } else if (key == "chapultepec") {
            img = "../assets/chapSede.png"
        } else if (key == "iztapalapa") {
            img = "../assets/iztaSede.png"
        }

        document.getElementById(
            "sedes"
        ).innerHTML += `
            <sede1 id="ajus">
                <h1>Sede ${key}</h1>
                <img id="sedAx" src="${img}" class="img-fluid" alt="imgAjusco" width="350" onclick="dashboard.generacion('${key}')" /><br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13028.629039471927!2d-99.22165552222965!3d19.22005729385488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfc6a5214f00d%3A0xff7bc254e041e012!2sAjusco!5e0!3m2!1ses-419!2smx!4v1638376655643!5m2!1ses-419!2smx"
                    width="300" height="150" style="border-radius:5%;" allowfullscreen="" loading="lazy"></iframe>
            </sede1>`
    }
};

//----------------------- Funcion para traer generaciones -----------------------//
export const traerGeneraciones = (sede) => {
    //CAMBIAR HIDDEN

    document.getElementById("screenDash").hidden = false
    document.getElementById("sedes-screen").hidden = true


    for (const generacion in dataToArray[0][sede].generacion) {
        console.log(generacion);
        document.getElementById(
            "generations"
        ).innerHTML += `<a onclick="dashboard.traeAlumnas('${generacion}}')"class="d-block text-light p-3"
><i class="fas fa-user-graduate mr-2 lead"></i>${generacion} generación</a>`
        document.getElementById("nombreSede").innerHTML = "Sede" + " " + sede

    }
};


//----------------------- Funcion para traer alumnas por generación -----------------------//
/*export const traerAlumnasGen1 = (alumnas) => {
    for (const alumnas in dataToArray[0][sede].generacion.alumnas) {
        console.log(alumnas);

        document.getElementById("generations").innerHTML += `<button onclick="dashboard.traerAlumnasGen1('${alumnas}')"> ${alumnas} </button>`


    }
}*/


/*console.log(sede); //muestra las generaciones al dar click
        }
        document.getElementById("sede").innerHTML = `<h1>Campus ${sede}</h1> </h2>Generaciones: </h2>`
        generacionPorSede.push(arrBruto[0][sede].generacion)*/

//ajusco.generacion.primera.estudiantes
//Funcion para ingresar de screen 2 a 3 de forma dinámica(screen 3 recibe data de cada una de las sedes)
// Funcion pàra calcular el numero de alumnos registrados en la sede Ajusco
// Mostrar número de generaciones en Ajusco
// mostrar el promedio general del total de alumnos
// Funcion pàra calcular el numero de alumnos registrados en la sede Chapultepec
// Funcion pàra calcular el numero de alumnos registrados en la sede Iztapalapa