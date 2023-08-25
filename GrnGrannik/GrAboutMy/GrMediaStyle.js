// Style приписанные через JavaScript
function fGrnMediaStyle()
{
// Стили блока списка
document.getElementById("UlLiDiv").style.position="absolute";
document.getElementById("UlLiDiv").style.top="0%";
document.getElementById("UlLiDiv").style.left="0%"
document.getElementById("UlLiDiv").style.height="100%";
document.getElementById("UlLiDiv").style.width="50%";
document.getElementById("UlLiDiv").style.backgroundColor="Teal";
document.getElementById("UlLiDiv").style.overflow="scroll";
// Стили блока заглавия
document.getElementById("titleDiv").style.position="absolute";
document.getElementById("titleDiv").style.top="0%";
document.getElementById("titleDiv").style.left="50%"
document.getElementById("titleDiv").style.height="6%";
document.getElementById("titleDiv").style.width="48%";
document.getElementById("titleDiv").style.textAlign="center";
document.getElementById("titleDiv").style.fontSize='130%';
document.getElementById("titleDiv").style.fontWeight='bold';
document.getElementById("titleDiv").style.backgroundColor="Aquamarine";
document.getElementById("titleDiv").style.color="MidnightBlue";
document.getElementById("titleDiv").style.padding="1%";
// Стили блока вывода информации
document.getElementById("dbDiv").style.position="absolute";
document.getElementById("dbDiv").style.top="10%";
document.getElementById("dbDiv").style.left="50%"
document.getElementById("dbDiv").style.height="87%";
document.getElementById("dbDiv").style.width="47%";
document.getElementById("dbDiv").style.backgroundColor="Honeydew";
document.getElementById("dbDiv").style.paddingTop = "10px";
document.getElementById("dbDiv").style.paddingRight = "20px";
document.getElementById("dbDiv").style.paddingBottom = "10px";
document.getElementById("dbDiv").style.paddingLeft = "20px";
document.getElementById("dbDiv").style.overflow="scroll";
// Получаем первый элемент <ul> на странице
var ulElement = document.querySelector("ul");
ulElement.style.listStyle = 'none';
ulElement.style.cursor = 'pointer';
ulElement.style.left = '-10%';
// Получаем все элементы <li> на странице
var liElements = document.querySelectorAll("li");
liElements.forEach(function(li) {
    li.style.listStyle = 'none';
    li.style.backgroundColor = 'DarkGray';
    li.style.fontSize = '80%';
    li.style.paddingLeft = '1%';
    li.style.paddingBottom = '3px';
});
//
document.getElementById("GlobalUl").style.position = 'absolute';
document.getElementById("GlobalUl").style.top = '0%';
document.getElementById("GlobalUl").style.left = '-7%';
document.getElementById("GlobalUl").style.width = '99%';
// Иконки -----------------------
document.getElementById("liMoiStatti").style.listStyleImage = "url('GrIco/D.gif')";
document.getElementById("liAboutMe").style.listStyleImage = "url('GrIco/D.gif')";
document.getElementById("liComent").style.listStyleImage = "url('GrIco/D.gif')";
document.getElementById("liC").style.listStyleImage = "url('GrIco/D.gif')";
document.getElementById("liD").style.listStyleImage = "url('GrIco/D.gif')";
//
}
