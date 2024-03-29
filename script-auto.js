//  Создаем перемениые
let dolor$ = 100000; //Изначально у нас есть 0 манет 
let autoclick = 0; //Изначально у нас есть 0 автокликов  
let click = 1;  //Изначально у нас есть всего 1 клик 
const thresholds = [
    { threshold: 1e15, prefix: 'P' },
    { threshold: 1e12, prefix: 'T' },
    { threshold: 1e9, prefix: 'G' },
    { threshold: 1e6, prefix: 'M' },
    { threshold: 1e3, prefix: 'K' }
];


// =======================================================
//Создаем переменные в которых укажем поиск по селектору DOM

const dolor$Text = document.querySelector(".display-indicator"); // Показатель дохода в виде текста
const autoText = document.querySelector('.indicator-autoclick-sec'); // Показатель афто-дохода в виде текста 
const donutClick = document.querySelector('.clicker-button');  //Самый главная кнопка нашего Кликера
const buttonShops = document.querySelectorAll(".autoclick-sec"); // Cама кнопка при взаимодействии которой будет менятся все
const buttonShopsClick = document.querySelector(".click-sec"); // Самый первая кнопка которая нам дает 20% к клику
const buttonShopsClickText = document.querySelector(".dolor-text-click"); 


// =======================================================
//Создаем Функцию 


const updateDolorWithPrefix = (value) => {
    for (const threshold of thresholds) {
        if (value >= threshold.threshold) {
            const prefixedValue = Math.floor(value / threshold.threshold);
            dolor$Text.innerText(`${prefixedValue}${threshold.prefix}`);
            return;
        }
    }
    dolor$Text.innerText(Math.floor(value));
};


autoText.innerText = autoclick;



donutClick.addEventListener('click', clickers = () => {
    Math.floor(dolor$ += click);
    dolor$Text.innerText = Math.floor(dolor$);
});

buttonShopsClick.addEventListener('click', buttonShopsClickFunction = () =>{
    if (dolor$ >= buttonShopsClick.value) {
        dolor$ -= buttonShopsClick.value;
        click += 1;
        buttonShopsClick.value *= 1.1;
    }
    buttonShopsClickText.innerText = Math.floor(buttonShopsClick.value)
    dolor$Text.innerText =  Math.floor(dolor$);
});


buttonShops.forEach((buttonShop) => {
    buttonShop.addEventListener('click',  buttonShopsFunction = () =>{
        if(dolor$ >= buttonShop.value){
            dolor$ -= buttonShop.value;
            autoclick += parseInt(buttonShop.querySelector('.autoclcik-value').value);
            //=============================
            buttonShop.value *= 1.1
        };
        dolor$Text.innerText =  Math.floor(dolor$);
        autoText.innerText = autoclick  
       buttonShop.querySelector(".dolor-text").innerText = Math.floor(buttonShop.value);

    });
});

const update = () =>{
    
    dolor$ += autoclick;
    dolor$Text.innerText =`${Math.floor(dolor$)}`;
    setTimeout(update, 1000);
}


update();