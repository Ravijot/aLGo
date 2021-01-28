var k1 = document.getElementById('s1');
var k2 = document.getElementById('s2');
var k3 = document.getElementById('s3');
var k4 = document.getElementById('s4');
var k5 = document.getElementById('s5');
var k6 = document.getElementById('s6');
var k7 = document.getElementById('s7');
var k8 = document.getElementById('s8');
var k9 = document.getElementById('s9');
function goBack() {
    window.location.reload()
  }
const pic = '/pic';
function work(x) {
    var s = x.split(' ').join('-'); 
    var sr = '/String/'+s+pic;
    $('#main')
    .append('<button onclick="goBack()" class="back" onmousedown="return false" onselectstart="return false">Back</button>')
    .append('<div class="heading" onmousedown="return false" onselectstart="return false"></div>')
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
    fetch('/String/'+s)
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
