for(let x=0; x<5; x++){
    if(x==2)
        continue;
    console.log(x);
}

let a = 10;
a = a + 5;
a += 5;

let x = 10 
x *= 5;                // *= 5 Es elevar al cuadrado 
console.log(x);

//Tipo de fecha 
const fecha = new Date(); // Date tiene su propio formato, para que te regrese la fecha actual
console.log(fecha);

function myFunction(p1=3,p2=4){     //Funcion normal
    return p1 * p2;
}

console.log(myFunction(5));
console.log(myFunction(5,10));                //Manejo de los parámetros, en este caso en consola devuelve "50 = por dos parámetros", porque es p1 * p2e
console.log(myFunction());

let otraFuncion = (a,b) =>  a * b       //Funcion flecha en una sola linea


console.log(otraFuncion(5,10));


let otraFuncion2 = (a,b) => {       //Funcion flecha, es más moderna que la normal, desarrolladores siniors
    return a * b; 
}
console.log(otraFuncion2(4,80));


//Más que esto es para ver estás funciones y entenderlas en un futuro porque pueden estar en un software que estés trabajando
//Son raras

//Funcion autoejecutable
//Función anonima 
(function(){
    console.log("Esta es una función anónima");       
})(); 

//Función anónima (Arrow)
(() => {
    console.log("Esta es una función anónima");       
})();

//Función anónima (Arrow) en una línea
(() => console.log("Esta es una función anónima"))();

let alumno = {                         //Objeto
    nombre : "Josafat",
    apellido : "García",              //Variables 
    matricula : 123456,
    nombreCompleto : function (){     //Función como propiedad de un objeto // "Importante": En un objeto no se puede hacer una función flecha
        return this.nombre + " " + this.apellido; // "this" es para referirse a las variables del objeto
    }
}
console.log(alumno.nombreCompleto());



