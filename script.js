let marketCap = 0;
const world = document.getElementById('world');
const evolveButton = document.getElementById('evolveButton');

evolveButton.addEventListener('click', () => {
  marketCap += 25000;
  evolveWorld(marketCap);
});

function evolveWorld(marketCap) {
  if (marketCap <= 25000) {
    world.style.backgroundColor = 'black';
    world.textContent = 'Nothing exists yet...';
  } else if (marketCap <= 50000) {
    world.style.backgroundColor = 'gray';
    world.textContent = 'A planet is formed!';
  } else if (marketCap <= 75000) {
    world.style.backgroundColor = 'yellow';
    world.textContent = 'A sun appears!';
  } else if (marketCap <= 100000) {
    world.style.backgroundColor = 'green';
    world.textContent = 'Grass and land emerge!';
  } else {
    world.textContent = 'The world is complete for now!';
  }
}
