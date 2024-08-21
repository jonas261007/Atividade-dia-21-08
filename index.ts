class Pessoa {
    nome: string;
    idade: number;
    sexo: string;

    constructor(nome: string, idade: number, sexo: string) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

const Pessoa1 = new Pessoa("Jonas", 25,"M");
const Pessoa2 = new Pessoa("Maria",18,"F");
const Pessoa3 = new Pessoa("Mery",29,"F");

console.log(Pessoa1);
console.log(Pessoa2);
console.log(Pessoa3);