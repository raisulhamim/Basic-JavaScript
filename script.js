let age = 24
let phone = 150000
let dailysomoy = 8
let giftcost = 35000
let perdaycall = 100
let shompod = 7000000


if (age > 23) {
    if (phone > 100000) {
        if (dailysomoy > 4) {
            if (giftcost > 20000) {
                if (perdaycall > 20) {
                    if (shompod > 5000000) {
                        console.log("I LOVE YOU TOO,koi chila tmi ato din ,ami to tomakei chai.")


                    } else {
                        console.log("gorib hoiya aise amar moto may er shatay prem korte,ja shor,RIJECT");

                    }
                    console.log("sotti tmi amaky ato gula call diba ,ohhh bisoy ta cute to")


                } else {
                    console.log("amar khoj khobor barbar nite na parle prem korbe kmne");

                }
                console.log("wow,ato tk gift amar janno,nice")

            } else {
                console.log("gift dite parbe na taile prem korte chas kn");
            }
            console.log("tmi amaky ato somoy diba ,bisoy ta cute to")

        } else {
            console.log("shomoy dite parbe na abar prem ar nam muk a nes kmne");

        }
        console.log("ohh tmi iphone chalao nice.")

    } else {
        console.log("nokia phone niya aisay prem korte");
    }
    console.log("tmr boyosh thik asay")
} else {
    console.log("agay boro hou tarpor prem koiro");

}


// ========LOOP==========

for (let h = 1; h < 100; h++) {
    console.log("i love you")


}

// ======= NAMTA ==========
let namta = 3
let i = 1
while (i <= 10) {
    console.log(namta + "x" + i + "=" + namta * i);
    i++
}

// =======USER INPUT LOOP===========

let h = Number(prompt("Enter a first value"))
let k = Number(prompt("Enter a last value"))

for (let f = h; f <= k; f++) {
    console.log("~~~~~~~~~~~~~");
    for (let i = 1; i <= 10; i++) {
        console.log(f + "x" + i + "=" + f * i);
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// =========ARRAY=========

// let arr = [0, 39, 22, 22, 258, 5859, 34, 32, 3, 31, 46, 567, 236]

// console.log(arr[8])


// ==========OBJECT=========

let obj = {
    name: "raisul",
    age: 21,
    email: "raisulhamim.dev@gmail.com",
    number: 38749858

}
console.log(obj.email);



// ========ARRAY OBJECT=====

let object= [{
    name: "raisul",
    age: 21,
    email: "raisulhamim.dev@gmail.com",
    number: 38749858
},
   {
    name: "sofiq",
    age: 22,
    email: "sofiuq112@gmail.com",
    number: 38749255
},
 {
    name: "rakib",
    age: 25,
    email: "hasanrakib339@gmail.com",
    number: 387583553
}
]


console.log(object[2].age);



let arr=["akib", "rakib", "sakib","sofik", "joy", "roy", "alif","raisul"]


for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}