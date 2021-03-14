// CONDIÇÕES PT1 

// CONDIÇÃO SIMPLES SÓ COM O IF(SE)


let nota = 7;

if (nota >= 7.7){
    console.log('aprovado');
}


// CONDIÇÃO COMPOSTA IF E ELSE

let pais = 'BR';

if(pais !='BR'){
    console.log('gringo safado');
} else{
    console.log('br ladrão mais safado ainda');
}

let estado = 'maranhao';
// condições aninhadas um dentro do outro, um if dentro do outro
// if e else e elif
// se, se não, se não se

if(pais === 'Br') {
    console.log('hummm');
}
else if(estado === 'maranhao' || stproximo =='para'){
    
        console.log(`voce é do ${estado}`);
    } else {
        console.log('ou estado proximo');
    }

// switch

let diaSem = 6;

switch(diaSem){
case 0:
    console.log('domingo');
    break;
case 1:
    console.log('segunda');
    break;
case 2:
    console.log('terça');
    break;
case 3:
    console.log('quarta');
    break;
case 4:
    console.log('quinta');
    break;
case 5:
    console.log('sexta');
    break;
case 6:
    console.log('sábado');
    break;
default:
    console.log(`não existe ${diaSem} da semana, por favor informe outro valor ente 0 e 6`);
    break;
    
}
