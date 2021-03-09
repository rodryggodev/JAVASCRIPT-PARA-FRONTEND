// varaivel




// string
 
let name = window.prompt('Qual o seu nome?');
alert( `Bem vindo ${name.toUpperCase()}`);
  

// Number
let n1 = Number(window.prompt(' Informe um valor:'));
let n2 = Number(window.prompt(' Outro valor: '));
let n3 = Number.parseInt(window.prompt(' Valor 3:'));
let n4 = Number.parseFloat(window.prompt('Valor 4'));
let res = (n1 + n2 + n2) / n4;
alert(` O Resultado é: ${res.toFixed(2)}`);



// alert('o resultado é : res')  não faz interpolação
  // e é incorreto
 
  // alert('O resultado é ' + res)  usa a contatenação
   //uma forma correta, mas da muito trabalho para contatenação de mais de uma variavel
 
//   alert(` o resultado é ${res}`)  usa template string e é a forma atualizada
  
// alert(`Bem vindo ${name.length()}`) -> quantidade de caracteres
//
// alert(`Bem vindo ${name.toUpperCase()}`) -> tudo em maisculo
//
// laert(`Bem vindo ${name.toLowerCase()}`)-> tudo em minusculo
//
// alert(`o valor é ${res.toFixed(2)}`) -> quantidade de casa decimal
//
// alert(` o valor é ${res.toFixed(2).replace('.', ',')}`) -> para trocar o ponto por virgula
 
