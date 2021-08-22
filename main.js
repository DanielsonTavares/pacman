import GameElements from "./js/GameElement.js";
import Player from "./js/Player.js";
import gameConfig from "./js/GameConfig.js";

//Contexto do canvas
const   ctx = gameConfig.init();

const gameElements = new GameElements();

const player = new Player({
    x: 400, 
    y: 400, 
    width: 48, 
    height: 48, 
    color: '#0a0'}, 
    ctx);

const player2 = new Player({x: 200, 
    y: 100, 
    width: 48, 
    height: 48, 
    color: '#600'}, 
    ctx);






function init(){
    gameConfig.configKeyBoard(player);
    gameElements.add(player);
    gameElements.add(player2);
    
}

function update(){
    gameElements.update();
}

function render(){
    ctx.fillStyle= '#555';
    ctx.fillRect(0, 0,cnv.width, cnv.height);
    
    gameElements.render();
}

function loop(){
    update();
    render();
    requestAnimationFrame(loop);
}


init();
loop();