// Some random colors
const colors = ["#D64643", "#DD5050", "#CC4A50", " #B2434B", "#A43380", "#922F75",  "#8C993D", "#852C70", "#95B246", "#5379B2", "#567EBF", " #4C71A6", "#AF61A9", "#808736", "#4A6C9E"]; // Farverne på boldene
1
const numBalls = 32; // Nummeret af bolde
const balls = []; // opretter balls variabel

for (let i = 0; i < numBalls; i++) { // opretter et forloop og kører igennom den samme antal gange som numBalls er sat til 
  let ball = document.createElement("div"); // opretter div 
  ball.classList.add("ball"); // ligger ball klasse til den 
  ball.style.background = colors[Math.floor(Math.random() * colors.length)]; // giver bolden en tilfældig farve ud i for colors. 
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`; // giver en tilfældig position
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`; // giver en tilfældig position
  ball.style.transform = `scale(${Math.random()})`;1 // giver en tilfældig animation
  ball.style.width = `${Math.floor((Math.random() * 8) + 1)}em`; // Giver en tilfældig størrelse på bolden
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.getElementById('bg-balls').append(ball); // ligger ball div ind i sectionen bg-balls
}

// Keyframes
balls.forEach((el, i) => { //animation til bolden
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