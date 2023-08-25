
function BckCrc()
{
// Получаем элемент canvas по его id
const canvas = document.getElementById("fonCn");
const ctx = canvas.getContext("2d");

// Размеры и позиция круга
const circleRadius = 308;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Прозрачность круга (от 0.0 до 1.0)
const circleAlpha = 0.5;

// Функция для рисования полупрозрачного черного круга
function drawBlackCircle(x, y, radius, alpha) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.globalAlpha = alpha; // Устанавливаем прозрачность
    ctx.fill();
    ctx.globalAlpha = 1.0; // Возвращаем значение прозрачности обратно к непрозрачности
}

// Рисование полупрозрачного черного круга
drawBlackCircle(centerX, centerY, circleRadius, circleAlpha);

}
