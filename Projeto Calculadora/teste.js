let frutas = ["maça", "abacaxi"]
console.log(frutas)
frutas.push("tangerina")
console.log(frutas)
frutas.push("melancia")
console.log(frutas)

let NoRepeat = (fruta) => {
    
    if (frutas.includes(fruta)) {
        let fruta = "ola essa fruta já está listada"
        return fruta

    }else {

        frutas.push(fruta)

    }


}
NoRepeat("pera")
console.log(frutas)
NoRepeat("uva")
console.log(frutas)
NoRepeat("pera")
console.log(frutas)
NoRepeat("maça")
NoRepeat("abacaxi")
NoRepeat("tangerina")
NoRepeat("melancia")
console.log(NoRepeat("melancia"))
console.log(frutas)
