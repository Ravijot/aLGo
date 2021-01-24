var k1 = document.getElementById('l1');
var k2 = document.getElementById('l2');
var k3 = document.getElementById('l3');
var k4 = document.getElementById('l4');
var k5 = document.getElementById('l5');
var k6 = document.getElementById('l6');
var k7 = document.getElementById('l7');
var k8 = document.getElementById('l8');
var k9 = document.getElementById('l9');
var k10 = document.getElementById('l10');
var k11 = document.getElementById('l11');
var k12 = document.getElementById('l12');
var k13 = document.getElementById('l13');
var k14 = document.getElementById('l14');
var k15 = document.getElementById('l15');
var k16 = document.getElementById('l16');
var k17 = document.getElementById('l17');
var k18 = document.getElementById('l18');
var k19 = document.getElementById('l19');
var k20 = document.getElementById('l20');
var k21 = document.getElementById('l21');
var k22 = document.getElementById('l22');
var k23 = document.getElementById('l23');
var k24 = document.getElementById('l24');
function goBack() {
    window.location.reload()
  }
const heading = '/heading';
const pic = '/pic';
function work(x) {
    var s = x.split(' ').join('-'); 
    var sr = '/Linked-List/'+s+pic;
    $('#main')
    .append('<button onclick="goBack()" class="back">Back</button>')
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
    fetch('/Linked-List/'+s)
    .then( response => response.text() )
    .then( data => { content.innerText = data}) 
   
}
$(window).on('popstate', function(event) {
    window.location.reload()
   });
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
k14.addEventListener("click", function () {
    var x = String(k14.innerText);
    $('.box').remove();
    work(x);
});
k15.addEventListener("click", function () {
    var x = String(k15.innerText);
    $('.box').remove();
    work(x);
});
k16.addEventListener("click", function () {
    var x = String(k16.innerText);
    $('.box').remove();
    work(x);
});
k17.addEventListener("click", function () {
    var x = String(k17.innerText);
    $('.box').remove();
    work(x);
});
k18.addEventListener("click", function () {
    var x = String(k18.innerText);
    $('.box').remove();
    work(x);
});
k19.addEventListener("click", function () {
    var x = String(k19.innerText);
    $('.box').remove();
    work(x);
});
k20.addEventListener("click", function () {
    var x = String(k20.innerText);
    $('.box').remove();
    work(x);
});
k21.addEventListener("click", function () {
    var x = String(k21.innerText);
    $('.box').remove();
    work(x);
});
k22.addEventListener("click", function () {
    var x = String(k22.innerText);
    $('.box').remove();
    work(x);
});
k23.addEventListener("click", function () {
    var x = String(k23.innerText);
    $('.box').remove();
    work(x);
});
k24.addEventListener("click", function () {
    var x = String(k24.innerText);
    $('.box').remove();
    work(x);
});

