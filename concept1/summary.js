// primitive type

//  7 types  : String , Number , Boolean , null , undefined  , Symbol  , BigInt

// Refernce  (Non Primitive )  // typeof is object type 
 // if yoy master  in js   only  learn object and   Browser event or web Event 
// Array ,  objects  , Functions  

const id =Symbol("123")
const anotherId = Symbol("123")
console.log(id==anotherId)   //false  because symbol are create unique  id 

/*
  Type	                                  Result
Undefined	                             "undefined"
Null	                                 "object" (reason)
Boolean	                               "boolean"
Number	                               "number"
BigInt	                               "bigint"
String	                               "string"
Symbol	                               "symbol"
Function                              (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
Any other                             object	"object" 

  */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
