// --- *** Функция добавления .js файлов -------
function addScript(src)
{
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
}
addScript('GrAboutMeJs/AboutMeEn.js');
addScript('GrAboutMeJs/AboutMeRu.js');
addScript('GrAboutMeJs/AboutMeUa.js');
//
function fclearAboutMe()
{
document.getElementById('iAboutMeUa').style.backgroundColor="DarkGray";
document.getElementById('iAboutMeRu').style.backgroundColor="DarkGray";
document.getElementById('iAboutMeEn').style.backgroundColor="DarkGray";
}
// --- Исповедь предателя ----------------------------------------------------
// LiveJournal
function fIspovedPredatela()
{
fclearLatinQuotes()
document.getElementById('iIspovedPredatela').style.backgroundColor="Silver";
window.open('https://topwar.ru/85856-ispoved-predatelya-kak-v-ukraine-horonyat-russkiy-nacionalizm.html','_blank');
}
