function fq175scSigns()
{
document.title="Quadrat 175 canvas";
var c = document.getElementById("iq175scSigns");
var ctx = c.getContext("2d");
// --- установим стили рисунка -----------------------------
ctx.shadowColor="Coral"; // Цвет тени
ctx.shadowOffsetX=2;
ctx.shadowOffsetY=3;
ctx.shadowBlur=5;
ctx.strokeStyle='DarkCyan'; // Цвет линии
ctx.fillStyle="Teal";       // Цвет заполненной плоскости
ctx.lineWidth=1;           // установим толщину линии:
// Координгата x/y/Ширина/высота
ctx.rect(530,210,3,3);     /// 1
ctx.rect(593,474,6,6);     /// 2
ctx.rect(521,210,9,9);     /// 3
ctx.rect(521,198,12,12);   /// 4
ctx.rect(533,198,15,15);   /// 5
ctx.rect(680,450,24,24);   /// 8
ctx.rect(521,171,27,27);   /// 9
ctx.rect(548,171,42,42);   // 14
ctx.rect(473,171,48,48);   // 16
ctx.rect(476,219,54,54);   // 18
ctx.rect(530,213,60,60);   // 20
ctx.rect(593,387,87,87);   // 29
ctx.rect(590,297,90,90);   // 30
ctx.rect(500,387,93,93);   // 31
ctx.rect(500,480,99,99);   // 33
ctx.rect(599,474,105,105); // 35
ctx.rect(476,273,114,114); // 38
ctx.rect(473,54,117,117);  // 39
ctx.rect(704,450,129,129); // 43
ctx.rect(680,297,153,153); // 51
ctx.rect(308,54,165,165);  // 55
ctx.rect(308,219,168,168); // 56
ctx.rect(308,387,192,192); // 64
ctx.rect(590,54,243,243);  // 81
ctx.rect(308,54,525,525);  //175
ctx.stroke();
}
