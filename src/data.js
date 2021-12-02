export const ourData = "../data/students.json";
let dataToArray = [];
let generacionesArray = [];
/*const limpiarArray = () => {
    return generacionPorSede = [];
}*/

//let iconoDinamico = ""

//función limpiar generacion
export let cleanGeneration = () => {
  document.getElementById("generations").innerHTML = "";
};

let cleanStudents = () => {
  document.getElementById("student").innerHTML = "";
};

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
      img = "../assets/Ajusede.png";
      map =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13028.629039471927!2d-99.22165552222965!3d19.22005729385488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfc6a5214f00d%3A0xff7bc254e041e012!2sAjusco!5e0!3m2!1ses-419!2smx!4v1638376655643!5m2!1ses-419!2smx";
    } else if (key == "chapultepec") {
      img = "../assets/chapSede.png";
      map =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61681.590335863206!2d-99.2530495860886!3d19.36646287691377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20021458d4391%3A0x6859c9c6d53b1683!2sChapultepec!5e0!3m2!1ses-419!2smx!4v1638377039521!5m2!1ses-419!2smx";
    } else if (key == "iztapalapa") {
      img = "../assets/iztaSede.png";
      map =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.517374251381!2d-99.08200685035888!3d19.34673803686901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fdf4b0edf02d%3A0xd78ca8ed33730ff4!2sIztapalapa%2C%2009858%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1638377614641!5m2!1ses-419!2smx";
    }

    document.getElementById("sedes").innerHTML += `
            <sede1 id="ajus">
                <h1>Sede ${key}</h1>
                <img id="sedAx" src="${img}" class="img-fluid" alt="imgAjusco" width="350" onclick="dashboard.generacion('${key}')" /><br />
                <iframe src="${map}"
                    width="300" height="150" style="border-radius:5%;" allowfullscreen="" loading="lazy"></iframe>
            </sede1>`;
  }
};

//----------------------- Funcion para traer generaciones -----------------------//
export const traerGeneraciones = (sede) => {
  //Hidden screen
  document.getElementById("screenDash").hidden = false;
  document.getElementById("sedes-screen").hidden = true;

  // Pasar data a array vacío de generaciones
  generacionesArray.push(dataToArray[0][sede].generacion);
  console.log(generacionesArray);

  //Iterar generación
  for (let generacion in dataToArray[0][sede].generacion) {
    console.log(generacion);
    console.log(dataToArray[0][sede].generacion);

    document.getElementById(
      "generations"
    ).innerHTML += `<a onclick="dashboard.alumnas('${generacion}')"class="d-block text-light p-3"
><i class="fas fa-user-graduate mr-2 lead"></i>${generacion} generación</a>`;
    document.getElementById("nombreSede").innerHTML = "Sede" + " " + sede;
  }
};

//----------------------- Funcion para traer alumnas por generación -----------------------//
export const traerAlumnas = (generacion) => {
  console.log(generacion);
  console.log(generacionesArray);
  //Iterar alumnas del array
  cleanStudents();
  for (let alumnas of generacionesArray[0][generacion].estudiantes) {
    console.log(alumnas);

    document.getElementById("student").innerHTML += `

        <div class="card" style="width: 18rem;">
            <img src="../assets/2995914.png" class="card-img-top" alt="...">    
        <div class="card-body" onclick="dashboard.info('${alumnas.nombre}')">
            <h5 id="nameSt" class="card-title">${alumnas.nombre}</h5>
            <p id="info" class="card-text"></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
        `;
  }
};

/*console.log(sede); //muestra las generaciones al dar click
        }
        document.getElementById("sede").innerHTML = ` < h1 > Campus $ { sede } < /h1> </h
            2 > Generaciones: < /h2>`
            generacionPorSede.push(arrBruto[0][sede].generacion) * /

            //ajusco.generacion.primera.estudiantes
            //Funcion para ingresar de screen 2 a 3 de forma dinámica(screen 3 recibe data de cada una de las sedes)
            // Funcion pàra calcular el numero de alumnos registrados en la sede Ajusco
            // Mostrar número de generaciones en Ajusco
            // mostrar el promedio general del total de alumnos
            // Funcion pàra calcular el numero de alumnos registrados en la sede Chapultepec
            // Funcion pàra calcular el numero de alumnos registrados en la sede Iztapalapa*/
