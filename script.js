let dolor$ = 100000;
let autoclick = 0;
let click = 1;


// start click

// querySelector 
const clickerButton = document.querySelector('.clicker-button'); // Click button
const dolorText$ = document.querySelector('.display-indicator'); //display
const indicatorClickText = document.querySelector('.indicator-click'); // click /s
const indicatorAutoclickSecText = document.querySelector('.indicator-autoclick-sec');// auto click / s 
const btn1 = document.querySelector('.autoclick-sec1'); // click upgreat
const btn2 = document.querySelector('.autoclick-sec2'); // click upgreat
const btn3 = document.querySelector('.autoclick-sec3'); // click upgreat
const btn4 = document.querySelector('.autoclick-sec4'); // click upgreat
const btn5 = document.querySelector('.autoclick-sec5'); // click upgreat


clickerButton.addEventListener('click', OneClickOneDolor = () =>{
    Math.floor(dolor$ += click);
    dolorText$.innerText =`${Math.floor(dolor$)}$`;
    indicatorClickText.innerText = click;
    indicatorAutoclickSecText.innerText = autoclick;
});

btn1.addEventListener('click', BuyOneButton = () => {
    if (dolor$ >= btn1.value) {
        dolor$ -= btn1.value;
        click += 1;
        dolor$ += click;  
        btn1.value /= 0.9;
    };

    dolorText$.innerText =`${Math.floor(dolor$)}$`;
    indicatorClickText.innerText = click;
    indicatorAutoclickSecText.innerText = autoclick;
    btn1.innerText = Math.floor(btn1.value);
});

btn2.addEventListener('click', BuyAutoButton1 = () => {
    if (dolor$ >= btn2.value) {
        dolor$ -= btn2.value;
        autoclick += 1;
        btn2.value *= 1.07;
    };

    dolorText$.innerText =`${Math.floor(dolor$)}$`;
    indicatorAutoclickSecText.innerText = autoclick;
    btn2.innerText = Math.floor(btn2.value);
});

btn3.addEventListener('click', BuyAutoButton2 = () =>{
    if(dolor$ >= btn3.value){
        dolor$ -= btn3.value;
        autoclick += 25;
        btn3.value *= 1.07;
    };

    dolorText$.innerText =`${Math.floor(dolor$)}$`;
    indicatorAutoclickSecText.innerText = autoclick;
    btn3.innerText = Math.floor(btn3.value);
});

btn4.addEventListener('click', BuyAutoButton3 = () =>{
    if(dolor$ >= btn4.value){
        dolor$ -= btn4.value;
        autoclick += 100;
        btn4.value *= 1.07;
    };

    dolorText$.innerText =`${Math.floor(dolor$)}$`;
    indicatorAutoclickSecText.innerText = autoclick;
    btn4.innerText = Math.floor(btn4.value);
});

btn5.addEventListener('click', BuyAutoButton3 = () =>{
    if(dolor$ >= btn5.value){
        dolor$ -= btn5.value;
        autoclick += 1500;
        btn5.value *= 1.07;
    };

    dolorText$.innerText =`${Math.floor(dolor$)}$`;
    indicatorAutoclickSecText.innerText = autoclick;
    btn5.innerText = Math.floor(btn5.value);
});


const update = () =>{
    dolor$ += autoclick;
    dolorText$.innerText =`${Math.floor(dolor$)}$`;
    setTimeout(update, 1000);
}

update();

//if formul
    //dolor$ === 100 ? btn1.open : btn2.style.none  

//img return 

