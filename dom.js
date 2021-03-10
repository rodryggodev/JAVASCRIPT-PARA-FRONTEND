// Dom 

// quando tiver mais de uma mesma tag mais de uma vez
// temos que fazer igual array, como está ali abaixo

let p1 = document.getElementsByTagName('p')[0];
p1.innerHTML = '<strong>Teste</strong>';
let cor = document.getElementsByTagName('body')[0];
cor.style.backgroundColor = 'black';

let nico = document.querySelector('div#teste');
nico.innerText = 'Nega chegando';
