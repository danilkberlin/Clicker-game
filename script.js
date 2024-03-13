let dolor$ = 2220;
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
    }
    dolorText$.innerText =`${Math.floor(dolor$)}$`;
    indicatorClickText.innerText = click;
    indicatorAutoclickSecText.innerText = autoclick;
    btn1.innerText = Math.floor(btn1.value);
});

btn2.addEventListener('click', BuyAutoButton1 = () => {
    if (dolor$ >= btn2.value) {
        dolor$ -= btn1.value;
        autoclick += 1;
        btn2.value *= 1.1;
    }

    dolorText$.innerText =`${Math.floor(dolor$)}$`;
    indicatorAutoclickSecText.innerText = autoclick;
    btn2.innerText = Math.floor(btn2.value);
});

btn3.addEventListener('click', BuyAutoButton2 = () =>{})


const update = () =>{
    dolor$ += autoclick;
    dolorText$.innerText =`${Math.floor(dolor$)}$`;
    setTimeout(update, 1000);
}

update();