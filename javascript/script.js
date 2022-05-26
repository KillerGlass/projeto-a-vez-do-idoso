

console.log("Hello World")

function auxValida(numeros, ind){

    var soma = 0;
    for(var i = ind; i > 1; i --){
        soma += numeros.charAt(ind - i) * i;
    }

    return (soma % 11 ) < 2 ? 0: 11 - (soma % 11);
}

function validaCPF(cpf){

    if(cpf.length != 11){
        return false;
    }else{

        var numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);

        if(auxValida(numeros,10) != digitos.charAt(0)){

            return false; 
        }

        numeros = cpf.substring(0,10);

        if(auxValida(numeros,11) != digitos.charAt(1)){

            return false; 
        }


        return true;
    }
     
}

function validation(){

    var cpf = document.getElementById("cpf_digitado").value;

    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    console.log(cpf)

    var flag = validaCPF(cpf);

    if(flag){
        document.getElementById('success').style.display = 'block';
    }else{
        document.getElementById('error').style.display = 'block';
    }
}