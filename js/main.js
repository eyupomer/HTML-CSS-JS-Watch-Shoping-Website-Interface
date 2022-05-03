// store product info in object

var pic = document.querySelector('#main-shoe');
var blue = document.querySelector('.blue');
var purple = document.querySelector('.purple');
var cyan = document.querySelector('.cyan');
var pink = document.querySelector('.pink');
var green = document.querySelector('.green');
var red = document.querySelector('.red');
const colors = document.querySelectorAll('.color');

var info = [
    {
        src: "../images/products/blue.png"
    },
    {
        src: "../images/products/purple.png"
    },
    {
        src: "../images/products/cyan.png"
    },
    {
        src: "../images/products/pink.png"
    },
    {
        src: "../images/products/green.png"
    },
    {
        src: "../images/products/red.png"
    }
];

// change color

blue.addEventListener('click', function() {
    pic.src = info[0].src;
});
purple.addEventListener('click', function() {
    pic.src = info[1].src;
});
cyan.addEventListener('click', function() {
    pic.src = info[2].src;
});
pink.addEventListener('click', function() {
    pic.src = info[3].src;
});
green.addEventListener('click', function() {
    pic.src = info[4].src;
});
red.addEventListener('click', function() {
    pic.src = info[5].src;
});

// active color

function color() {
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color))