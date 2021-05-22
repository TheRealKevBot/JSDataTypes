// JavaScript Data Types 


// String 

var string = 'Hello World'

console.log('I am a' ,typeof string)
console.log('I am still a' ,typeof 'Hello World')

string.toUpperCase()
console.log(string)

string = string.toUpperCase()
console.log(string)

string.toLowerCase()
console.log(string)

string = string.toLowerCase()
console.log(string)

console.log()
// Number 

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

var number = 123

console.log('I am a', typeof number)
console.log('I am still a', typeof 123)

number.toString()
console.log(number)

number = number.toString()
console.log(number) 

console.log()
// BigInt (Big Integer)

var bigInt1 = 12345678910111213141516
var bigInt2 = 12345678910111213141516n

console.log(bigInt1)
console.log(bigInt2)

console.log()
// Boolean

var boolean1 = true
var boolean2 = false 

console.log(boolean1)
console.log(boolean2)

boolean1 = Boolean(0)
console.log(boolean1)

boolean2 = Boolean(1)
console.log(boolean2)

console.log()
// Symbol

var symbol1 = Symbol('A')
var symbol2 = Symbol('A')

console.log('Are we equal ?', symbol1 === symbol2)

console.log()
// Undefined 

var someVariable 
var someOtherVariable

console.log(someVariable)
console.log(someOtherVariable)

