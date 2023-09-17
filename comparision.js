console.log("2">1);   // true   string automatically  convert into  the  number the comapre 
console.log("02">1);  // true 
/*  the reasone is that  and  an equality check == and comparisons > < >=
<= work  differently 
comparsion convert  null to number treating  it  as 0 
that is  why (3) null >=0 is true and (1) null >0 is false .  */
// this type of conversion   avoid  null and undefined
console.log(null >0) ;  // false 
console.log(null==0) ;  // false 
console.log(null>=0)  ;   // true 

console.log(undefined ==0 );    // false 
console.log(undefined >0 );    // false 
console.log(undefined <0 );    // false 







