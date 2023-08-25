function fq175scLoad()
{
var canvas=document.getElementById("iq175scLoad"); // Получаем DOM-объект нашего "холста"
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
// xy 3 *
 case 2:
  ctx.beginPath();ctx.moveTo(530,210);ctx.lineTo(533,210);ctx.stroke();
  ctx.beginPath();ctx.lineTo(533,210);ctx.lineTo(533,213);ctx.stroke();
  ctx.beginPath();ctx.lineTo(533,213);ctx.lineTo(530,213);ctx.stroke();
  ctx.beginPath();ctx.lineTo(530,213);ctx.lineTo(530,210);ctx.stroke();
 break;
 case 3:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 6 *
 case 4:
  ctx.beginPath();ctx.moveTo(593,474);ctx.lineTo(599,474);ctx.stroke();
  ctx.beginPath();ctx.lineTo(599,474);ctx.lineTo(599,480);ctx.stroke();
  ctx.beginPath();ctx.lineTo(599,480);ctx.lineTo(593,480);ctx.stroke();
  ctx.beginPath();ctx.lineTo(593,480);ctx.lineTo(593,474);ctx.stroke();
 break;
 case 5:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 9 *
 case 6:
  ctx.beginPath();ctx.moveTo(521,210);ctx.lineTo(530,210);ctx.stroke();
  ctx.beginPath();ctx.lineTo(530,210);ctx.lineTo(530,219);ctx.stroke();
  ctx.beginPath();ctx.lineTo(530,219);ctx.lineTo(521,219);ctx.stroke();
  ctx.beginPath();ctx.lineTo(521,219);ctx.lineTo(521,210);ctx.stroke();
 break;
 case 7:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 12 *
 case 8:
  ctx.beginPath();ctx.moveTo(521,198);ctx.lineTo(533,198);ctx.stroke();
  ctx.beginPath();ctx.lineTo(533,198);ctx.lineTo(533,210);ctx.stroke();
  ctx.beginPath();ctx.lineTo(533,210);ctx.lineTo(521,210);ctx.stroke();
  ctx.beginPath();ctx.lineTo(521,210);ctx.lineTo(521,198);ctx.stroke();
 break;
 case 9:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 15 *
 case 10:
  ctx.beginPath();ctx.moveTo(533,198);ctx.lineTo(548,198);ctx.stroke();
  ctx.beginPath();ctx.lineTo(548,198);ctx.lineTo(548,213);ctx.stroke();
  ctx.beginPath();ctx.lineTo(548,213);ctx.lineTo(533,213);ctx.stroke();
  ctx.beginPath();ctx.lineTo(533,213);ctx.lineTo(533,198);ctx.stroke();
 break;
 case 11:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 24
 case 12:
  ctx.beginPath();ctx.moveTo(680,450);ctx.lineTo(704,450);ctx.stroke();
  ctx.beginPath();ctx.lineTo(704,450);ctx.lineTo(704,474);ctx.stroke();
  ctx.beginPath();ctx.lineTo(704,474);ctx.lineTo(680,474);ctx.stroke();
  ctx.beginPath();ctx.lineTo(680,474);ctx.lineTo(680,450);ctx.stroke();
 break;
 case 13:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 27
 case 14:
  ctx.beginPath();ctx.moveTo(521,171);ctx.lineTo(548,171);ctx.stroke();
  ctx.beginPath();ctx.moveTo(548,171);ctx.lineTo(548,198);ctx.stroke();
  ctx.beginPath();ctx.lineTo(548,198);ctx.lineTo(521,198);ctx.stroke();
  ctx.beginPath();ctx.lineTo(521,198);ctx.lineTo(521,171);ctx.stroke();
 break;
 case 15:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 42
 case 16:
  ctx.beginPath();ctx.moveTo(548,171);ctx.lineTo(590,171);ctx.stroke();
  ctx.beginPath();ctx.lineTo(590,171);ctx.lineTo(590,213);ctx.stroke();
  ctx.beginPath();ctx.lineTo(590,213);ctx.lineTo(548,213);ctx.stroke();
  ctx.beginPath();ctx.lineTo(548,213);ctx.lineTo(548,171);ctx.stroke();
 break;
 case 17:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 48
 case 18:
  ctx.beginPath();ctx.moveTo(473,171);ctx.lineTo(521,171);ctx.stroke();
  ctx.beginPath();ctx.lineTo(521,171);ctx.lineTo(521,219);ctx.stroke();
  ctx.beginPath();ctx.lineTo(521,219);ctx.lineTo(473,219);ctx.stroke();
  ctx.beginPath();ctx.lineTo(473,219);ctx.lineTo(473,171);ctx.stroke();
 break;
 case 19:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 54
 case 20:
  ctx.beginPath();ctx.moveTo(476,219);ctx.lineTo(530,219);ctx.stroke();
  ctx.beginPath();ctx.lineTo(530,219);ctx.lineTo(530,273);ctx.stroke();
  ctx.beginPath();ctx.lineTo(530,273);ctx.lineTo(476,273);ctx.stroke();
  ctx.beginPath();ctx.lineTo(476,273);ctx.lineTo(476,219);ctx.stroke();
 break;
 case 21:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 60
 case 22:
  ctx.beginPath();ctx.moveTo(530,213);ctx.lineTo(590,213);ctx.stroke();
  ctx.beginPath();ctx.lineTo(590,213);ctx.lineTo(590,273);ctx.stroke();
  ctx.beginPath();ctx.lineTo(590,273);ctx.lineTo(530,273);ctx.stroke();
  ctx.beginPath();ctx.lineTo(530,273);ctx.lineTo(530,213);ctx.stroke();
 break;
 case 23:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 87
 case 24:
  ctx.beginPath();ctx.moveTo(593,387);ctx.lineTo(680,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(680,387);ctx.lineTo(680,474);ctx.stroke();
  ctx.beginPath();ctx.lineTo(680,474);ctx.lineTo(593,474);ctx.stroke();
  ctx.beginPath();ctx.lineTo(593,474);ctx.lineTo(593,387);ctx.stroke();
 break;
 case 25:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 90
 case 26:
  ctx.beginPath();ctx.moveTo(590,297);ctx.lineTo(680,297);ctx.stroke();
  ctx.beginPath();ctx.lineTo(680,297);ctx.lineTo(680,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(680,387);ctx.lineTo(590,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(590,387);ctx.lineTo(590,297);ctx.stroke();
 break;
 case 27:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 93
 case 28:
  ctx.beginPath();ctx.moveTo(500,387);ctx.lineTo(593,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(593,387);ctx.lineTo(593,480);ctx.stroke();
  ctx.beginPath();ctx.lineTo(593,480);ctx.lineTo(500,480);ctx.stroke();
  ctx.beginPath();ctx.lineTo(500,480);ctx.lineTo(500,387);ctx.stroke();
 break;
 case 29:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 99
 case 30:
  ctx.beginPath();ctx.moveTo(500,480);ctx.lineTo(599,480);ctx.stroke();
  ctx.beginPath();ctx.lineTo(599,480);ctx.lineTo(599,579);ctx.stroke();
  ctx.beginPath();ctx.lineTo(599,579);ctx.lineTo(500,579);ctx.stroke();
  ctx.beginPath();ctx.lineTo(500,579);ctx.lineTo(500,480);ctx.stroke();
 break;
 case 31:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 105
 case 32:
  ctx.beginPath();ctx.moveTo(599,474);ctx.lineTo(704,474);ctx.stroke();
  ctx.beginPath();ctx.lineTo(704,474);ctx.lineTo(704,579);ctx.stroke();
  ctx.beginPath();ctx.lineTo(704,579);ctx.lineTo(599,579);ctx.stroke();
  ctx.beginPath();ctx.lineTo(599,579);ctx.lineTo(599,474);ctx.stroke();
 break;
 case 33:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 114
 case 34:
  ctx.beginPath();ctx.moveTo(476,273);ctx.lineTo(590,273);ctx.stroke();
  ctx.beginPath();ctx.lineTo(590,273);ctx.lineTo(590,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(590,387);ctx.lineTo(476,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(476,387);ctx.lineTo(476,273);ctx.stroke();
 break;
 case 35:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 117
 case 36:
  ctx.beginPath();ctx.moveTo(473,54);ctx.lineTo(590,54);ctx.stroke();
  ctx.beginPath();ctx.lineTo(590,54);ctx.lineTo(590,171);ctx.stroke();
  ctx.beginPath();ctx.lineTo(590,171);ctx.lineTo(473,171);ctx.stroke();
  ctx.beginPath();ctx.lineTo(473,171);ctx.lineTo(473,54);ctx.stroke();
break;
 case 37:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 129
 case 38:
  ctx.beginPath();ctx.moveTo(704,450);ctx.lineTo(833,450);ctx.stroke();
  ctx.beginPath();ctx.lineTo(833,450);ctx.lineTo(833,579);ctx.stroke();
  ctx.beginPath();ctx.lineTo(833,579);ctx.lineTo(704,579);ctx.stroke();
  ctx.beginPath();ctx.lineTo(704,579);ctx.lineTo(704,450);ctx.stroke();
 break;
 case 39:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 153
 case 40:
  ctx.beginPath();ctx.moveTo(680,297);ctx.lineTo(833,297);ctx.stroke();
  ctx.beginPath();ctx.lineTo(833,297);ctx.lineTo(833,450);ctx.stroke();
  ctx.beginPath();ctx.lineTo(833,450);ctx.lineTo(680,450);ctx.stroke();
  ctx.beginPath();ctx.lineTo(680,450);ctx.lineTo(680,297);ctx.stroke();
 break;
 case 41:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 165 ***
 case 42:
  ctx.beginPath();ctx.moveTo(308,54);ctx.lineTo(473,54);ctx.stroke();
  ctx.beginPath();ctx.lineTo(473,54);ctx.lineTo(473,219);ctx.stroke();
  ctx.beginPath();ctx.lineTo(473,219);ctx.lineTo(308,219);ctx.stroke();
  ctx.beginPath();ctx.lineTo(308,219);ctx.lineTo(308,54);ctx.stroke();
 break;
 case 43:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 168
 case 44:
  ctx.beginPath();ctx.moveTo(308,219);ctx.lineTo(476,219);ctx.stroke();
  ctx.beginPath();ctx.lineTo(476,219);ctx.lineTo(476,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(476,387);ctx.lineTo(308,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(308,387);ctx.lineTo(308,219);ctx.stroke();
 break;
 case 45:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 192
 case 46:
  ctx.beginPath();ctx.moveTo(308,387);ctx.lineTo(500,387);ctx.stroke();
  ctx.beginPath();ctx.lineTo(500,387);ctx.lineTo(500,579);ctx.stroke();
  ctx.beginPath();ctx.lineTo(500,579);ctx.lineTo(308,579);ctx.stroke();
  ctx.beginPath();ctx.lineTo(308,579);ctx.lineTo(308,387);ctx.stroke();
 break;
 case 47:ctx.clearRect(0,0, canvas.width, canvas.height);break;
// xy 243
 case 48:
  ctx.beginPath();ctx.moveTo(590,54);ctx.lineTo(833,54);ctx.stroke();
  ctx.beginPath();ctx.moveTo(833,54);ctx.lineTo(833,297);ctx.stroke();
  ctx.beginPath();ctx.moveTo(833,297);ctx.lineTo(590,297);ctx.stroke();
  ctx.beginPath();ctx.moveTo(590,297);ctx.lineTo(590,54);ctx.stroke();
 break;
 case 49:ctx.clearRect(0,0, canvas.width, canvas.height);break;
 case 50:
  ctx.beginPath();ctx.moveTo(308,54);ctx.lineTo(833,54);ctx.stroke();
  ctx.beginPath();ctx.moveTo(833,54);ctx.lineTo(833,579);ctx.stroke();
  ctx.beginPath();ctx.moveTo(833,579);ctx.lineTo(308,579);ctx.stroke();
  ctx.beginPath();ctx.moveTo(308,579);ctx.lineTo(308,54);ctx.stroke();
 break;
 default:
  ctx.clearRect(0,0, canvas.width, canvas.height);
}
}
// Функция перерисовки канвас
setInterval(fq175scLoad,1000);
