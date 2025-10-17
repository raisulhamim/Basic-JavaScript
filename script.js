// let age = 24
// let phone = 150000
// let dailysomoy = 8
// let giftcost = 35000
// let perdaycall = 100
// let shompod = 7000000


// if (age > 23) {
//     if (phone > 100000) {
//         if (dailysomoy > 4) {
//             if (giftcost > 20000) {
//                 if (perdaycall > 20) {
//                     if (shompod > 5000000) {
//                         console.log("I LOVE YOU TOO,koi chila tmi ato din ,ami to tomakei chai.")


//                     } else {
//                         console.log("gorib hoiya aise amar moto may er shatay prem korte,ja shor,RIJECT");

//                     }
//                     console.log("sotti tmi amaky ato gula call diba ,ohhh bisoy ta cute to")


//                 } else {
//                     console.log("amar khoj khobor barbar nite na parle prem korbe kmne");

//                 }
//                 console.log("wow,ato tk gift amar janno,nice")

//             } else {
//                 console.log("gift dite parbe na taile prem korte chas kn");
//             }
//             console.log("tmi amaky ato somoy diba ,bisoy ta cute to")

//         } else {
//             console.log("shomoy dite parbe na abar prem ar nam muk a nes kmne");

//         }
//         console.log("ohh tmi iphone chalao nice.")

//     } else {
//         console.log("nokia phone niya aisay prem korte");
//     }
//     console.log("tmr boyosh thik asay")
// } else {
//     console.log("agay boro hou tarpor prem koiro");

// }


// ========LOOP==========

// for (let h = 1; h < 100; h++) {
//     console.log("i love you")


// }

// ======= NAMTA ==========
// let namta = 3
// let i = 1
// while (i <= 10) {
//     console.log(namta + "x" + i + "=" + namta * i);
//     i++
// }

// =======USER INPUT LOOP===========

// let firstvalue = Number(prompt("Enter a first value"));
// let lastvalue = Number(prompt("Enter a last value"));
// let reject1 = Number(prompt("Enter a first reject value")); 
// let reject2 = Number(prompt("Enter a second reject value")); 

// for (let h = firstvalue; h <= lastvalue; h++) {
//   console.log( h,"এর নামতা start ====");

//   for (let i = 1; i <= 10; i++) {
//     let result = h * i;


//     if (result === reject1 ||result === reject2 ) {
//       continue;
//     }

//     console.log(h + " x " + i + " = " +result);}
//     if(h<lastvalue){
//         console.log(h,"এর নামতা end ====")
//     }else{
//           console.log("সকল নামতার সমাপ্তি ঘোষণা করা হলো")
//     }
// }



// =========ARRAY=========

// let arr = [0, 39, 22, 22, 258, 5859, 34, 32, 3, 31, 46, 567, 236]

// console.log(arr[8])


// ==========OBJECT=========

// let obj = {
//     name: "raisul",
//     age: 21,
//     email: "raisulhamim.dev@gmail.com",
//     number: 38749858

// }
// console.log(obj.email);



// ========ARRAY OBJECT=====

// let object= [{
//     name: "raisul",
//     age: 21,
//     email: "raisulhamim.dev@gmail.com",
//     number: 38749858
// },
//    {
//     name: "sofiq",
//     age: 22,
//     email: "sofiuq112@gmail.com",
//     number: 38749255
// },
//  {
//     name: "rakib",
//     age: 25,
//     email: "hasanrakib339@gmail.com",
//     number: 387583553
// }
// ]


// console.log(object[2].name+ object[2].age);





// let arr=["akib", "rakib", "sakib","sofik", "joy", "roy", "alif","raisul"]


// for(let i=0; i<arr.length; i++){
//     console.log(arr[i],i);
// }

// function display() {
//   console.log("raisul islam hamim");

// }
// display()
// function display(name) {
//   console.log(`Welcome ${name} sir`);

// }
// display("Raisul Islam Hamim");



// let see=(n1,n2)=>{
//   console.log(n1-n2);

// }
// see(46,56)



// let display=()=>console.log("Hamim");


// display()

// function display(n1,n2){
//     return n1+n2
// }
// let result=display(12,34)
// if(result>30){
//    console.log("Hello Sir");
// }else{
//     console.log("Bye Sir");

// }

// function username(name){
//     let utterance = new SpeechSynthesisUtterance(`Hello ${name} sir Good Morning`);
// speechSynthesis.speak(utterance);
// }
// username("raisul islam hamim")

// let cha = (prompt("Enter single letter: "))
// if (cha == 'A' || cha == 'B' || cha == 'C' || cha == 'D' || cha == 'E' || cha == 'F' || cha == 'G' || cha == 'H' || 
//     cha == 'I' || cha == 'J' || cha == 'K' || cha == 'L' || cha == 'M' || cha == 'N' || cha == 'O' || cha == 'P' ||
//      cha == 'Q' || cha == 'R' || cha == 'S' || cha == 'T' || cha == 'U' || cha == 'V' || cha == 'W' || cha == 'X' ||
//       cha == 'Y' || cha == 'Z' ) {
//     console.log("Capital letter");

// } else {
//     console.log("Small letter");

// }
// let x=10
// x>=10?console.log("Hi"):console.log("Bye");

// let mark = Number(prompt("Enter your number: "))

// if (mark <= 100 && mark >= 80) {
//     console.log("A+");


// } else if (mark <=79 && mark >= 70) {
//     console.log("A");

// } else if (mark <=69 && mark >= 60) {
//     console.log("A-");

// } else if (mark <=59 && mark >= 50) {
//     console.log("B");

// } else if (mark <=49 && mark >= 40) {
//     console.log("C");

// } else if (mark <=39 && mark >= 33) {
//     console.log("D");

// } else if (mark > 100) {
//     console.log("Enter a valid number");

// } else if (mark < 0) {
//     console.log("Enter a valid number");

// } else{
//     console.log("you are fail");
// }
// let x = 100
// x > 50 ? x > 99 ? x >= 100 ? x > 95 ? x > 1 ? x > 101 ? console.log("hello girl")
// :console.log("Allah hafiz") : console.log("good bye"): console.log("ja shor"): console.log("k tui") : console.log("shor shor"): console.log("Bye");
// ;

// let user=Number(prompt("Enter a number : "))
// let array=[1,2,3,4,5,6,7,8,9,10];

// array.map((item,index)=>{
//     console.log(user + "X" + (index+1) + "=" + user*(index+1));
// })

let heading= document.querySelector(".heading")
let btn1= document.querySelector(".btn1")
let btn2= document.querySelector(".btn2")

btn1.addEventListener('click', function(){
    heading.style.color="red"

})
btn2.addEventListener('click', function(){
    heading.style.color="black"

})