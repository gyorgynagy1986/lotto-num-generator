const btn = document.querySelector('.btn');
const btnClear = document.querySelector('.btn-clear');
const yourNumbers = document.querySelectorAll('.yourNumber');

let countElement = 0;
let MaxrenderedObj = 10 ; 
let yourNumber = [0,0,0,0,0];

// CUSTUM NUMBER 
const yourNumberHandeler = () => {
    yourNumbers.forEach((el, i) => {
        yourNumber[i] = el.value;
    })
}

// PREVENT SAME NUMBERS
const preventSame = () => {
    if ( 
        a === b || a === c || a === d ||
        a === e || b === c || b === d || 
        b === e || b === c || b === e ||
        c === d || c === e)
        console.log('caught');
        { a + 1, b + 2, c + 3,  d + 4,  e + 5; } 
}

// PREVENT NUMBER OVERFLOW
const preventOverflow = () => {
    if (
        a > 90 || b > 90 ||
        c > 90 || d > 90 ||
        e > 90 )
    {
        console.log('duplicated number');
    } else {
        logic();
    }
}

// GET THE RANDOM NUMBERS
function random () {

    if(yourNumber[0] > 0 && yourNumber[0] < 91) {
        a = yourNumber[0];
    } else {
        a = Math.floor(Math.random() * 90 + 1);
    }

    if(yourNumber[1] > 0 && yourNumber[1] < 91) {
        b = yourNumber[1];
    } else {
        b = Math.floor(Math.random() * 90 + 1);
    }

    if(yourNumber[2] > 0 && yourNumber[2] < 91) {
        c = yourNumber[2];
    } else {
        c = Math.floor(Math.random() * 90 + 1);
    }

    if(yourNumber[3] > 0 && yourNumber[3] < 91) {
        d = yourNumber[3];
    } else {
        d = Math.floor(Math.random() * 90 + 1);
    }

    if(yourNumber[4] > 0 && yourNumber[4] < 91) {
        e = yourNumber[4];
    } else {
        e = Math.floor(Math.random() * 90 + 1);
    }
}

// GET THE RIGHT ORDER 
const order = (a, b) => a - b;


// CLEAR THE CONTAINER (REMOVE ALL EL!)
const removeAll = () => {
    document.querySelectorAll('[id=IdContainer]').forEach(el => el.remove())
    countElement = 0; 
    btn.textContent = 'Új számok'

}


function logic () {
       
        yourNumberHandeler()
        random()

        const numbers = [a, b, c, d, e];

        order()
            
        let newArray = numbers.sort((a, b) => order(a, b))

        countElement++;


            // LIMIT THE SPAM ELEMENTS
        if(countElement < MaxrenderedObj) {
         
            let create = document.createElement("div");
            create.id = 'IdContainer'
            

           
        // LOOP OVER THE SORTED NUMBER AND CREATRE SPAN ELEMENT
            newArray.forEach((numbers,) => {
                let para = document.createElement("span")
                para.innerHTML = numbers;
                create.appendChild(para)
        })
    
        // CREATE THE ROOT DIV
            document.getElementById('root_div').appendChild(create);
            
        // STOP THE LOOP    
         } else  {
            console.log('hello', countElement );
            create = undefined;
            para = undefined;
            btn.textContent =  `max ${MaxrenderedObj} szám`
         }
}
    
// APP HANDELER
function lottory() {
        random () 
        preventSame()
        preventOverflow()
}

// GENERATE NUMBER BEFORE CLICK
 lottory();     



/*********************************************************************************************** */

// BUTTONS 

// 1. ) Add
btn.addEventListener('click', lottory)
// 2. ) Remove
btnClear.addEventListener('click', removeAll); 

