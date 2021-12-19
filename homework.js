//Write a function findMax that takes three arguments and returns their maximum.
function maxNum(num1, num2, num3){
    var max = 0;
    if(num1 > num2){
        if(num1 > num3){
            max = num1;
        }
        else{
            max = num3;
        }
    }
    else{
        if(num2 > num3){
            max = num2;
        } else {
            max = num3;
        }
    }
    return max;
}
console.log(maxNum(26,52,65));


//Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out the number even or odd.

var x= prompt('Please enter a positive integer:', ' '); 
  let mod= x % 2;
  function evensAndOdds() {
      
if (mod ===0) {
    return ("even number")
} 
 else{
     return ("odd number")
 }
}
 console.log(evensAndOdds());


//Write a function which generates a randomUserIp. Ex: 168.127.25.2
function randomUserIPP() {
    let number1=Math.floor(Math.random() * 100);
    let number2=Math.floor(Math.random() * 250);
    let number3=Math.floor(Math.random() * 200);
    let number4=Math.floor(Math.random() * 255)
return number1+"."+ number2+"."+ number3+"."+number4
}
console.log(randomUserIPP())



//Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
//Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.

let nombre=prompt("escribe tu nombre ");
let apellido=prompt("escribe tu apellido")

function fullName(nombre,apellido) {

 return `${nombre}${apellido} ${nombre.lenght+apellido.lenght} digitos`;
}
console.log(fullName(nombre,apellido));

function fullNombre(nombre) {
    return `${nombre}'den savgilerle`;
}
console.log(fullNombre("ayse gul"));