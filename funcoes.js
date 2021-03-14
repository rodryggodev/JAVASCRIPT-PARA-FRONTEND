// function(função) -> serve para quando tiver um bloco
// de codigo que eu vou ter que usar mais de uma vez
//

// função sem parametro e sem retorno
function Andar(){
    console.log('estou andando');
}
// chamando a função
Andar();


// funcção com parametro e retorno

function Somar(n1, n2){
    return n1+n2;
}

console.log(Somar(1,2));


// função anonima

let v = function(x){
    return x**2
}
console.log(v(2));


/* arrow function arrow significa ceta
   normalmente ela é atribuida a uma const
*/

const myName = () => {
    console.log('My name is Rodrygo');
}
myName();

/*
  callback function.
  Nada mais é que chamar de volta
é uma função que ta passando parametro para outra função
*/

function myname(name){
    name();// chmanado a função
}
myname(
    () => {
	console.log('função de callback');
    }
)
