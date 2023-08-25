// --------------------------------- Скрипт канваса со знаками -----------------------------------------------
 function signs()
{
 var canvas = document.getElementById('signs'); // получаем объект канваса
 var ctx = canvas.getContext('2d');             // у него есть свойство - контекст рисования
 var width=canvas.width,height=canvas.height;   //Размеры "холста" это нужно, чтобы круги выстраивались
// ---  установим стили рисунка -----------------------------------------------------------------------
 ctx.shadowColor = "Coral"; // Цвет тени
 ctx.shadowOffsetX = 5;
 ctx.shadowOffsetY = 5;
 ctx.shadowBlur = 5;
 ctx.strokeStyle = 'DarkCyan'; // Цвет линии
 ctx.fillStyle = "Teal";       // Цвет заполненной плоскости
// Удачный вариант круга по центру 198 - - - - - - - - -
const X = canvas.width / 2; const Y = canvas.height / 2;
//const radius = 198;
ctx.lineWidth = 1;           // установим толщину линии:
// --- Круг 198 --------------------------
ctx.beginPath();
ctx.arc(X, Y, 198, 0, 2 * Math.PI, false);
ctx.stroke();
// --- Круг 208 --------------------------
ctx.beginPath();
ctx.arc(X, Y, 208, 0, 2 * Math.PI, false);
ctx.stroke();
//---- Круг 233 --------------------------
ctx.beginPath();
ctx.arc(X, Y, 233, 0, 2 * Math.PI, false);
ctx.stroke();
//---- Круг 303 --------------------------
ctx.beginPath();
ctx.arc(X, Y, 303, 0, 2 * Math.PI, false);
ctx.stroke();
//Рисует 12 кружков, соответствующих часам
for(var i=0;i<=Math.PI*2;i+=Math.PI*2/12) //Math.PI*2 - полный круг часов,Math.PI*2/12 - это 1/12 полного круга часов
{
ctx.beginPath();
ctx.arc(width/2+220*Math.cos(i),          // 2 center полного круга кружков,220 shirina полного круга кружков
height/2+220*Math.sin(i),                 // 2 center полного круга кружков,220  visota полного круга кружков
13,0,2*Math.PI);                          //13 radius кружков,0 uglovoe sehenie кружков,2 vopros
ctx.fill();
ctx.closePath();
}
//Рисует 30 кружков, соответствующих часам
for(var i=0;i<=Math.PI*2;i+=Math.PI*2/60) //Math.PI*2 - полный круг часов,Math.PI*2/12 - это 1/12 полного круга часов
{
ctx.beginPath();
ctx.arc(width/2+203*Math.cos(i),          //2 center полного круга кружков,220 shirina полного круга кружков
height/2+203*Math.sin(i),                 //2 center полного круга кружков,220  visota полного круга кружков
5,0,2*Math.PI);                           //13 radius кружков,0 uglovoe sehenie кружков,2 vopros
ctx.fill();
ctx.closePath();
}
// --- Рисует 12 кругов для символов ---
for(var i=0;i<=Math.PI*2;i+=Math.PI*2/12) //Math.PI*2 - полный круг часов,Math.PI*2/12 - это 1/12 полного круга часов
{
ctx.beginPath();
ctx.arc(width/2+268*Math.cos(i),          // 2 center полного круга кружков,220 shirina полного круга кружков
height/2+268*Math.sin(i),                 // 2 center полного круга кружков,220  visota полного круга кружков
34,0,2*Math.PI);                          //13 radius кружков,0 uglovoe sehenie кружков,2 vopros
ctx.stroke();
ctx.closePath();
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
// --- 1 --- Вертикальная линия единица ---------------------------------------------------------------------------------------------------------
ctx.beginPath();ctx.moveTo(705,50);ctx.lineTo(705,85);ctx.closePath();ctx.stroke();
// --- 2 --- Вертикальная линия двойка ----------------------------------------------------------------------------------------------------------
ctx.beginPath();ctx.moveTo(802,149);ctx.lineTo(802,217);ctx.closePath();ctx.stroke();
// --- 3 --- Треугольник ------------------------------------------------------------------------------------------------------------------------
        for (var i = 0; i < 3; i++) {
        var center_x = 839;
        var center_y = 318;
        var radius = 34;
        var angle = -i * 120 * Math.PI / 180 + Math.PI / 2;
        var x1 = center_x + radius * Math.cos(angle);
        var y1 = center_y - radius * Math.sin(angle);
        var next_i = (i + 1) % 3;
        var next_angle = -next_i * 120 * Math.PI / 180 + Math.PI / 2;
        var x2 = center_x + radius * Math.cos(next_angle);
        var y2 = center_y - radius * Math.sin(next_angle);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();}
// --- 4 --- Kвадрат ----------------------------------------------------------------------------------------------------------------------------
for (var i = 0; i < 4; i++) {
var center_x = 803; var center_y = 451; var radius = 34;
    var angle = -i * 90 * Math.PI / 180 + Math.PI / 4;
    var x1 = center_x + radius * Math.cos(angle);
    var y1 = center_y - radius * Math.sin(angle);
    var next_i = (i + 1) % 4;
    var next_angle = -next_i * 90 * Math.PI / 180 + Math.PI / 4;
    var x2 = center_x + radius * Math.cos(next_angle);
    var y2 = center_y - radius * Math.sin(next_angle);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();}
// --- 5 --- Пятиконечная звезда ----------------------------------------------------------------------------------------------------------------
for (var i = 0; i < 5; i++) {
     var center_x = 705; var center_y = 550; var radius = 34;
     var angle = -i * 144 * Math.PI / 180 + Math.PI / 2;
     var x1 = center_x + radius * Math.cos(angle);
     var y1 = center_y - radius * Math.sin(angle);
     var next_i = (i + 1) % 5;
     var next_angle = -next_i * 144 * Math.PI / 180 + Math.PI / 2;
     var x2 = center_x + radius * Math.cos(next_angle);
     var y2 = center_y - radius * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// --- Рисование линии 6-й час --- Шестиконечная звезда мозаика ----------------------------------------------------
// Рисование линии 6-й час (часть 1)
for (var i = 0; i < 3; i++) {
var center_x = 571;var center_y = 584;var radius = 34;
    var angle = -i * 120 * Math.PI / 180 + Math.PI / 2;
    var x1 = center_x + radius * Math.cos(angle);
    var y1 = center_y - radius * Math.sin(angle);
    var next_i = (i + 1) % 3;
    var next_angle = -next_i * 120 * Math.PI / 180 + Math.PI / 2;
    var x2 = center_x + radius * Math.cos(next_angle);
    var y2 = center_y - radius * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.lineWidth = 1;ctx.stroke();ctx.closePath();}
// Рисование линии 6-й час (часть 2)
for (var i = 0; i < 3; i++) {
var center_x = 571;var center_y = 584;var radius = 34;
    var angle = -i * 120 * Math.PI / 180 + Math.PI / 6;
    var x1 = center_x + radius * Math.cos(angle);
    var y1 = center_y - radius * Math.sin(angle);
    var next_i = (i + 1) % 3;
    var next_angle = -next_i * 120 * Math.PI / 180 + Math.PI / 6;
    var x2 = center_x + radius * Math.cos(next_angle);
    var y2 = center_y - radius * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// Рисование оставшихся линий снежинка
for (let i = 0; i < 6; i++) {
const center_x = 571;const center_y = 584;const radius = 20;
const rotationAngle = 30 * Math.PI / 180; // Поворот на 30 градусов
    const angle = -i * 60 * Math.PI / 180 + Math.PI / 6 + rotationAngle;
    const x1 = center_x + radius * Math.cos(angle);
    const y1 = center_y - radius * Math.sin(angle);
    const next_i = (i + 2) % 6;
    const next_angle = -next_i * 60 * Math.PI / 180 + Math.PI / 6 + rotationAngle;
    const x2 = center_x + radius * Math.cos(next_angle);
    const y2 = center_y - radius * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(center_x, center_y);ctx.lineTo(x1, y1);ctx.stroke();ctx.closePath();
ctx.beginPath();ctx.moveTo(center_x, center_y);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// --- 7 --- Семиконечная звезда ----------------------------------------------------------------------------------------------------------------
for (var i = 0; i < 7; i++) {
    var center_x = 427;
    var center_y = 550;
    var radius = 34;
    var angle = -i * (360 / 7) * Math.PI / 180 + Math.PI / 2;
    var x1 = center_x + radius * Math.cos(angle) + 10;
    var y1 = center_y - radius * Math.sin(angle) - 1;
    var next_i = (i + 3) % 7;
    var next_angle = -next_i * (360 / 7) * Math.PI / 180 + Math.PI / 2;
    var x2 = center_x + radius * Math.cos(next_angle) + 10;
    var y2 = center_y - radius * Math.sin(next_angle) - 1;
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// --- 8 --- Восьмиконечная звезда --------------------------------------------------------------------------------------------------------------
// --- var rds34 --- глобальная переменная для всех радиусов 34 -------------------------------------------
var rds34 = 34;
// Рисование линии 8-й час (часть 1)
for (var i = 0; i < 4; i++) {
    var angle = -i * 90 * Math.PI / 180 + Math.PI / 2;
//    var radius = 34;
    var center_x = 338;
    var center_y = 451;
    var x1 = center_x + rds34 * Math.cos(angle);
    var y1 = center_y - rds34 * Math.sin(angle);
    var next_i = (i + 1) % 4;
    var next_angle = -next_i * 90 * Math.PI / 180 + Math.PI / 2;
    var x2 = center_x + rds34 * Math.cos(next_angle);
    var y2 = center_y - rds34 * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// Рисование линии 8-й час (часть 2)
for (var i = 0; i < 4; i++) {
    var angle = -i * 90 * Math.PI / 180 + Math.PI / 4;
    var radius = 34;
    var center_x = 338;
    var center_y = 451;
    var x1 = center_x + radius * Math.cos(angle);
    var y1 = center_y - radius * Math.sin(angle);
    var next_i = (i + 1) % 4;
    var next_angle = -next_i * 90 * Math.PI / 180 + Math.PI / 4;
    var x2 = center_x + radius * Math.cos(next_angle);
    var y2 = center_y - radius * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// ---  9 --- Девятиконечная звезда -------------------------------------------------------------------------------------------------------------
// Рисование линии 9-й час (часть 1)
for (var i = 0; i < 3; i++) {
    var angle = -i * 120 * Math.PI / 180 + Math.PI / 2;
    var center_x = 303;
    var center_y = 317;
    var x1 = center_x + 34 * Math.cos(angle);
    var y1 = center_y - 34 * Math.sin(angle);
    var next_i = (i + 1) % 3;
    var next_angle = -next_i * 120 * Math.PI / 180 + Math.PI / 2;
    var x2 = center_x + 34 * Math.cos(next_angle);
    var y2 = center_y - 34 * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// Рисование линий 9-й час (часть 2 и 3)
for (var j = -1; j <= 1; j++) {
    for (var i = 0; i < 3; i++) {
        var angle = -i * 120 * Math.PI / 180 + Math.PI / 2 + 2 * Math.PI / 9 * j;
        var center_x = 303;
        var center_y = 317;
        var x1 = center_x + 34 * Math.cos(angle);
        var y1 = center_y - 34 * Math.sin(angle);
        var next_i = (i + 1) % 3;
        var next_angle = -next_i * 120 * Math.PI / 180 + Math.PI / 2 + 2 * Math.PI / 9 * j;
        var x2 = center_x + 34 * Math.cos(next_angle);
        var y2 = center_y - 34 * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();
    }
}
// --- 10 --- Деcятиконечная звезда -------------------------------------------------------------------------------------------------------------
// Рисование линии 10-й час (часть 1)
    var cntrx10 = 339;
    var cntry10 = 183;
for (var i = 0; i < 5; i++) {
    var angle = -i * 144 * Math.PI / 180 + Math.PI / 2;
    var x1 = cntrx10 + 34 * Math.cos(angle);
    var y1 = cntry10 - 34 * Math.sin(angle);
    var next_i = (i + 1) % 5;
    var next_angle = -next_i * 144 * Math.PI / 180 + Math.PI / 2;
    var x2 = cntrx10 + 34 * Math.cos(next_angle);
    var y2 = cntry10 - 34 * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// Рисование линии 10-й час (часть 2)
for (var i = 0; i < 5; i++) {
    var angle = -i * 144 * Math.PI / 180 + Math.PI / 2;
    var x1 = cntrx10 + 34 * Math.cos(angle);
    var y1 = cntry10 + 34 * Math.sin(angle); // Изменение знака
    var next_i = (i + 1) % 5;
    var next_angle = -next_i * 144 * Math.PI / 180 + Math.PI / 2;
    var x2 = cntrx10 + 34 * Math.cos(next_angle);
    var y2 = cntry10 + 34 * Math.sin(next_angle); // Изменение знака
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// --- 11 --- Рисование линии 11-й час Одинадцатиконечная звезда -----------------------------------------------------------------------------
for (var i = 0; i < 11; i++) {
    var angle_increment = 360 / 11;
    var center_x = 437;
    var center_y = 85;
    var angle = -i * angle_increment * Math.PI / 180 + Math.PI / 2;
    var x1 = center_x + 34 * Math.cos(angle);
    var y1 = center_y - 34 * Math.sin(angle);
    var next_i = (i + 4) % 11; // Смещение на 4 шага вперед для 11-конечной звезды
    var next_angle = -next_i * angle_increment * Math.PI / 180 + Math.PI / 2;
    var x2 = center_x + 34 * Math.cos(next_angle);
    var y2 = center_y - 34 * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// --- 12 --- Рисование линии 12-й час ------------------------------------------------------------------------------------------------------
for (var i = 0; i < 12; i++) {
const center_x = 571;const center_y = 49;const radius = 34;
    var angle = -i * 30 * Math.PI / 180 + Math.PI / 2 + 2 * Math.PI / 24;
    var x1 = center_x + radius * Math.cos(angle);
    var y1 = center_y - radius * Math.sin(angle);
    var next_i = (i + 1) % 12;
    var next_angle = -next_i * 30 * Math.PI / 180 + Math.PI / 2 + 2 * Math.PI / 24;
    var x2 = center_x + radius * Math.cos(next_angle);
    var y2 = center_y - radius * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// Уголки квадрато-треугольников
ctx.beginPath();ctx.moveTo(579,16);ctx.lineTo(579,35);ctx.lineTo(595,26);ctx.stroke();ctx.closePath();
ctx.beginPath();ctx.moveTo(604,58);ctx.lineTo(588,49);ctx.lineTo(604,40);ctx.stroke();ctx.closePath();
ctx.beginPath();ctx.moveTo(579,82);ctx.lineTo(579,63);ctx.lineTo(596,73);ctx.stroke();ctx.closePath();
ctx.beginPath();ctx.moveTo(547,73);ctx.lineTo(563,63);ctx.lineTo(563,82);ctx.stroke();ctx.closePath();
ctx.beginPath();ctx.moveTo(539,58);ctx.lineTo(554,49);ctx.lineTo(539,40);ctx.stroke();ctx.closePath();
ctx.beginPath();ctx.moveTo(563,16);ctx.lineTo(563,35);ctx.lineTo(547,26);ctx.stroke();ctx.closePath();
// поворот 6-угольной конструкции на 30 градусов
const rotationAngle = 30 * Math.PI / 180;
for (let i = 0; i < 6; i++) {
const center_x = 571;const center_y = 49;const radius = 18;
    const angle = -i * 60 * Math.PI / 180 + Math.PI / 6 + rotationAngle;
    const x1 = center_x + radius * Math.cos(angle);
    const y1 = center_y - radius * Math.sin(angle);
    const next_i = (i + 1) % 6;
    const next_angle = -next_i * 60 * Math.PI / 180 + Math.PI / 6 + rotationAngle;
    const x2 = center_x + radius * Math.cos(next_angle);
    const y2 = center_y - radius * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(x1, y1);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// Рисование оставшихся линий снежинка
for (let i = 0; i < 6; i++) {
const center_x = 571;const center_y = 49;const radius = 18;
    const angle = -i * 60 * Math.PI / 180 + Math.PI / 6 + rotationAngle;
    const x1 = center_x + radius * Math.cos(angle);
    const y1 = center_y - radius * Math.sin(angle);
    const next_i = (i + 2) % 6;
    const next_angle = -next_i * 60 * Math.PI / 180 + Math.PI / 6 + rotationAngle;
    const x2 = center_x + radius * Math.cos(next_angle);
    const y2 = center_y - radius * Math.sin(next_angle);
ctx.beginPath();ctx.moveTo(center_x, center_y);ctx.lineTo(x1, y1);ctx.stroke();ctx.closePath();
ctx.beginPath();ctx.moveTo(center_x, center_y);ctx.lineTo(x2, y2);ctx.stroke();ctx.closePath();}
// --------------------
}
