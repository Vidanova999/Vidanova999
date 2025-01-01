// Variables
let marketCap = 0;
const evolutionMessage = document.getElementById("evolutionMessage");
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Evolution stages
const stages = [
  { cap: 0, message: "Pitch blackness...", effect: drawStars },
  { cap: 25000, message: "Big Bang! A planet is created.", effect: bigBang },
  { cap: 50000, message: "A sun forms, casting light.", effect: createSun },
  { cap: 75000, message: "Grass and land emerge.", effect: addGrass },
  { cap: 100000, message: "Clouds appear in the sky.", effect: addClouds },
  { cap: 125000, message: "Water forms, adding oceans.", effect: addWater },
  { cap: 150000, message: "Trees and plants emerge.", effect: addTrees },
  { cap: 175000, message: "Life begins! Animals appear.", effect: addLife },
];

// Fetch market cap (simulated for demo)
async function fetchMarketCap() {
  // Simulate fetching market cap with random values
  marketCap += Math.floor(Math.random() * 10000) + 5000;
  evolveWorld(marketCap);
  setTimeout(fetchMarketCap, 5000); // Update every 5 seconds
}

// Evolve world based on market cap
function evolveWorld(marketCap) {
  const currentStage = stages.find((stage) => marketCap >= stage.cap);
  if (currentStage) {
    evolutionMessage.textContent = currentStage.message;
    currentStage.effect();
  }
}

// Effects
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}

function bigBang() {
  // Create Big Bang animation
  gsap.fromTo(
    "#backgroundCanvas",
    { opacity: 0 },
    { opacity: 1, duration: 2, background: "white" }
  );
}

// Define additional effects (sun, grass, water, etc.)

// Start the evolution
fetchMarketCap();
