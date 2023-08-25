//
function fneocities(){window.open('https://neocities.org/','_blank');}
function fneocitiesGrn(){window.open('https://grannik.neocities.org/','_blank');}
//
function fnetlify(){window.open('https://app.netlify.com/','_blank');}
function fnetlifyGrn(){window.open('https://spiffy-blini-85f722.netlify.app/','_blank');}
//
function fgithub(){window.open('https://github.com','_blank');}
function fgithubGrn(){window.open('https://grannik.github.io/GrannikWeb.github.io/','_blank');}
//
function fsurge(){window.open('https://surge.sh/','_blank');}
function fsurgeGrn(){window.open('http://rainy-wound.surge.sh/','_blank');}
// vercel
function fvercel(){window.open('https://vercel.com/','_blank');}
function fvercelGrn(){window.open('https://grannik-web-github-io.vercel.app/index.html','_blank');}
function fvercelGitLub(){window.open('https://grnwebgitlab.vercel.app/','_blank');}
//
function felectronjs(){window.open('https://www.electronjs.org/','_blank');}
//
function fnativefier(){window.open('https://github.com/nativefier/nativefier','_blank');}
//
// GaryYuriTabach video
function fGaryTabach(){window.open('GrnGrannik/GrGaryTabach/GrGaryTabach.html','_blank');}
// Кратко обо мне
function fGrnAboutMyRu(){window.open('GrnGrannik/GrAboutMy/GrAboutMy.html','_blank');}
// Елена Васильева
function fElenaVasiljeva(){window.open('GrnGrannik/GrElenaVasiljeva/GrElenaVasiljeva.html','_blank');}
//
function fBerezin(){window.open('https://pravozashitnik.com/','_blank');}
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
