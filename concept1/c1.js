console.log("love")

// Issues with var keyword
 var  car =  "honda";
var  car = "Maruti";
console.log(car);    // Maruti

for (car count =0 ; count <5; count++){
console.log(count);     // 0 1  2 3 4
  
}
 console.log(count)  // 5
 car = "TATA";
console.log(car); //TATA



// a variable declared with let
 let  count =0 ;
count =1; 
console.log(count ) ;  // 1
  let count  = 2 ;   //Error : already Declared
 if( true )
 {
var name = "bob";
   let age = 12 ;
   console.log(name+age);  //bob12
 }
console.log(name);   //bob
console.log(age); // Error : age is not  defined 


//const should declared and initialize at the same time
 var   age ; 
console.log(age);   // undefined 
  let  address ; 
console.log(address);   // undfined 
 const  city;
 console.log(city);   // Error 


///We should make an habit to use const and let over var to avoid unnecessary confusion/errors.
// https://medium.com/@aayushtibra1997
