// Some random colors
const colors = ["#D64643", "#DD5050", "#CC4A50", " #B2434B", "#A43380", "#922F75",  "#8C993D", "#852C70", "#95B246", "#5379B2", "#567EBF", " #4C71A6", "#AF61A9", "#808736", "#4A6C9E"];
1
const numBalls = 32;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;1
  ball.style.width = `${Math.floor((Math.random() * 8) + 1)}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.getElementById('bg-balls').append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: 20000, // animation duration
      direction: "alternate", //animation direction
      fill: "both",
      iterations: Infinity,
      easing: "linear"
    }
  );
});