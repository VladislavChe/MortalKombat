// Task #0
const $arena1 = document.querySelector('.arena1');

const player1 = {
  name: 'Subzero',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['clone', 'freezing'],
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

const player2 = {
  name: 'Scorpion',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['harpoon', 'fire'],
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

// Task #1
function createPlayer(classname, obj) {
  // Create elements
  const $player = document.createElement('div');
  const $progressbar = document.createElement('div');
  const $character = document.createElement('div');
  const $life = document.createElement('div');
  const $name = document.createElement('div');
  const $img = document.createElement('img');

  // add attributes
  $player.classList.add(classname);
  $progressbar.classList.add('progressbar');
  $character.classList.add('character');

  $life.classList.add('life');
  $life.style.width = obj.hp + '%';

  $name.classList.add('name');
  $name.innerText = obj.name;

  $img.classList.add('img');
  $img.src = obj.img;

  // Create markup
  $player.appendChild($progressbar);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $player.appendChild($character);
  $character.appendChild($img);

  $arena1.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
