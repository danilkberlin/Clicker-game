let dolor$ = 0;
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
    dolor$ += click;
    dolorText$.innerText =`${dolor$}$`;
    indicatorClickText.innerText = click;
    indicatorAutoclickSecText.innerText = autoclick;
});

btn1.addEventListener('click', BuyOneButton = () => {
    if (dolor$ >= btn1.value) {
        dolor$ -= btn1.value;
        click += 1;
        dolor$ += click;  
        btn1.value *= 1.2;
    }
    dolorText$.innerText =`${dolor$}$`;
    indicatorClickText.innerText = click;
    indicatorAutoclickSecText.innerText = autoclick;
    btn1.innerText = Math.floor(btn1.value);
});