const canvas = document.getElementById("cursor");
const ctx = canvas.getContext("2d");

let size = 7;
let currentSize = size;
let targetSize = size;

let animationStartTime = null;
let animationDuration = 400;
let animating = false;

let mouseMoved = false;

const pointer = {
  x: 0.5 * window.innerWidth,
  y: 0.5 * window.innerHeight,
};
const params = {
  pointsNumber: 7,
  widthFactor: 0.3,
  mouseThreshold: 1,
  spring: 0.4,
  friction: 0.47,
};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
  trail[i] = {
    x: pointer.x,
    y: pointer.y,
    dx: 0,
    dy: 0,
  };
}

window.addEventListener("click", (e) => {
  updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", (e) => {
  mouseMoved = true;
  updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", (e) => {
  mouseMoved = true;
  updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
  pointer.x = eX;
  pointer.y = eY;
}

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);
ctx.strokeStyle = "white";

function update(t) {
  if (!mouseMoved) {
    pointer.x =
      (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
      window.innerWidth;
    pointer.y =
      (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
      window.innerHeight;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  trail.forEach((p, pIdx) => {
    const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
    const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
    p.dx += (prev.x - p.x) * spring;
    p.dy += (prev.y - p.y) * spring;
    p.dx *= params.friction;
    p.dy *= params.friction;
    p.x += p.dx;
    p.y += p.dy;
  });

  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(trail[0].x, trail[0].y);

  for (let i = 1; i < trail.length - 1; i++) {
    const xc = 0.5 * (trail[i].x + trail[i + 1].x);
    const yc = 0.5 * (trail[i].y + trail[i + 1].y);
    ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
    ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
    ctx.stroke();
  }
  ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = 2;

  if (animating) {
    let elapsedTime = t - animationStartTime;
    if (elapsedTime < animationDuration) {
      let progress = elapsedTime / animationDuration;
      let easedProgress = easeInOutQuint(progress);
      currentSize = size + (targetSize - size) * easedProgress;
    } else {
      animating = false;
      size = targetSize;
      currentSize = targetSize;
    }
  }

  ctx.arc(pointer.x, pointer.y, currentSize, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

  window.requestAnimationFrame(update);
}

function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

const hoverElements = document.querySelectorAll("[hover-size]");

hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", increaseSize);
  element.addEventListener("mouseleave", resetSize);
});

function increaseSize(e) {
  targetSize = parseInt(e.target.getAttribute("hover-size"));
  console.log(e.target.getAttribute("hover-text"));
  startAnimation();
}

function resetSize() {
  targetSize = 7;
  startAnimation();
}

function startAnimation() {
  size = currentSize;
  animationStartTime = performance.now();
  animating = true;
}

function easeInOutQuint(x) {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

const blocks = document.querySelectorAll(".block");

console.log(blocks);
function transition() {
  blocks.forEach((block) => {
    block.classList.add("appear");
    setTimeout(() => {
      // block.classList.add("to-right");
      block.classList.remove("appear");
    }, 1500);
  });
}
