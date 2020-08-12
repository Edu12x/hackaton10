// Ejercicio 1
/*Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido 
y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”*/

let NewString = (a, b, c) => `Hola mi nombre es ${a} ${b} y mi edad ${c}`;
console.log(NewString("Jorge", "Eduardo", 30));

//Ejercicio2
/*
Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 */

let sumOfCubes = (a, b, c) => a ** 3 + b ** 3 + c ** 3;
console.log(sumOfCubes(1, 5, 9));

//Ejercicio3
/*Crear una funcion que me retorne el tipo de valor entregado, 
utilizar la función e imprimir los distintos tipos de JS.*/

function getTypeValues(value) {
  return typeof value;
}

console.log(getTypeValues("sebastian"));

//Ejercicio4
/*Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)*/

let sum = 0;

let sumrest = (...rest) => {
  for (let index = 0; index < rest.length; index = index + 1) {
    sum = sum + rest[index];
  }
  console.log(sum);
};

sumrest(1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5);

//Ejercicio5
/*Crear una función que reciba una matriz de valores y filtre los valores que no son string*/

arrayfilter = [];

function filterNoString(coleccion = []) {
  coleccion.forEach(function (elemento, indice) {
    if (typeof elemento != "string") {
      arrayfilter = arrayfilter.concat(elemento);
    }
  });
}

filterNoString([1, "2", 3, "sebastian", "1", 3, { name: "sebastian" }]);
console.log(arrayfilter);

//Ejercicio 6 Cree una funcion que toma una matriz de numeros y devuelva los minimos y maximos, en ese orden

function minMax(coleccion2 = []) {
  return [Math.min(...coleccion2), Math.max(...coleccion2)];
}

console.log(minMax([1, 2, 3, 4, 5]));

//Ejercio 7 Escriba una función que tome una matriz 10 enteros (entre 0 y 9) y devuelva una cadena en forma
//de un número de telefono

function formatPhoneNumber(coleccion3 = []) {
  let phone = [];
  let phone2 = [];
  let phone3 = [];
  coleccion3.forEach(function (e, index) {
    if (index <= 2) {
      phone = phone.concat(e);
    } else if (index > 2 && index <= 5) {
      phone2 = phone2.concat(e);
    } else {
      phone3 = phone3.concat(e);
    }
  });
  phone.unshift("(");
  phone.push(") ");
  phone2.push("-");
  console.log(
    `el numero de telefono del array es ${phone.join("")}${phone2.join(
      ""
    )}${phone3.join("")}`
  );
}

console.log(formatPhoneNumber([1, 2, 3, 4, 2, 6, 7, 8, 9, 0]));

//EJercicio 8 Crear una funcion que toma una matriz de matrices con numeros. Devuelve una nueva matriz (única)
//con el mayor numero de cada uno.

function findLargestNums(coleccion4 = []) {
  let LargestNums = [];
  coleccion4.forEach(function (e) {
    LargestNums = LargestNums.concat([Math.max(...e)]);
  });
  console.log(LargestNums);
}

findLargestNums([
  [4, 2, 7, 1],
  [20, 70, 40, 90],
  [1, 2, 0],
  [1, 2, 3, 99],
]);

//Ejercicio 9 Dada una palabra, escriba una funcion que devuelva el primer indice y el último indice de un caracter

function charIndex(a, b) {
  let Index = [];
  Index = [a.indexOf(b)];
  Index.push(a.lastIndexOf(b));
  console.log(Index);
  console.log(
    `the first "${b}" has index ${Index[0]}, the last "${b}" has index ${Index[1]}`
  );
}

console.log(charIndex("hello", "l"));
console.log(charIndex("circumlocution", "c"));

//Ejercicio 10 Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par
//clave-valor

function ToArray(coleccion5 = {}) {
  return Object.entries(coleccion5);
}

console.log(ToArray({ a: 1, b: 2 }));

/*
//Ejercicio 11 

11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
getBudgets([
{ name: "John", age: 21, budget: 23000 },
{ name: "Steve", age: 32, budget: 40000 },
{ name: "Martin", age: 16, budget: 2700 }

*/

function getBudgets(coleccion6 = []) {
  return coleccion6.map((obj) => obj.budget).reduce((a, b) => a + b, 0);
}

console.log(
  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);

/*12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
{ name: "Steve" },
{ name: "Mike" },
{ name: "John" }    
]) ➞ ["Becky", "John", "Steve"]*/

let students = [{ name: "Steve" }, { name: "Mike" }, { name: "John" }];
function getStudentNames() {
  let studentsnames = [];
  for (const key in students) {
    for (const a in students[key]) {
      studentsnames = studentsnames.concat(students[key][a]);
    }
  }
  console.log(studentsnames);
}

getStudentNames();

/*13. Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
likes: 2,
dislikes: 3,
followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]*/

function objectToArray(coleccion7 = []) {
  console.log(Object.entries(coleccion7));
}
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10,
});

/*14 Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados incluyendo n.
squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14 */

function SquareSum(n) {
  let SumaCuadrados = 0;
  for (let i = 1; i <= n; i = i + 1) {
    SumaCuadrados = SumaCuadrados + i ** 2;
  }
  console.log(SumaCuadrados);
}
console.log(SquareSum(102));

/*15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]*/

function multiplyByLength(colecction = []) {
  console.log(colecction.map((obj) => obj * colecction.length));
}

multiplyByLength([2, 3, 1, 0, 3, 4, 5, 2]);

/*16 cree una funcion que toma un numero como argumento y devuelva una maitriz de numeros contando desde este numero
a 0* countdown(5) -> [5,4,3,2,1,0]*/

function countdown(coleccion7) {
  let countdown2 = [];
  for (let i = 0; i <= coleccion7; i = i + 1) {
    countdown2 = countdown2.concat(i);
  }
  return countdown2.reverse();
}

console.log(countdown(5));

/*17 cree una funcion que toma una matriz y devuelva la diferencia entre los numeros mas grandes y mas pequeños
diffMaxMin([10,4,1,4,-10,-50,32,21]) //Smallest number is -50, biggest is 32 */

function diffMaxMin(coleccion8 = []) {
  let MaxMin = [];
  MaxMin = [Math.min(...coleccion8), Math.max(...coleccion8)];
  console.log(MaxMin.reduce((a, b) => b - a, 0));
  console.log(`Smallest number is ${MaxMin[0]}, biggest is ${MaxMin[1]}`);
}
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);

/*18 Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10] */

function filterList(coleccion9 = []) {
  fList = [];
  coleccion9.forEach(function (e) {
    if (typeof e == "number") {
      fList = fList.concat(e);
    }
  });
  return fList;
}

console.log(filterList([1, 2, 3, "x", "y", 10]));

/*19. Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13] */

function repeat(a, b) {
  rpt = [];
  for (i = 1; i <= b; i = i + 1) {
    rpt = rpt.concat(a);
  }
  return rpt;
}

console.log(repeat(13, 5));

/*20. Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"*/

function vreplace(a, b) {
  return a.replace(/[aeiou]/g, b);
}

console.log(vreplace("apples and bananas", "e"));

/* 21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!" */

function findNemo(a, b) {
  let stn = [];
  a.split(" ").forEach(function (element, e) {
    if (element == b) {
      stn = stn.concat(e + 1);
    }
  });
  return `i found ${b} at ${stn} !`;
}

console.log(findNemo("I am finding Nemo !", "Nemo"));

/* 22. Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO" */

function capLast(a) {
  let word = "";
  let lastletter = "";
  a.split("").forEach(function (element, e) {
    if (e + 1 == a.split("").length) {
      lastletter = lastletter.concat(element);
    } else {
      word = word.concat(element);
    }
  });
  return `${word}${lastletter.toUpperCase()}`;
}

console.log(capLast("hello"));
