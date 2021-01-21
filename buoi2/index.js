//get

// by id
// const h1Element = document.getElementById('hello');
// console.log(h1Element);

// by class
// camel case
// const h1HiClass = document.getElementsByClassName('hi');
// h1HiClass[0].innerText = '1234';
// h1HiClass[1].innerText = '4321';
// h1HiClass[1].style.color = 'rgb(255, 0, 255)';
// h1HiClass[1].style.fontSize = '50pt';
// h1HiClass[0].innerHTML = `
//     <p>Hello h3</p>
//     <h3>Hello p</h3>
// `;

// `: string template
// let a = 0;
// console.log(`i have ${a} ${ a < 2 ? 'apple' : "apples"}`);

// arrow funtion
// function add(a,b) {
//     return a + b
// }
// const add = (a,b) => {
//     return a + b
// }
// const add = (a,b) => a + b;
// console.log(add(1,3));
// event listener
// let times = 0;
// h1Element.addEventListener('click', () => {
//     times++;
//     h1Element.innerText = `You click ${times} times`;
// }); 


// hw
// 2 button + and -
// max = 10 && min = 0
// đến 10 quay lại 0
// 0 - thì lên 10
// change color button: when click, counter number change to random color
// generate random rgb color by generate 3 number (0 - 255) (Math.random() * 255)
// Math.floor(Math.random() * 255)
// css đẹp 


let a = null;
a === null;
const cong = document.getElementById("cong");
const tru = document.getElementById("tru");
const khong = document.getElementById("khong");
const mau = document.getElementById("mau");
mau.addEventListener('click', () => {
    khong.style.color = "rgb(Math.random()*255 ,Math.random()*255 ,Math.random()*255)";
    console.log(`Random RGB ${khong}: ${rgb.random()}`);
});
cong.addEventListener('click', () => {
    a = Number(khong.innerText);
    a += 1;
    if (a > 10) {
        a = 0;
    }
    khong.innerText = a;
});
tru.addEventListener('click', () => {
    a = Number(khong.innerText);
    a -= 1;
    if (a < 0) {
        a = 10;
    }
    khong.innerText = a;
});

