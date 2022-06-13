let cachorro ={

    patas: 4,
    nome: 'shark',
    idade: 22,
    raça: 'viralatas',
    coleira: true
};



console.log("Adicionando um novo elemento no Objeto Cachorro propriedade 'dono' e 'cor':");
cachorro.dono = true;
cachorro.cor = 'blue';

delete cachorro.coleira;

console.log(cachorro.patas);
console.log(cachorro.nome);
console.log(cachorro.idade);
console.log(cachorro.raça);
console.log(cachorro.dono);
console.log(cachorro.cor);
