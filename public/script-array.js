var k1 = document.getElementById('a1');
var k2 = document.getElementById('a2');
var k3 = document.getElementById('a3');
var k4 = document.getElementById('a4');
var k5 = document.getElementById('a5');
var k6 = document.getElementById('a6');
var k7 = document.getElementById('a7');
var k8 = document.getElementById('a8');
var k9 = document.getElementById('a9');
var k10 = document.getElementById('a10');
var k11 = document.getElementById('a11');
var k12 = document.getElementById('a12');
var k13 = document.getElementById('a13');



const pic = '/pic';
function work(x) {
    var s = x.split(' ').join('-'); 
    var sr = '/Array/'+s+pic;
    $('#main')
    .append('<div class="heading"></div>')
    .append('<div class="content"></content>')
    .append('<div class="output">Output</div>')
    .append('<img class="img" id="img" alt="No image Found" src="" >')
    $('.heading')
    .append('<p id="head" class="h-text"></p>')
    $('.content')
    .append('<pre id="content" class="content-text" id="test" onmousedown="return false" onselectstart="return false"></pre>')
    $("#img").attr("src",sr);
    $('#head').text(x)
   /* fetch('http://localhost:4400/Linked-List/'+s+heading)
    .then( response => response.text() )
    .then( data => { head.innerText = data})*/
    fetch('/Array/'+s)
    .then( response => response.text() )
    .then( data => { content.innerText = data}) 
   
}
k1.addEventListener("click", function () {
    var x = String(k1.innerText);
    $('.box').remove();
    work(x);
});
k2.addEventListener("click", function () {
    var x = String(k2.innerText);
    $('.box').remove();
    work(x);
});
k3.addEventListener("click", function () {
    var x = String(k3.innerText);
    $('.box').remove();
    work(x);
});
k4.addEventListener("click", function () {
    var x = String(k4.innerText);
    $('.box').remove();
    work(x);
});
k5.addEventListener("click", function () {
    var x = String(k5.innerText);
    $('.box').remove();
    work(x);
});
k6.addEventListener("click", function () {
    var x = String(k6.innerText);
    $('.box').remove();
    work(x);
});
k7.addEventListener("click", function () {
    var x = String(k7.innerText);
    $('.box').remove();
    work(x);
});
k8.addEventListener("click", function () {
    var x = String(k8.innerText);
    $('.box').remove();
    work(x);
});
k9.addEventListener("click", function () {
    var x = String(k9.innerText);
    $('.box').remove();
    work(x);
});
k10.addEventListener("click", function () {
    var x = String(k10.innerText);
    $('.box').remove();
    work(x);
});
k11.addEventListener("click", function () {
    var x = String(k11.innerText);
    $('.box').remove();
    work(x);
});
k12.addEventListener("click", function () {
    var x = String(k12.innerText);
    $('.box').remove();
    work(x);
});
k13.addEventListener("click", function () {
    var x = String(k13.innerText);
    $('.box').remove();
    work(x);
});



