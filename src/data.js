export const ourData = "../data/students.json";
let dataToArray = [];
let generacionesArray = [];
let progresoArray = [];
let temasArray = [];

//----------- Función limpiar generacion ----------//
export let cleanGeneration = () => {
  document.getElementById("generations").innerHTML = "";
};

//----------- Función limpiar estudiantes --------//
let cleanStudents = () => {
  document.getElementById("student").innerHTML = "";
};

//------------------------------- F E T C H - A - D A T A - A P I -------------------------------//

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
//---------------------------- Función iterar sedes --------------------------//

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

  // Pasar data a array vacío de progreso
  progresoArray.push(generacionesArray[0][generacion].estudiantes);
  console.log(progresoArray);

  //Iterar alumnas del array
  cleanStudents();
  for (let [index, alumnas] of generacionesArray[0][
    generacion
  ].estudiantes.entries()) {
    console.log(index, alumnas);
    //Ordenar cards de alumnas alfabeticamente
    /*[index, alumnas].sort((a1, a2) => {
      if (a1.nombre < a2.nombre) {
        return -1;
      } else if (a1.nombre > a2.nombre) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(index, alumnas);*/

    document.getElementById("student").innerHTML += `

        <div class="card" style="width: 18rem;">
            <img src="../assets/2995914.png" class="card-img-top" alt="...">    
        <div class="card-body">
            <h5 id="nameSt" class="card-title">${alumnas.nombre}</h5>
        <p class="card-text"><b>email:</b> ${alumnas.correo}</p>
        <p class="card-text"><b>turno:</b> ${alumnas.turno}</p>

        <button type="button" onclick="dashboard.progreso('${index}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal_${index}">Ver progreso
    </button>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="modal_${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${alumnas.nombre}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;
  }
};
//----------------------------- Función para traer progreso --------------------------------//

export const traerProgreso = (index) => {
  console.log(index);

  for (let avance in progresoArray[0][index].progreso) {
    console.log(avance, progresoArray[0][index].progreso[avance]);
  }
};
/*   
    // Pasar data a array vacío de temas
    temasArray.push(dataToArray[2][progreso]);
  console.log(generacionesArray);
    
  for (const progreso of progresoArray[2][progreso]) {
    console.log(progreso);


  //Iterar generación
  for (let generacion in dataToArray[0][sede].generacion) {
    console.log(generacion);
      console.log(dataToArray[0][sede].generacion);*/

//document.getElementById("progress").innerHTML += `YO PROGRESO`;
/*
        <!-- Modal -->
        <div
          class="modal fade"
          id=
          tabindex="-1"
          aria-labelledby="exampleModalLabel">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Progreso</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div id="progress" class="modal-body"${alumnas.progreso}>
                text
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                </div>
            </div>
            */

// mostrar el promedio general del total de alumnos
// Funcion pàra calcular el numero de alumnos registrados sede
