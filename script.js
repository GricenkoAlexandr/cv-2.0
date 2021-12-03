
console.log('JS подключен!');

const btnl=document.querySelector('.lftbtn');
const btnr=document.querySelector('.rtbtn');

let avas=document.querySelectorAll('.avatar');
let point=0;
moveAva();

btnl.addEventListener('click', moveAva);

function moveAva() {
    for (let i=0; i<avas.length; i++) {
        avas[i].classList.add('hidden');
    }
    avas[point].classList.remove('hidden');
    if (point+1==avas.length) {
        point=0;
    } else {
        point++
    }
}

btnl.addEventListener('click', moveAva);