//transformando um json em string

let pessoa = {
    "nome":"matheus",
    "idade":28,
    "hobbies":["violao","games","bike"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

// transformando a String em Json

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);