//Uma notação diferente dos objetos, para definir variáveis com propriedades do objeto

const person = {
    name: 'Jhon',
    lastname: 'Doe',
    age:12
}
const {name:fname,lastname:lname,age:idade} = person;

console.log(fname);
console.log(lname);
console.log(idade);