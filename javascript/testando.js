//var armazena em memoria
//let uma maneira de declarar variaveis
/*
let nome = 'JC';
let sobrenome = 'SR';
let prof = 'SI';

/*sem template string
console.log(nome + sobrenome + prof)

//template string = python

console.log(` ola, meu nome é ${nome} ${sobrenome}, minha profissão ${prof}`);
*/
//ternario

let isvalid = true;

/*sem ternario
function verify(){

    if(isvalid)
        return true;
    else return false
}*/

//com ternario

const result = isvalid? true:false

let zero = 0;

const nuZero = zero > 0 ? 0 : -1;

//lambda em python -> arrow function

const multi = (x,y) => {
     return x * y
    }
console.log(multi(9,7));

//spreed

let lista = [1,2,3];

let l1 = [3,4];

const l2 = [1,2, ...lista, 5];

//igual replace e append
//l1.splice(0,0,l2[1]);

//copy
let l3 = [...l1]

console.log(l2);

//append
l1.push(8)

console.log(l1);

console.log(l3);

//desestruct e match

//struct
const pessoa = {
    nome : 'Mikas',
    sobre: "Santos",
    prof: "Gaymer"
};

console.log(pessoa);

//forma padrão de quebra a estrutura
//let nome1 = pessoa.nome;

//conceito de python
let { nome, sobre, prof } = pessoa;

console.log(nome,sobre,prof);


const  cpf1 = "Meu cpf é 132.132.134-15";
//expressao regulares
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');
//emprega uma expressao em um string
console.log(cpf1.match(regex)[0])