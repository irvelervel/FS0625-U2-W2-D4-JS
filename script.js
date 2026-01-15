// RECAP JS
// VARIABILE
// una variabile è un contenitore per un valore (un'allocazione di memoria)

// TIPI DI DATO PRIMITIVI
// - stringhe es. 'ciao'
// - numeri es 50
// - booleani es. true
// - undefined es. variabile senza valore
// - null es. un valore nullo

// TIPI DI DATO COMPLESSI
// - array es. ['a', 'b', 'c'] o [1, 3, 5] -> una LISTA DI VALORI
// - oggetti es. { name: 'Stefano' } -> UN INSIEME DI COPPIE CHIAVE:VALORE

// per dichiarare una variabile in JS si utilizzano gli operatori let o const
let myNumber = 10 // <- myNumber è una variabile con un valore RI-ASSEGNABILE
myNumber = 20

// const crea una variabile costante -> non è possibile ri-assegnarle un nuovo valore
const myURL = 'https://www.epicode.com'
// myURL = 'https://www.google.com' // <-- errore

let boh // <-- eredita automaticamente un valore iniziale di undefined

const myArray = [10, 20] // di solito con i tipi di dato complessi si creano variabili
// con const perchè sono più leggere e non impediscono in ogni caso di operare con es. l'array
// (quindi aggiungerne elementi, rimuoverne etc.)

// es. dati primitivi
let nome = 'Stefano'
let cognome = 'Casasola'
let age = 21

const teacher = {
  name: 'Stefano',
  surname: 'Casasola',
  age: 21,
}

// stringhe
let str = 'HELLO WORLD'
str.length // 11, FUNZIONA SU STRINGHE E ARRAY
str.slice(0, 2) // 'HE' senza alterare l'originale, FUNZIONA SU STRINGHE E ARRAY
str.toLowerCase() // 'hello world' senza alterare l'originale
str.includes('LLO') // true

// numeri
let n = 50
n.toString() // restituisce una stringa con il valore numero es. '50'

let strs = str.slice(0, 2)

// ARRAY
const pets = ['hamster', 'doggo', 'micio']
// anche negli array, come nelle stringhe, gli elementi che lo compongono sono identificabilil
// tramite la loro POSIZIONE ("indice"). Gli array in JS sono "zero-indexed based".
pets[0] // 'hamster'
pets[1] // 'doggo'
pets[2] // 'micio'
pets[3] // undefined <-- siamo FUORI dai limite dell'array
// ogni array ha una LUNGHEZZA -> è definita dal NUMERO DI ELEMENTI che CONTIENE

const arr1 = [] // lunghezza 0
const arr2 = [60] // lunghezza 1
// FUNZIONA SU STRINGHE E ARRAY
arr2.length // 1

// in ogni array il primo elemento ha SEMPRE posizione 0
// in ogni array l'ultimo elemento ha sempre posizione length - 1

// aggiunge un elemento all'inizio dell'array
pets.unshift('redfish') // pets è stato modificato -> ['redfish', 'hamster', 'doggo', 'micio']

// aggiunge un elemento alla fine dell'array
pets.push('elephant') // pets è stato modificato -> ['redfish', 'hamster', 'doggo', 'micio', 'elephant']

// rimuove un elemento dall'inizio dell'array
pets.shift() // pets è stato modificato -> ['hamster', 'doggo', 'micio', 'elephant']

// rimuove un elemento dalla fine dell'array
pets.pop() // pets è stato modificato -> ['hamster', 'doggo', 'micio']

// è possibile anche rimuovere un elemento che non è per forza il primo o l'ultimo
pets.splice(1, 1) // dalla posizione 1 rimuove 1 elemento
// pets è stato modificato -> ['hamster', 'micio']

// preleva una porzione dell'array senza modificarlo
// FUNZIONA SU STRINGHE E ARRAY
pets.slice(0, 1) // restituisce un NUOVO array -> ['hamster']
pets.slice(0, 2) // restituisce un NUOVO array -> ['hamster', 'micio']
pets.slice(1, 2) // restituisce un NUOVO array -> ['micio']
