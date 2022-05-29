//declarar o tipo de uma variavel

let nome: string;
let num : number;

//uma lista de string
let str: string[];

function teste( nome: string, num: number){
    return nome + num;
}

let mi : [number, boolean] = [1, true];

//any e unknown


//tipo nerver : funcao sem retorno
//lacos de repetiçao infinito e funções de erro,

//union type = or, ou eh tipo ou outra coisa

//intercion type = & fazer a interçao de dois tipos

type esc = 'mikas' | 'Mikael'

type User = {
    nome: String,
    sa : String,
    age?: number//pode ou nao ser declarado
}


//herança
//class pai extend filho

//public nome, declarando membro na classe

//public totalmente acessivel
//private apenas dentro da classe onde foi criada
//protected da classe e subclasse


