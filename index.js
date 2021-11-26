let usuario = sessionStorage.getItem('nombre');
if (usuario == null) {
    sessionStorage.setItem('nombre', prompt('Ingrese su nombre'));
} else {
    alert('Hola ' + usuario + "!");
}


const sabores = [
  {
  id: 1,
  sabor: "chocolate",
  trozos: 10,
  },
  {
    id: 2,
    sabor: "piña",
    trozos: 15,
  },
  {
    id: 3,
    sabor: "frutilla",
    trozos: 20,
  },
  {
    id: 4,
    sabor: "mil hojas",
    trozos: 15,
  }
];

localStorage.setItem("tortas", JSON.stringify(sabores))


function llenarComboboxTortas() {
  const tortas = JSON.parse(localStorage.getItem('tortas'));
  const saboresElement = document.getElementById("sabores");

  for (sabor of tortas) {
    console.log("sabor", sabor);
    let option = document.createElement("option");
    option.innerHTML = sabor["sabor"];
    saboresElement.appendChild(option)
  }
}

llenarComboboxTortas();



