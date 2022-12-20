// Ejemplos de Strings
const role = "Teacher"

// Esto va a petar
/*
    peta porque role está definido como constante, y por lo tanto, no puede redefinirse con otro nombre etc.
    role = "Student"
*/

console.log (role)

// Intentar usar siempre nombreNombre para nombrar  una variable (segunda parte mayuscula) lo que se llama camelCase
// Para constantes podeis usar tambien MAYUS_CASE (TEACHER_NAME)
const TEACHER_NAME = "Jordi"

let phrase1 = "The name of the teacher is " + TEACHER_NAME + " and is instructing JS" // Usamos + para concatenar strings

let phrase2 = `The name of the teacher is ${TEACHER_NAME} $ {} and is instructing JS` // O usamos backticks (`) para usar la interpolación (${nombrevariable})

//console.log ("phrase1", phrase1) Se puede mostrar el nombre de la variable y la variable de esta forma

console.log (phrase1)
console.log ("phrase2", phrase2)
console.log ("phrase1 !== phrase2", phrase1 !== phrase2)

let coches3 = ["audi", "bmw", "vw"]

// let mouseItem : en vez de = { -------------> peta porque no podemos usar : para asignar un valor a una variable
let mouseItem = {
    name: "MagicMouse", //------> Para asignar un valor a una propiedad debemos usar :
    units: 22,
    price: 99,
    OS: ["Windows", "Linux", "Mac"]
}

let keyboardItem = {
    name: "QWERTY",
    units: 23,
    price: 29.9,
    ISOCode: "ES",
    OS: ["Windows", "Linux", "Mac"], // Tenemos que usar una coma (,) para delimitar mas de un elemento excepto en el ultimo elemento del final que no es necesario
    compatibleWith: { // Para objetos usamos {}
        mouse: mouseItem
    }
}

// usamos . para poder acceder a nodos del objeto
console.log ("Available units", keyboardItem.units > 0)
console.log ("Units of mouse compatible with keyboardItem", keyboardItem.compatibleWith.mouse.units)

console.log ("Mouse item has ISOCode ??? ", mouseItem.ISOCode) // Devuelve undefined porque efectivamente no existe esta propiedad en el objeto

if (keyboardItem.units > 0) {
    console.log ("Tenemos unidades!")
} else {
    console.log ("OUT OF STOCK")
}

console.log ("coches3[0] is audi", coches3 [0] === "audi")
console.log ("coches3[1] is bmw", coches3 [1] === "bmw")
console.log ("coches3[2] is vw", coches3 [2] === "vw")
console.log ("what is coches3[3]", coches3 [3]) // Como no existe el cuarto elemento, devuelve undefined


// Podemos alterar el contenido de un objeto
console.log ("keyboardItem.ISOCode", keyboardItem.ISOCode)
keyboardItem.ISOCode = "IT"
console.log ("keyboardItem.ISOCode", keyboardItem.ISOCode)

// También podemos alterar el contenido de un array
console.log ("coches3[2] is vw", coches3 [2] === "vw")
coches3 [2] = "seat"
console.log ("coches3[2] is seat", coches3 [2] === "seat")
coches3[2] = 23
console.log ("coches3[2] is 23", coches3 [2] === 23)

// Arrays cualquier tipo de objeto: [Undefined, null, 1, true, NaN, Infinity, "hola", {}]
const cualquierArr = [undefined, null, 1, true, NaN, Infinity, "hola", {}]
console.log ("cualquierArr [5] === NaN", cualquierArr [5] === 1/0)
// El objeto es una lista de propiedades, accesibles por nombre
// {Mixed}

// keyboardItem.OS = ["Windows", "Linux", "Mac"]
for (let os of keyboardItem.OS) { 
    // nos permite recorrer el array, de manera que os adquirirá los valores de dentro del array por cada iteración
    if (os === "Windows") {
        console.log("Es windows!");
    } else if (os === "Linux") {
        console.log("Es Linux!");
    } else {
        console.log("No es ni windows ni linux!");
    }
}

// reescritura de los if-else if-else con switch
for (let os of keyboardItem.OS) {
    switch(os) {
        case 'Windows':
            console.log("Es WINDOWS!");
            break;
        case 'Linux': 
            console.log("Es LINUX!");
            break;
        default:
            console.log("No es ni WINDOWS ni LINUX!");
            break;
    }
}