var health = 100;
var name = 'Jerry';
var hits = 0;

function slap() {
  health -= 1;
  hits += 1;
  update();
}

function punch() {
  health -= 5;
  hits += 1;
  update();
}

function kick() {
  health -= 10;
  hits += 1;
  update();
}

function update() {
  document.getElementById('health').innerText = health.toString();
  document.getElementById('hits').innerText = hits.toString();
  document.getElementById('name').innerText = name;
}

update()

