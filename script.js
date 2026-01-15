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

// OGGETTI
// un oggetto è una collezione di coppie chiave:valore
const person = {
  age: 18,
  shoesNumber: 43,
  height: '180cm',
}

// una volta che l'oggetto è stato dichiarato, potete accedere alle sue proprietà specificando
// la CHIAVE
// la CHIAVE si può specificare con due notazioni:
// - DOT NOTATION (90% delle volte userete questa!)
person.height // '180cm',
person.age // 18

// - SQUARE BRACKET NOTATION (utile quando la proprietà da cercare è salvata in una variabile)
person['age'] // 18

const z = 'height'

person.z // undefined
person[z] // '180cm'

person.canDrive = true // ho aggiunto permanentemente una nuova proprietà a person

// CICLI
// un ciclo rappresenta una molteplice esecuzione di un blocco di codice
// tipicamente esistono cicli con un numero NON predeterminato di esecuzioni (while) e
// cicli con un numero predeterminato di esecuzioni (for)

// WHILE
let numeroEstratto = 0
let lanci = 0

// Math.random() * 6 // 0.000001 * 6   |   0.9999999 * 6 -> 0.000006 | 5.9999999
while (numeroEstratto !== 6) {
  lanci++
  numeroEstratto = Math.ceil(Math.random() * 6) // 1 | 6
  console.log('È USCITO ' + numeroEstratto)
}

console.log(
  'HO FINITO, È FINALMENTE USCITO 6. HO IMPIEGATO ' + lanci + ' LANCI.'
)

// FOR
for (let i = 0; i < 10; i++) {
  // i vale 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  console.log('CIAO DAL FOR', i)
}

// il ciclo FOR è utilizzatissimo per CICLARE GLI ARRAY
const fiat = ['panda', 'punto', 'stilo', 'multipla']

for (let i = 0; i < fiat.length; i++) {
  // i è SEMPRE una posizione valida dell'array fiat
  // i vale: 0, 1, 2, 3
  // fiat[i] -> vale 'panda' al primo giro, 'punto' al secondo etc.
  console.log('Sono arrivato alla macchina: ' + fiat[i])
}

// ARRAY ADVANCED
fiat.forEach(function (macchina) {
  // il metodo forEach è una versione sintatticamente più "simpatica" del ciclo for
  // non richiede inizializzazione dell'indice, punto di arrivo etc.
  // macchina è un nome che ho scelto io, rappresenterà sempre un ELEMENTO dell'array
  // (quello che il for chiamava "fiat[i]")
  // all'interno di questa funzione potete fare con macchina quello che volete
  console.log(macchina)
})

const newArray = fiat.map(function (macchina) {
  return macchina.slice(0, 1)
})
// newArray vale ['p', 'p', 's', 'm']

const anotherArray = fiat.map(function (macchina) {
  return macchina.length
})
// anotherArray vale [5, 5, 5, 8]

const macchineConLaP = fiat.filter(function (macchina) {
  return macchina.slice(0, 1) === 'p'
})
// macchineConLaP ora vale ['panda', 'punto']

// FUNZIONI
// una funzione è un blocco di codice riutilizzabile.

const myFunc = function () {}

myFunc()

const arrow = () => {
  // la funzione freccia è in generale un valido sostituto delle funzioni tradizionali
  // però non possiede al suo interno i collegamenti corretti per le parole "this", "super" e
  // qualcos'altro
  // this non esiste nelle funzioni freccia -> viene ereditato dal contesto circostante
}

arrow()

// le funzioni freccia se sono monoriga e non hanno le graffe, ritornano automaticamente un valore

const normalF = function () {
  return 'ciao' // 'ciao'
}

const normalFArrow = () => 'ciao' // ritorno la stringa 'ciao'
// se la funzione freccia deve solo ritornare un valore, potete farla monoriga, senza graffe
// e senza parola "return"

const bark = function () {
  console.log('BAU!')
}

bark()
bark()
bark()

const saluta = function (personName) {
  console.log('Ciao, ' + personName + '!')
}

saluta('MARIO')
saluta('GIULIO')
saluta('STEFANO')

// personName è il PARAMETRO della funzione
// 'MARIO', 'GIULIO' e 'STEFANO' sono i dati che vengono passati all'invocazione della funzione
// sono detti anche ARGOMENTI

const rectArea = function (l1, l2) {
  console.log(l1 * l2)
}

rectArea(5, 3)
rectArea(15, 8)

// voglio fare la somma di due numeri, poi la voglio elevare al quadrato e poi ci voglio sottrarre 5

const faTutto = function (n1, n2) {
  const sum = n1 + n2
  const alQuadrato = sum * sum
  const menoCinque = alQuadrato - 5
  console.log('il risultato è ' + menoCinque)
}
// sarebbe meglio scomporre
const faLaSomma = function (n1, n2) {
  const risultato = n1 + n2
  return risultato
}

const alQuadrato = function (n) {
  const risultato = n * n
  return risultato
}

const toglieCinque = function (n) {
  const risultato = n - 5
  return risultato
}

// quando ritornate un valore da una funzione, l'esecuzione di quella funzione equivale
// al suo valore di ritorno

// 5, 6
const somma = faLaSomma(5, 6) // somma è 11
const elevato = alQuadrato(somma) // vale 121
console.log(toglieCinque(elevato))

// sarebbe uguale a...
toglieCinque(alQuadrato(faLaSomma(5, 6))) // 116

// EVENTI
// gli eventi sono degli OGGETTI che transitano nel browser a seguito di INTERAZIONI
const funzione1 = function (e) {
  console.log('HAI CLICCATO IL BOTTONE', e)
  // il parametro "e" è un oggetto
  // questo oggetto sarà pieno di informazioni preziose su cosa sia successo nella pagina
}

const hover = function (e) {
  console.log('IL MOUSE È PASSATO SUL BOTTONE', e)
}

// riferimento all'elemento
const button = document.querySelector('button')
console.log(button)
button.addEventListener('mouseleave', function (e) {
  console.log('MOUSE ANDATO VIA', e)
})
