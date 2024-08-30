function agregarTarea(){
  let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

  if (nuevaTareaTexto === "") {
      alert("Ingrese tarea");
      return;
  }

  let tarea = document.createElement("li");
  tarea.textContent = nuevaTareaTexto + " ";

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick = function(){
    tarea.remove();};


  tarea.appendChild(botonEliminar);

  document.getElementById("listaTareas").appendChild(tarea);

  document.getElementById("nuevaTarea").value=" ";
  }