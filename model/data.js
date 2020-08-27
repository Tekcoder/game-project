class Map {
  constructor(mapSize) {
    this.mapSize = mapSize;
  }
  create() {
    for (let i = 0; i <= mapSize; i += 1) {
    mapContainer.append('<div class="box" data-index="' + i + '"></div>');
    let numTiles = $('.box').length;
    tiles.push(numTiles);
    }
}

obstacles(itemClass) {
  addComponents(itemClass)
}
}

  class Player {
    constructor(name, health, itemClass, player, weapon, power) {
      this.name = name;
      this.health = health;
      this.itemClass = itemClass;
      this.player = player;
      this.weapon = weapon;
      this.power = power;
  }

  add() {
    addComponents(this.itemClass, this.player);
  };
  
  setData() {
    $(".name-" + this.player).text(this.name);
    $("#life-" + this.player).text(this.health);
    $('<img src="images/weapons/strawberry-weapon.png">').appendTo(".weps-" + this.player);
    $(".weapons-" + this.player).text(this.power);
  };
    
    attack(exactPlayer) {
      if(playerDefend == 1) {
        exactPlayer.health -= (this.power/2);
          playerDefend = 0;

          } else {
            exactPlayer.health -= this.power;
          }
              $('#life-' + exactPlayer.player).text(exactPlayer.health);
              if(exactPlayer.health <= 0) {
                gameOverBoard();
          }
  }

  winner(exactPlayer) {
      if(exactPlayer.health <= 0) {
          $('#winner').text(this.name);
          $('#looser').text(exactPlayer.name);
      } else if (this.health <= 0) {
          $('#winner').text(exactPlayer.name);
          $('#looser').text(this.name);

      }
  }  
}
  
  let player1 = new Player("Mario", 100, "player1", 1, "wp-1", 10);

  let player2 = new Player("Pokemon", 100, "player2", 2, "wp-1", 10 );

class Weapon {
  constructor(type, value, itemClass) {
    this.type = type;
    this.value = value;
    this.itemClass = itemClass;
  }
  add() {
    addComponents(this.itemClass);
    }
}
let firstWeapon = new Weapon("firstWeapon", 10, "wp-1 weapon");
let secondWeapon = new Weapon("secondWeapon", 20, "wp-2 weapon");
let thirdWeapon = new Weapon("thirdWeapon", 30, "wp-3 weapon");
let fourthWeapon = new Weapon("fourthWeapon", 40, "wp-4 weapon");
let fifthWeapon = new Weapon("fourthWeapon", 50, "wp-5 weapon");

// declare variables for game's components
const mapSize = 99;
const obstacles = 5;
let possibleMoves = 3;
let activePlayer = 1;
let turn = 0;
let tiles = [];
let playerActive;
let player1Active = true;
let player2Active = false;
let move = true;
let attacked = false;
let hover = false;
let playerDefend = null;
const turnMessage = [
"Show us how powerful you are",
"You can defeat your opponent. Just believe",
"No retreat, No surrender ",
"Don't forget your ammunition",
"If you lose this battle, you won't be alive to have another fight",
"You have to be brave and not be complacent",
"Preparing for a combat and believing in your self is half victory"
]
const noTurnMessage = "Kindly wait for your turn";
const startButton = $("#start");
const mapContainer = $("#container");
const playerContainerDiv = $(".player-box");
const powerDiv1 = $(".weps-1");
const powerDiv2 = $(".weps-2");
const body = $("body");
const gameOverContainer =$('#gameover-display');
const attackBtn1 = $('.btn-attack-1');
const attackBtn2 = $('.btn-attack-2');
const defendBtn1 = $('.btn-defend-1');
const defendBtn2 = $('.btn-defend-2');

