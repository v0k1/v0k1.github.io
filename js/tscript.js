var doc = document.getElementById("test");
  doc.style.backgroundColor = "Yellow";
  doc.style.color = "Red";
  doc.style.fontSize = "30px";

/* Colorchanger by ?
function time(){
    var today = new Date();
    var h = today.getHours()
  if (h>12) {h= h- "12"} ;
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clocky').innerHTML = h + ":" + m + ":" + s;
  var r = parseInt(s) * 1;
  var g = parseInt(s) * 3;
  var b = parseInt(s) * 5;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  var t = setTimeout(time, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

time();
*/

/* SideBar from W3
function sb_open() {
  document.getElementById("main").style.marginLeft = "180px";
  document.getElementById("mySidebar").style.width = "180px";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function sb_close() {
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}
*/
