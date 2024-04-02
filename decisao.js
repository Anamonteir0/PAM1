let n1 = 4;
let n2 = 7

console.log(n1+n2)
console.log(n1*n2)
console.log(n1-n2)
console.log(n1/n2)
console.log("Sobra par", (n1 % 2))
console.log("Sobra impar", (n1 % 2))

let n3 = 5
let result = (n3 % 2 )

if (result == 0){
console.log('O número, ${n3} é par')
} else{

    console.log('O número ${n3} é impar')

}
 

let n4 = '3'
if(typeof n4 !== 'number') {
    console.log('${n4} não é um numero')
    console.log(typeof n4)
}else{
    let result2 = (n4 % 2)
    if (result == 0) {
        console.log('O número  ${n4} é par')
    } else{
        console.log('O numero  ${n4} é impar')
    }    
}