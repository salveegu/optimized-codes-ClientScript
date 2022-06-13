let pessoa = {

    trabalho:'xxx',
    idade:2,
    sexo: 'mas'

}


console.log(pessoa);

let hobbies ={

    musica:'vio',
    livros: 'fic',
    amor: true

}

Object.assign(pessoa,hobbies);
console.log(pessoa);