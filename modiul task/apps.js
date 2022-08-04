// function nameBox (a){
//     function nameBox2 (b){
//         console.log(b)
//         return b;
//     }
//     console.log(a)
//     nameBox2("bar");
//     return a;
// }

// nameBox("foo");




// function avarage (a,b,c){
// const box  = a + b+ c;
// const boxTwo = box /3; 
// var item = boxTwo.toFixed(2);
// console.log(item);
// console.log(item);
//  return item;
// }

// avarage (33,85,75)




// function even_odd(a){


//     if(a % 2 == 0){
//         console.log("even number")
//     }
//     else{
//         console.log("odd number");
//     }
//     return a;

// }
// even_odd(27);

// function even (a){
//     if(a % 2 === 0 ){
//         console.log("even number");

//     }
//     else{
//         console.log("odd number")
//     }

// }
// even(18);

// console.log(105 % 6);

// var signal = "yellow";
// switch(signal){
//     case  "red":
//     console.log("you maybe in a danger");
//     break;
//     case  "yellow":
//     console.log("you should stop");
//     break;
//     case  "grenn":
//     console.log("you shoul croos the road");
//     break;
//     case  "red":
//     console.log("you maybe in a danger");
//     break;
//     default : 
//         console.log("harry up")
    
// }

// var signal = "red";
// if(signal === "red" ){
//     console.log("you maybe in a danger");

// }
// else if( signal === "yellow"){
//     console.log("you should stop");
// }
// else if( signal === "green"){
//     console.log("you should croos the road");
// }
// else if( signal === "red"){
//     console.log("you maybe in a danger");
// }
// else{
//     console.log("harry up");
// }

// function cross (a){
//     var b = a;
//     if(b = "red" ){
//         console.log("you maybe in a danger");
    
//     }
//     else if( b = "yellow"){
//         console.log("you should stop");
//     }
//     else if( b = "green"){
//         console.log("you should croos the road");
//     }
   
//     // else{
//     //     console.log("harry up");
//     // }
//     // return a;
    
// }


// cross(red);

// console.log(cross("red"));



// var user = {
// userName = 'Jillu',
// userName2 = 'abdul'
// }
// userName['address'] = 'jamalpur';
// userName2['address2'] = 'mone nai vaiyar address';
// console.log(user);


var company = {
    name : "amazan",
    selary : 30000,
    emply : 500,


}
var item = Object.keys(company);
console.log(item);

console.log(company.name);

var box = Object.getOwnPropertyNames(company);
console.log(box);

// 1
// console.log(company);
// company.name = "alibaba";
// console.log(company);
// 2
// console.log(company);
// company["selary"] = 50000;


// var box = "name";
// company[box]="bosundara";
// console.log(company);

