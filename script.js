
console.log('JS подключен!');

const btnl=document.querySelector('.lftbtn');
const btnr=document.querySelector('.rtbtn');
let avas=document.querySelectorAll('.avatar');
let point=0;

btnl.addEventListener('click', leftmove);
btnr.addEventListener('click', rightmove);

moveAva();

function moveAva() {
    for (let i=0; i<avas.length; i++) {
        avas[i].classList.add('hidden')
    }
    avas[point].classList.remove('hidden');
}

function leftmove() {
    if (point+1==avas.length) {
        point=0;
    } else {
        point++;
    }
    moveAva();
}

function rightmove() {
    if (point-1==-1) {
        point=avas.length-1;
    } else {
        point--;
    }
    moveAva();
}