
var player = {
  health: 100,
  name: 'Jerry',
  hits: 0,
  items: []
}

var items = {
  shame: {
    name: 'Shame',
    modifier: 2,
    description: 'shame'
  },
  mock: {
    name: 'mock',
    modifier: 5,
    description: 'like shame but meaner'
  },
  sympathy: {
    name: 'sympathy',
    modifier: -5,
    description: 'Jerry\'s only defense'
  }
}

function damage(hitNum) {
  player.health -= hitNum + addMods();
  player.hits += 1;
  update();
}

function giveItem(item) {
  player.items.push(items[item].modifier)
}

function addMods() {
  let currentMods = 0;
  for (let i = 0; i < player.items.length; i++) {
    currentMods += player.items[i];
  }
  return currentMods;
}



function update() {
  document.getElementById('health').innerText = player.health.toString();
  document.getElementById('hits').innerText = player.hits.toString();
  document.getElementById('name').innerText = player.name;
}

update()

