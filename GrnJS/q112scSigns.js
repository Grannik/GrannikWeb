function fq112scSigns()
{
var c = document.getElementById("iq112scSigns");
var ctx = c.getContext("2d");
// --- установим стили рисунка -----------------------------
ctx.shadowColor = "Coral"; // Цвет тени
ctx.shadowOffsetX=2;
ctx.shadowOffsetY=3;
ctx.shadowBlur=5;
ctx.strokeStyle='DarkCyan'; // Цвет линии
ctx.fillStyle="Teal";       // Цвет заполненной плоскости
ctx.lineWidth=1;              // установим толщину линии:
// Координгата по x/y/Ширина/высота.
ctx.rect(291,37,250,250);
ctx.rect(641,387,210,210);
ctx.rect(456,412,185,185);
ctx.rect(541,37,175,175);
ctx.rect(291,432,165,165);
ctx.rect(291,287,145,145);
ctx.rect(716,37,135,135);
ctx.rect(436,287,125,125);
ctx.rect(731,267,120,120);
ctx.rect(756,172,95,95);
ctx.rect(641,297,90,90);
ctx.rect(616,212,85,85);
ctx.rect(561,332,80,80);
ctx.rect(541,212,75,75);
ctx.rect(701,212,55,55);
ctx.rect(561,287,45,45);
ctx.rect(716,172,40,40);
ctx.rect(606,297,35,35);
ctx.rect(701,267,30,30);
ctx.rect(436,412,20,20);
ctx.rect(606,287,10,10);
ctx.stroke();
}
