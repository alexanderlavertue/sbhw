var colors = ['#2aff12', '#eaff00', '#ff2f00'];
var button = document.getElementById('butt');
var text1 = document.querySelector("#text1")
var text2 = document.querySelector("#text2")
var text3 = document.querySelector("#text3")
var text4 = document.querySelector("#text4")
var text5 = document.querySelector("#text5")
var text6 = document.querySelector("#text6")
var text7 = document.querySelector("#text7")
var text8 = document.querySelector("#text8")
var text9 = document.querySelector("#text9")
var text10 = document.querySelector("#text10")
var text12 = document.querySelector("#text11")
button.onclick = function myfunctiontwo() {
    text1.style.color = colors[Math.floor(Math.random() * colors.length)];
    text2.style.color = colors[Math.floor(Math.random() * colors.length)];
    text3.style.color = colors[Math.floor(Math.random() * colors.length)];
    text4.style.color = colors[Math.floor(Math.random() * colors.length)];
    text5.style.color = colors[Math.floor(Math.random() * colors.length)];
    text6.style.color = colors[Math.floor(Math.random() * colors.length)];
    text7.style.color = colors[Math.floor(Math.random() * colors.length)];
    text8.style.color = colors[Math.floor(Math.random() * colors.length)];
    text9.style.color = colors[Math.floor(Math.random() * colors.length)];
    text10.style.color = colors[Math.floor(Math.random() * colors.length)];
    text11.style.color = colors[Math.floor(Math.random() * colors.length)];
};


