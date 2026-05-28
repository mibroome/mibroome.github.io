
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let angle = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Star
    ctx.beginPath();
    ctx.arc(350, 250, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();

    // Orbit
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.arc(350, 250, 150, 0, Math.PI * 2);
    ctx.stroke();

    // Planet
    const x = 350 + 150 * Math.cos(angle);
    const y = 250 + 150 * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'cyan';
    ctx.fill();

    angle += 0.01;

    requestAnimationFrame(draw);
}

draw();
