function fq112scLoad()
{
var canvas=document.getElementById("iq112scLoad"); // Получаем DOM-объект нашего "холста"
var ctx=canvas.getContext("2d");             //Берём его контекст (с его помощью и будем рисовать)
var current_date = new Date();
var s = current_date.getSeconds();
let a = s;
// --- установим стили рисунка -----------------------------
ctx.shadowColor = "Coral"; // Цвет тени
ctx.shadowOffsetX=1;
ctx.shadowOffsetY=2;
ctx.shadowBlur=8;
ctx.strokeStyle = 'Coral'; // Цвет линии
ctx.lineWidth =3;

switch (a) {
 case 1:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 10
 case 2:
  ctx.beginPath();ctx.moveTo(606,287);ctx.lineTo(616,287);ctx.stroke();
  ctx.beginPath();ctx.lineTo(616,287);ctx.lineTo(616,297);ctx.stroke();
  ctx.beginPath();ctx.lineTo(616,297);ctx.lineTo(606,297);ctx.stroke();
  ctx.beginPath();ctx.lineTo(606,297);ctx.lineTo(606,287);ctx.stroke();
 break;
 case 3:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 20
 case 4:
  ctx.beginPath();ctx.moveTo(436,412);ctx.lineTo(456,412);ctx.stroke();
  ctx.beginPath();ctx.lineTo(456,412);ctx.lineTo(456,432);ctx.stroke();
  ctx.beginPath();ctx.lineTo(456,432);ctx.lineTo(436,432);ctx.stroke();
  ctx.beginPath();ctx.lineTo(436,432);ctx.lineTo(436,412);ctx.stroke();
 break;
 case 5:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 30
 case 6:
  ctx.beginPath();ctx.moveTo(701,267);ctx.lineTo(731,267);ctx.stroke();
  ctx.beginPath();ctx.lineTo(731,267);ctx.lineTo(731,297);ctx.stroke();
  ctx.beginPath();ctx.lineTo(731,297);ctx.lineTo(701,297);ctx.stroke();
  ctx.beginPath();ctx.lineTo(701,297);ctx.lineTo(701,267);ctx.stroke();
 break;
 case 7:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 35
 case 8:
  ctx.beginPath();ctx.moveTo(606,297);ctx.lineTo(641,297);ctx.stroke();
  ctx.beginPath();ctx.lineTo(641,297);ctx.lineTo(641,332);ctx.stroke();
  ctx.beginPath();ctx.lineTo(641,332);ctx.lineTo(606,332);ctx.stroke();
  ctx.beginPath();ctx.lineTo(606,332);ctx.lineTo(606,297);ctx.stroke();
 break;
 case 9:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 40
 case 10:
  ctx.beginPath();ctx.moveTo(716,172);ctx.lineTo(756,172);ctx.stroke();
  ctx.beginPath();ctx.lineTo(756,172);ctx.lineTo(756,212);ctx.stroke();
  ctx.beginPath();ctx.lineTo(756,212);ctx.lineTo(716,212);ctx.stroke();
  ctx.beginPath();ctx.lineTo(716,212);ctx.lineTo(716,172);ctx.stroke();
 break;
 case 11:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 45
 case 12:
  ctx.beginPath();ctx.moveTo(561,287);ctx.lineTo(606,287);ctx.stroke();
  ctx.beginPath();ctx.lineTo(606,287);ctx.lineTo(606,332);ctx.stroke();
  ctx.beginPath();ctx.lineTo(606,332);ctx.lineTo(561,332);ctx.stroke();
  ctx.beginPath();ctx.lineTo(561,332);ctx.lineTo(561,287);ctx.stroke();
 break;
 case 13:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 55
 case 14:
  ctx.beginPath();ctx.moveTo(701,212);ctx.lineTo(756,212);ctx.stroke();
  ctx.beginPath();ctx.moveTo(756,212);ctx.lineTo(756,267);ctx.stroke();
  ctx.beginPath();ctx.lineTo(756,267);ctx.lineTo(701,267);ctx.stroke();
  ctx.beginPath();ctx.lineTo(701,267);ctx.lineTo(701,212);ctx.stroke();
 break;
 case 15:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 75
 case 16:
  ctx.beginPath();ctx.moveTo(541,212);ctx.lineTo(616,212);ctx.stroke();
  ctx.beginPath();ctx.lineTo(616,212);ctx.lineTo(616,287);ctx.stroke();
  ctx.beginPath();ctx.lineTo(616,287);ctx.lineTo(541,287);ctx.stroke();
  ctx.beginPath();ctx.lineTo(541,287);ctx.lineTo(541,212);ctx.stroke();
 break;
 case 17:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 80
 case 18:
  ctx.beginPath();ctx.moveTo(561,332);ctx.lineTo(641,332);ctx.stroke();
  ctx.beginPath();ctx.lineTo(641,332);ctx.lineTo(641,412);ctx.stroke();
  ctx.beginPath();ctx.lineTo(641,412);ctx.lineTo(561,412);ctx.stroke();
  ctx.beginPath();ctx.lineTo(561,412);ctx.lineTo(561,332);ctx.stroke();
 break;
 case 19:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 85
 case 20:
  ctx.beginPath();ctx.moveTo(616,212);ctx.lineTo(701,212);ctx.stroke();
  ctx.beginPath();ctx.lineTo(701,212);ctx.lineTo(701,297);ctx.stroke();
  ctx.beginPath();ctx.lineTo(701,297);ctx.lineTo(616,297);ctx.stroke();
  ctx.beginPath();ctx.lineTo(616,297);ctx.lineTo(616,212);ctx.stroke();
 break;
 case 21:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 90
 case 22:
  ctx.beginPath();ctx.moveTo(641,297);ctx.lineTo(731,297);ctx.stroke();
  ctx.beginPath();ctx.lineTo(731,297);ctx.lineTo(731,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(731,387);ctx.lineTo(641,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(641,387);ctx.lineTo(641,297);ctx.stroke();
 break;
 case 23:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 95
 case 24:
  ctx.beginPath();ctx.moveTo(756,172);ctx.lineTo(851,172);ctx.stroke();
  ctx.beginPath();ctx.lineTo(851,172);ctx.lineTo(851,267);ctx.stroke();
  ctx.beginPath();ctx.lineTo(851,267);ctx.lineTo(756,267);ctx.stroke();
  ctx.beginPath();ctx.lineTo(756,267);ctx.lineTo(756,172);ctx.stroke();
 break;
 case 25:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 120
 case 26:
  ctx.beginPath();ctx.moveTo(731,267);ctx.lineTo(851,267);ctx.stroke();
  ctx.beginPath();ctx.lineTo(851,267);ctx.lineTo(851,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(851,387);ctx.lineTo(731,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(731,387);ctx.lineTo(731,267);ctx.stroke();
 break;
 case 27:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 125
 case 28:
  ctx.beginPath();ctx.moveTo(436,287);ctx.lineTo(561,287);ctx.stroke();
  ctx.beginPath();ctx.lineTo(561,287);ctx.lineTo(561,412);ctx.stroke();
  ctx.beginPath();ctx.lineTo(561,412);ctx.lineTo(436,412);ctx.stroke();
  ctx.beginPath();ctx.lineTo(436,412);ctx.lineTo(436,287);ctx.stroke();
 break;
 case 29:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 135
 case 30:
  ctx.beginPath();ctx.moveTo(716,37);ctx.lineTo(851,37);ctx.stroke();
  ctx.beginPath();ctx.lineTo(851,37);ctx.lineTo(851,172);ctx.stroke();
  ctx.beginPath();ctx.lineTo(851,172);ctx.lineTo(716,172);ctx.stroke();
  ctx.beginPath();ctx.lineTo(716,172);ctx.lineTo(716,37);ctx.stroke();
 break;
 case 31:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 145
 case 32:
  ctx.beginPath();ctx.moveTo(291,287);ctx.lineTo(436,287);ctx.stroke();
  ctx.beginPath();ctx.lineTo(436,287);ctx.lineTo(436,432);ctx.stroke();
  ctx.beginPath();ctx.lineTo(436,432);ctx.lineTo(291,432);ctx.stroke();
  ctx.beginPath();ctx.lineTo(291,432);ctx.lineTo(291,287);ctx.stroke();
 break;
 case 33:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 165
 case 34:
  ctx.beginPath();ctx.moveTo(291,432);ctx.lineTo(456,432);ctx.stroke();
  ctx.beginPath();ctx.lineTo(456,432);ctx.lineTo(456,597);ctx.stroke();
  ctx.beginPath();ctx.lineTo(456,597);ctx.lineTo(291,597);ctx.stroke();
  ctx.beginPath();ctx.lineTo(291,597);ctx.lineTo(291,432);ctx.stroke();
 break;
 case 35:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 175
 case 36:
  ctx.beginPath();ctx.moveTo(541,37);ctx.lineTo(716,37);ctx.stroke();
  ctx.beginPath();ctx.lineTo(716,37);ctx.lineTo(716,212);ctx.stroke();
  ctx.beginPath();ctx.lineTo(716,212);ctx.lineTo(541,212);ctx.stroke();
  ctx.beginPath();ctx.lineTo(541,212);ctx.lineTo(541,37);ctx.stroke();
break;
 case 37:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 185
 case 38:
  ctx.beginPath();ctx.moveTo(456,412);ctx.lineTo(641,412);ctx.stroke();
  ctx.beginPath();ctx.lineTo(641,412);ctx.lineTo(641,597);ctx.stroke();
  ctx.beginPath();ctx.lineTo(641,597);ctx.lineTo(456,597);ctx.stroke();
  ctx.beginPath();ctx.lineTo(456,597);ctx.lineTo(456,412);ctx.stroke();
 break;
 case 39:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 210
 case 40:
  ctx.beginPath();ctx.moveTo(641,387);ctx.lineTo(851,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(851,387);ctx.lineTo(851,597);ctx.stroke();
  ctx.beginPath();ctx.lineTo(851,597);ctx.lineTo(641,597);ctx.stroke();
  ctx.beginPath();ctx.lineTo(641,597);ctx.lineTo(641,387);ctx.stroke();
 break;
 case 41:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 250
 case 42:
  ctx.beginPath();ctx.moveTo(291,37);ctx.lineTo(541,37);ctx.stroke();
  ctx.beginPath();ctx.lineTo(541,37);ctx.lineTo(541,287);ctx.stroke();
  ctx.beginPath();ctx.lineTo(541,287);ctx.lineTo(291,287);ctx.stroke();
  ctx.beginPath();ctx.lineTo(291,287);ctx.lineTo(291,37);ctx.stroke();
 break;
 case 43:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 560
 case 44:
  ctx.beginPath();ctx.moveTo(291,37);ctx.lineTo(851,37);ctx.stroke();
  ctx.beginPath();ctx.lineTo(851,37);ctx.lineTo(851,597);ctx.stroke();
  ctx.beginPath();ctx.lineTo(851,597);ctx.lineTo(291,597);ctx.stroke();
  ctx.beginPath();ctx.lineTo(291,597);ctx.lineTo(291,37);ctx.stroke();
 break;
 default:
  ctx.clearRect(0,0, canvas.width, canvas.height);
}
}
// Функция перерисовки канвас
setInterval(fq112scLoad,1000);
