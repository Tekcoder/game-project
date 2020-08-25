// map constructor function to create map tile board with obstacles
const Map = function(mapSize) {
    this.mapSize = mapSize;

    this.create  = function() {
        for (let i = 0; i <= mapSize; i += 1) {
        mapContainer.append('<div class="box" data-index="' + i + '"></div>');
        let numTiles = $('.box').length;
        tiles.push(numTiles);
        }
    }
    this.obstacles = function(itemClass) {
        addComponents(itemClass)
    }
}

// player construction function
const Player = function(
    name,
    health,
    itemClass,
    player,
    weapon,
    power,
    activePath
  ) {
    this.name = name;
    this.health = health;
    this.itemClass = itemClass;
    this.player = player;
    this.weapon = weapon;
    this.power = power;
    this.activePath = activePath;
  
    //add players to the map
    this.add = function() {
      addComponents(this.itemClass, this.player);
    };
    // set information about player on the boards;
    this.setData = function() {
      $(".name-" + this.player).text(this.name);
      $("#life-" + this.player).text(this.health);
      $('<img src="images/weapons/strawberry-weapon.png">').appendTo(".weps-" + this.player);
      $(".weapons-" + this.player).text(this.power);
    };
      //players fight logic
      this.attack = function(whichPlayer) {
        if(playerDefend == 1) {
            whichPlayer.health -= (this.power/2);
            playerDefend = 0;

            } else {
                whichPlayer.health -= this.power;
            }
                $('#life-' + whichPlayer.player).text(whichPlayer.health);
                if(whichPlayer.health <= 0) {
                    gameOverBoard();
            }
    }
    // check who is the winner and who lost the game and display the information on the Game Over Board 
    this.winner = function(whichPlayer) {
        if(whichPlayer.health <= 0) {
            $('#winner').text(this.name);
            $('#looser').text(whichPlayer.name);
        } else if (this.health <= 0) {
            $('#winner').text(whichPlayer.name);
            $('#looser').text(this.name);

        }
    }  
  };
  
  let player1 = new Player("Mario", 100, "player1", 1, "wp-1", 10);

  let player2 = new Player("Pokemon", 100, "player2", 2, "wp-1", 10 );

function Weapon(type, value, itemClass) {
    this.type = type;
    this.value = value;
    this.itemClass = itemClass;

    this.add = function () {
    addComponents(this.itemClass);
    }
};

// create weapons for the game
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

