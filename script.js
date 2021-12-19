sayHello();

console.log("dışardan Merhaba");

function sayHello() {
  console.log("içerden Merhaba");
}

console.log("aşağıdan Merhaba");
console.log(sayHello); // fonksiyon tanımını verir
console.log(sayHello()); // undefined

const userName = "Ahmet";

let a = 5;
let b = 6;
let d = 0;
console.log(a + b);
function calc() {
  let c = a + b;
  d = a - c;
  console.log(a + b);
  console.log(c);
}
calc();
console.log(d);

let name1 = "mehmet";

function nameUpper(isim) {
  console.log(isim.toUpperCase());
}
nameUpper("ali");
nameUpper(name1);

function calculate(param1, param2) {
  let number = param1 * 2;
  console.log(param1, "adet param var");
  console.log(param1 + param2);
  console.log(param2, "adet derdim var");
  console.log("iki katı", number);
}
//console.log(number); // not defined, çünkü number local scope'da
calculate(5, 9); // 14
calculate(3, 4); // 7

// parametresiz versiyon
let var1 = 5;
let var2 = 2;
function calculate2() {
  let number = var1 * 2;
  console.log(var1, "adet param var");
  console.log(var1 + var2);
  console.log(var2, "adet derdim var");
  console.log("iki katı", number);
}
//console.log(number); // not defined, çünkü number local scope'da
calculate2(); // 7
calculate2(); // 7

function namer(param1, param2) {
  console.log(param1, param2);
}
namer("ahmet"); // ikinciyi vermezsek undefined olur

function naming(param1 = "ali", param2 = "erkek") {
  console.log(`${param1} bir ${param2}`);
}

naming("ahmet"); // ahmet bir erkek
naming("şeyda", "kız"); // şeyda bir kız

// return fonksiyonlar
function sayName(parametre) {
  let cumle = `${parametre} benim adım`;
  console.log(cumle);
  return cumle;
}

console.log(sayName("veli"));

function basit() {
  return 5;
  console.log("merhaba"); //returnden sonra  çalışmaz
  //return "merhaba";
}
console.log(basit()); // === console.log(5) //RETURN TEKRAR CALIS , slm
console.log(basit() + 6); // === console.log(5 + 6)  // 11

console.log(nameFunc(6)); // 12  //üstünde de çalışır
// functipn declaration - classic way
function nameFunc(value) {
  return value * 2;
}
console.log(nameFunc(6)); // 12  // altında da

//PARAMETRELERE TEKRAR CALIS
let yenideger = nameFunc(8) + 7; // 23 //BURAYI TEKRAR CALIS
let yepyenideger = yenideger * 2; // 46

// function expression //Herhangi bir variablea function koyulabilir (let,var,const)
//console.log(yeniFunc(5)); // 7   /// tanımlanmadan çalışmaz
const yeniFunc = function (val) {
  return val + 2;
};

console.log(yeniFunc(5)) // 7

  //IIEF
//   (function () {
//     console.log("Welcome to Immediately invoked function expression (IIFE)");
//   })()




  const sayMello = function(name) {
    //console.log("sayMello calıştı")
    const greeting = 'Hello ' + name;  // Hello JOHN WAYNE
    //console.log(greeting)
    return greeting; //BU RETURNLERE TEKRAR CALIS
    
  }
  console.log("merhaba");
  console.log("Hello JOHN WAYNE");  // "Hello JOHN WAYNE"
  console.log(sayMello('JOHN WAYNE'));  // "Hello JOHN WAYNE"
  
  sayMello("mehmet")  // çalışıyor ama ben görmüyorum


  function merhaba(params) {
      document.write(`<p>Merhaba ${params}</p>`) //DOCUMENT WRITE TEKRAR BAK
  }
  let name5 = "ayşe"
  merhaba("Ayşe");
  merhaba(name5);


  let myAge = prompt("Yaşınızı giriniz");
  //console.log(myAge)
//prompt'dan girdikten sonra myAge değişkeni tanımlanmış oluyor, oradan girdiğim değer
  function writeMyAge(params) {
    document.write(`<p>Seni yaşın ${params}</p>`) //
  }

  writeMyAge(myAge);



  let firstName = prompt("isminizi giriniz")
  let firstAge = prompt("yaşınızı giriniz")

  function example(value1, value2) { //BU ORNEGE TEKRAR BAK
      let firstYears = 2*10.5;
      let lastYears = (value2 - 2) * 4 ;
      let totalYears = firstYears + lastYears;
      document.write(`<h4>${value1}, senin köpek yaşın ${totalYears}</h4>`) //
        return `${value1}, senin köpek yaşın ${totalYears}`
    }

  //example ("mustafa", 55);
  example (firstName, firstAge);

  let result = example ("mustafa", 55)

  console.log(result)