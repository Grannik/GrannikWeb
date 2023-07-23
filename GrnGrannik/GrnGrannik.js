//
function fneocities(){window.open('https://neocities.org/','_blank');}
function fneocitiesGrn(){window.open('https://grannik.neocities.org/','_blank');}
//
function fnetlify(){window.open('https://app.netlify.com/','_blank');}
function fnetlifyGrn(){window.open('https://whimsical-mandazi-f57844.netlify.app/','_blank');}
//
function fgithub(){window.open('https://github.com','_blank');}
function fgithubGrn(){window.open('https://grannik.github.io/GrannikWeb.github.io/','_blank');}
// GaryYuriTabach video translations
function fGaryTabach(){window.open('GrnGaryTabach.html','_blank');}
// Кратко обо мне
function fGrnAboutMyRu(){window.open('GrnAboutMyRu.html','_blank');}
// Елена Васильева
function fElenaVasiljeva(){window.open('GrnElenaVasiljeva.html','_blank');}
// ОРГАНИЗАЦИЯ
function fsolidarizm(){window.open('http://solidarizm.ru/','_blank');}
// --------------------------------------------------------- часы ---------------------------------------------------//
function clock() {
var d = new Date();
var month_num = d.getMonth()
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
//month=new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");
month=new Array("January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December");
if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;
date_time = "Today: " + day + " " + month[month_num] + " "+ d.getFullYear() +" year | Current time: "+ hours + ":" + minutes + ":" + seconds +
 " | GRANNIK | Zhdanov Oleg | Linux OS ";
if (document.layers) {
 document.layers.docTime.document.write(date_time);
 document.layers.docTime.document.close();
}
else document.getElementById("docTime").innerHTML = date_time;
 setTimeout("clock()", 1000);
}
