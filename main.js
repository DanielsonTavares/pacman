import GameElements from "./js/GameElement.js";
import Player from "./js/Player.js";
import gameConfig from "./js/GameConfig.js";
import maps from "./js/Maps.js";

//Contexto do canvas
const   ctx = gameConfig.init();

const gameElements = new GameElements();
const blocos = maps.createBlocks();

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
    gameElements.add(player);
    gameElements.add(player2);   
    
}

function update(){
    gameElements.update();

    blocos.forEach(b => gameElements.colisao(player, b))

    gameElements.colisao(player, player2)

}

function render(){
    ctx.fillStyle= '#555';
    ctx.fillRect(0, 0,gameConfig.WIDTH, gameConfig.HEIGHT);
    
    maps.drawMap01(ctx);

    gameElements.render();
}

function loop(){
    update();
    render();
    requestAnimationFrame(loop);
}


init();
loop();