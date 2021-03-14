// array, é quando uma variavel recebe varios valores
// lembrando que para pegar um valor especifico, basta
// colocar o numero do indice, que começa em zero
// lembrando que os valores da variavel fica dentro de []

let pessoa = ['Rodrigo', 25, 1.75];

pessoa[3] = true; // adicionanado na posição 3
pessoa.push('solteiro');// adicionando no final do array, quando não sabe quantas posições tem seu array
pessoa.length; // saber quanto elementos tem no array
pessoa.sort(); // colocar em ordem crescente
pessoa.indexOf('rodrigo'); // buscar um elemento no array vai buscar rodrigo e saber qual a posição

for(let pos = 0; pos < pessoa.length; pos++){
    console.log(pessoa[pos]);
}


// maneira simplificada de usando o for in é só para
// array e objeto

for(let posicoes in pessoa){
    console.log(pessoa[posicoes]);
}
