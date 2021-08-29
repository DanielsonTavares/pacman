import GameElements from "./js/GameElement.js";
import Player from "./js/Player.js";
import gameConfig from "./js/GameConfig.js";
import gameMap from "./js/GameMap.js";

//Contexto do canvas
const   ctx = gameConfig.init();

const gameElements = new GameElements();
const mapElement = new gameMap({contexto: ctx});
mapElement.createBlocks();

const player = new Player({
    x: 400, 
    y: 400, 
    width: 36, 
    height: 36, 
    color: '#ccaa00'}, 
    ctx);

const player2 = new Player({
    x: 500, 
    y: 400, 
    width: 32, 
    height: 32, 
    color: '#600'}, 
    ctx);

function init(){
    gameConfig.configKeyBoard(player);
    gameElements.addPlayer(player2);
    gameElements.addPlayer(player);
    gameElements.addMap(mapElement);
    
}

function update(){
    gameElements.update();
    gameElements.colisao(player, player2)
}

function render(){
    ctx.fillStyle= '#555';
    ctx.fillRect(0, 0,gameConfig.WIDTH, gameConfig.HEIGHT);
    
    gameElements.render();
}

function loop(){
    update();
    render();
    requestAnimationFrame(loop);
}


init();
loop();