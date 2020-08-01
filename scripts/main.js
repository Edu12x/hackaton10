let ejercicio = parseInt(prompt("ingrese el ejercicio del 1 al 5"));

switch (ejercicio) {
  case 1:
    EJercicio1();
    break;
  case 2:
    EJercicio2();
    break;
  case 3:
    Ejercicio3();
    break;
  case 4:
    Ejercicio4();
    break;
  case 5:
    Ejercicio5();
    break;
  default:
    alert("Elija opcion correcta del 1 al 5");
    break;
}

function EJercicio1() {
  let num1 = parseInt(prompt("ingrese Primer Numero"));
  let num2 = parseInt(prompt("ingrese segundo Numero"));

  function suma(a, b) {
    return a + b;
  }

  console.log(suma(num1, num2));
}

function EJercicio2() {
  let num3 = parseInt(prompt("ingrese el Numero base"));
  let pot = parseInt(prompt("Ingrese la potencia"));

  function potencia(a, b) {
    return a ** b;
  }

  console.log(potencia(num3, pot));
}

function Ejercicio3() {
  let arr = [
    (n1 = parseInt(prompt("ingrese Primer Numero"))),
    (n2 = parseInt(prompt("ingrese Segundo Numero"))),
    (n3 = parseInt(prompt("ingrese tercer Numero"))),
  ];

  let sumOfCubes = 0;

  for (let index = 0; index < arr.length; index = index + 1) {
    sumOfCubes = sumOfCubes + arr[index] ** 3;
  }

  console.log(sumOfCubes);
}

function Ejercicio4() {
  let basetri = parseInt(prompt("ingrese la base del triangulo"));
  let altura = parseInt(prompt("Ingrese la altura del triangulo"));

  function triArea(a, b) {
    return (a * b) / 2;
  }

  console.log(triArea(basetri, altura));
}

function Ejercicio5() {
  let num4 = parseInt(prompt("ingrese el 1er numero"));
  let num5 = parseInt(prompt("Ingrese el 2do numero"));
  let oprdr = prompt("Ingrese el operador");

  function operacion(a, b, c) {
    let message = "";
    try {
      if (c === "+") {
        return a + b;
      }
      if (c === "-") {
        return a - b;
      }
      if (c === "*") {
        return a * b;
      }
      if (c === "/") {
        return a / b;
      }
      if (c === "**") {
        return a ** b;
      }
      message = console.log("el resultado es ", operacion(num4, num5, oprdr));
    } catch (e) {
      messsage = `el operador ${c} no existe`;
    } finally {
      console.log(message);
    }
  }

  console.log(operacion(num4, num5, oprdr));
}
/*
Respuesta 1

Una function se define con la palabra clave "function()" a cual puede recibir o no parametros, 
pero es necesario que contenga instrucciones claras a ejecutar"

Respuesta 2

Una function puede sorportar muchos argumentos dependiendo de las instrucciones a mandar en el cuerpo de la función
Cada parametro definido en la funcion tiene que estar detallado en las instrucciones

*/

