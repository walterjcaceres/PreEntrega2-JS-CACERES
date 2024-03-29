let arma,precio;  //declaro variables

//--------------------------------LISTA-----------------------------//
       
const productos = [
  {nombre:"Glock",precio:1000},
  {nombre:"M4",precio:2000},
  {nombre:"Knife",precio:3000},
  {nombre:"Bomb",precio:4000},
];

//--------------------------------FUNCIONES-----------------------------//

function chequeoMenu(limite,opcionElegida){      //chequea si el ingreso es un numero valido
  if (isNaN(opcionElegida)) {
    alert("Por favor, utiliza números para continuar");
  }

  if (opcionElegida < 1 || opcionElegida > limite) {
      alert("Por favor elige SOLO entre las opciones 1 y "+limite+" de la lista");
  }
}

function agregarArma(arma,valor){
  productos.push({nombre:arma,precio:valor});  //agrega el arma al final del array
}

function eliminarArma(arma){
  let arrayDeNombres=productos.map(el=>el.nombre) //creo un array solo con los nombres, para buscarlo con indexOF
  let posicion=arrayDeNombres.indexOf(arma) //retorna -1 si no lo encuentra, por eso ponemos un IF a continuacion
  if(posicion>=0){
    productos.splice(posicion,1);
  } else {
    alert("No se encuentra el arma ingresada.")
  }
}

function buscarArma(arma){
  let resultado=productos.find(el=>el.nombre===arma)
  if(resultado==undefined){
    alert("El arma no se encuentra disponible")
  }else{
  alert("El arma es: "+resultado.nombre+" y su precio es de: "+resultado.precio)
  }
}

function ordenarPorPrecio(){
  let menu;
  do {
    menu = parseInt(prompt("Por favor, elige una opción:\n1- Ascendente\n2- Descendente\n3- Volver"));
    chequeoMenu(3,menu);                     //chequea que la opcion sea valida
      switch(menu){
        case 1:                              //ordena ascendente
          productos.sort((a,b)=>{    
            if(a.precio>b.precio){
              return 1
            }

            if(a.precio<b.precio){
              return -1
            }

            if(a.precio=b.precio){
              return 0
            }
          })
        break;
        case 2:                               //ordena descendente
          productos.sort((a,b)=>{           
            if(a.precio<b.precio){
              return 1
            }

            if(a.precio>b.precio){
              return -1
            }

            if(a.precio=b.precio){
              return 0
            }
          })
          
        break;
    }
    
  } while((menu<1||menu>3)||isNaN(menu));    //si la opcion es distinta a 1,2 o 3 se repite el do-while 
}

function filtrarPorPrecio(){
  let minimo = parseInt(prompt("Ingrese el valor minimo"))
  let maximo = parseInt(prompt("Ingrese el valor maximo"))
  const filtro = productos.filter(el=>el.precio<maximo&&el.precio>minimo)
  imprimirArmas(filtro)
}

function imprimirArmas(array){   
  let respuesta="Las armas disponibles son:\n";
for(let i=0;i<array.length;i++){  // recorro el array con un for y lo guardo todo en "respuesta" como si fuera un listado
  respuesta=respuesta+("\nArma: "+array[i].nombre+" Precio: "+array[i].precio+"\n")
}
alert(respuesta) //imprimo respuesta
}

function modificarArma(arma){
  let resultado=productos.find(el=>el.nombre===arma)     //busca el arma en el array
  if(resultado==undefined){ 
    alert("El arma no se encuentra disponible")           
  } else {
  let armaNuevo = prompt("Ingrese el nuevo nombre del arma:")
  let precioNuevo = parseInt(prompt("Ingrese el nuevo precio del arma:"))
  eliminarArma(arma);
  agregarArma(armaNuevo,precioNuevo);
  }
}

//Programa pripal:

//----------------------------------Nombre----------------------------//

let nombreIngresado = prompt("Ingrese su nombre a continuación:");

while (nombreIngresado === null || nombreIngresado === "" ) {
  if (nombreIngresado === null) {
    alert("Cancelaste la operación \nIntenta nuevamente completando el campo.");
    nombreIngresado = prompt("Ingrese su nombre a continuación:");
  } else {
    alert("Recibimos el campo vacio. \nIntenta nuevamente completando el campo.");
    nombreIngresado = prompt("Ingrese su nombre a continuación:");
  }
}

alert("Excelente " + nombreIngresado + "\nContinuemos con la verificación");

//--------------------------------Edad-----------------------------//

let edad = prompt("Ingrese su edad");

 while (isNaN(edad) || edad === "") {
  alert("Por favor, ingrese su edad en números.");
  edad = prompt("Ingrese su edad.\nIntente una vez mas o actualize la pagina.");
}

if (edad === null) {
  alert("Cancelaste la operación \nIntenta nuevamente completando el campo.");
  edad = prompt("Ingrese su edad.\nIntente una vez mas o actualize la pagina.");
} 

if (edad >= 18) {
  alert("Excelente tiene la edad necesaria para seguir.");
} else {
  alert("Eres menor para continuar tienes que tener 18 años o mas.");
  prompt = ("")
}

//--------------------------------Menu principal-----------------------------//

let menu;
do {
  imprimirArmas(productos);
  menu = parseInt(prompt("Por favor, elige una opción:\n1- Agregar arma\n2- Eliminar arma\n3- Modificar arma\n4- Buscar arma\n5-Ordenar por precio\n6-Filtrar por precio\n7- SALIR "));

  chequeoMenu(7,menu)

  if(menu>=1&&menu<=7){
    switch(menu){
      case 1:
        arma = prompt("Ingrese el nombre del arma que desea añadir:")
        precio = prompt("Ingrese el valor del arma que desea añadir:")
        agregarArma(arma,precio);
      break;
      case 2:
        arma = prompt("Ingrese el nombre del arma que desea eliminar:")
        eliminarArma(arma);
      break;
      case 3:
        arma = prompt("Ingrese el nombre del arma que desea modificar:")
        modificarArma(arma);
      break;
      case 4:
        arma = prompt("Ingrese el nombre del arma que desea buscar:")
        buscarArma(arma);
      break;
      case 5:
        ordenarPorPrecio();
      break;
      case 6:
        filtrarPorPrecio();
      break;
      case 7:
        alert("Hasta luego!");
      break;  
    }
  }

}while((menu!==7)||isNaN(menu));

console.log(productos);

