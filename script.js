
console.log('JS подключен!');

const btnl=document.querySelector('.lftbtn');
let avas=document.querySelectorAll('.avatar');

btnl.addEventListener('click', moveAva);

function moveAva() {
    console.log('left');
    console.log(avas);
    avas.forEach(item=> {
        if (item.style.classList==='hidden') {
            console.log(item);
        }
    }
    )
}