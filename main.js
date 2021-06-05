const $arena1 = document.querySelector('.arena1');
const $randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Subzero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['clone', 'freezing'],
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

const player2 = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['harpoon', 'fire'],
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(obj) {
  // Create elements
  const $player = createElement('div', 'player' + obj.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  // add attributes
  $life.style.width = obj.hp + '%';
  $name.innerText = obj.name;
  $img.src = obj.img;

  // Create markup
  $player.appendChild($progressbar);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $player.appendChild($character);
  $character.appendChild($img);

  return $player;
}

function attack(player) {
  player.hp -= Math.ceil(Math.random() * 20);

  return player.hp;
}

function changeHp(players) {
  players[0].hp = attack(players[0]);
  players[1].hp = attack(players[1]);

  const $playerLife1 = document.querySelector(
    '.player' + players[0].player + ' .life'
  );
  const $playerLife2 = document.querySelector(
    '.player' + players[1].player + ' .life'
  );

  $playerLife1.style.width = players[0].hp + '%';
  $playerLife2.style.width = players[1].hp + '%';

  if (players[0].hp <= 0 && players[1].hp <= 0) {
    $playerLife1.style.width = 0 + '%';
    $playerLife2.style.width = 0 + '%';

    const $drawTitle = createElement('div', 'drawTitle');
    $drawTitle.innerText = 'draw';

    $arena1.appendChild($drawTitle);

    $randomButton.disabled = true;
  } else if (players[0].hp <= 0 && players[1].hp > 0) {
    $playerLife1.style.width = 0 + '%';

    $arena1.appendChild(playerWin(players[1].name));

    $randomButton.disabled = true;
  } else if (players[0].hp > 0 && players[1].hp <= 0) {
    $playerLife2.style.width = 0 + '%';

    $arena1.appendChild(playerWin(players[0].name));

    $randomButton.disabled = true;
  }
}

function playerLose(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' lose';

  return $loseTitle;
}

function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' wins';

  return $winTitle;
}

$randomButton.addEventListener('click', function () {
  changeHp([player1, player2]);
});

$arena1.appendChild(createPlayer(player1));
$arena1.appendChild(createPlayer(player2));
