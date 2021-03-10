// eventos da dom 

// lembrando que a função tem que ter o mesmo nome do evento que ta vindo de lá do html

/*
function mudar(){
  let trocar = document.querySelector('#cabecalho');
    trocar.innerHTML = '<img src="foto.jpg" alt="teste">';
  trocar.style.backgroundColor = '#ffcbdb';
  trocar. style.borderRadius = '10px 10px 10px 10px';
}

*/

// usando .addEventListener -> que tira o evento do html e faz diretamento dentro do js
//

let a = document.querySelector('#cabecalho');
a.addEventListener('click', clicar);

function clicar(){
    a.innerText = 'parabens';
   
}

function somar(){
    let campo1 = document.querySelector('#cmp1');
    let campo2 = document.querySelector('#cmp2');
    let res = document.querySelector('#res');
    let campon1 = Number(campo1.value);
    let campon2 = Number(campo2.value);
    let som = campon1 + campon2;
    res.innerHTML = `a some é ${som}`;
}
