//Uma forma de uma função receber indefinidos parâmetros
let num =1;
let num1=5;
let num2 =3;
let num3 =5;

function imprimirNumeros(...args){
    for (let i = 0; i<args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num,num1,num2);
console.log('pausa');
imprimirNumeros(num2,num3);
console.log('pausa');
imprimirNumeros(2,6,7,8,9,5,4,3,2,1,0);