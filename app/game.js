
var player = {
  health: 100,
  name: 'Morty',
  hits: 0,
  items: []
}

var opponent = {
  health: 100,
  name: 'Greaser Morty',
  hits: 0,
}

var items = {
  confidence: {
    name: 'confidence',
    modifier: 5,
    description: 'can\'t stop me now'
  },
  sarcasm: {
    name: 'sarcasm',
    modifier: 2,
    description: 'sassy'
  },
  strengthSyrum: {
    name: 'strengthSyrum',
    modifier: 7,
    description: 'Makes you stronger'
  }
}

function opponentAttack() {
  setTimeout(function () {
    player.health -= Math.floor(Math.random() * 15);
    opponent.hits += 1;
  }, 2000)
}

function damage(hitNum) {
  opponent.health -= hitNum + addMods();
  player.hits += 1;
  opponentAttack();
  update();
}

function giveItem(item) {
  if (player.items.length == 0) {
    player.items.push(items[item].modifier);
  } else {
    player.items.pop();
    player.items.push(items[item].modifier);
  }
}

function addMods() {
  let currentMods = 0;
  for (let i = 0; i < player.items.length; i++) {
    currentMods += player.items[i];
  }
  return currentMods;
}








function update() {
  document.getElementById('player-health').innerText = player.health.toString();
  document.getElementById('player-health').setAttribute('style', `width: ${player.health.toString()}%`)
  document.getElementById('opponent-health').innerText = opponent.health.toString();
  document.getElementById('opponent-health').setAttribute('style', `width: ${opponent.health.toString()}%`)
  document.getElementById('player-name').innerText = player.name;
  document.getElementById('opponent-name').innerText = opponent.name;
  document.getElementById('hits').innerText = player.hits.toString();
  document.getElementById('opponent-hits').innerText = opponent.hits.toString();

}

update()

