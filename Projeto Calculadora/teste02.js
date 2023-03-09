let num = []

console.log(num)


function screen(valor) {
  if(num == 0) {
    num.push(valor)
  }else {
    num.push(num + valor)
    let operando = num[1]
    num = []
    num = [operando]

  }
    
 
}

screen(4)
console.log(num)
console.log(typeof num)
screen(45)
console.log(num)
console.log(typeof num)
screen(5)
console.log(num)
console.log(typeof num)
