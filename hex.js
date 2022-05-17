const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const search = document.getElementById('search');
const sorgu = document.querySelector('.sorgu');

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    sorgu.style.backgroundColor = hexColor;
});
search.addEventListener('click', function(){
    const sorguColor = sorgu.value;
    document.body.style.backgroundColor = sorguColor;
    color.textContent = sorguColor;
    sorgu.style.backgroundColor = sorguColor;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}