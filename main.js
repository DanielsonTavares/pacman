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


// function verificaColisao(bloco){
//     if( player.x <= bloco.x+bloco.width &&
//         player.x+player.width >= bloco.x &&
//         player.y <= bloco.y+bloco.height &&
//         player.y+player.height >= bloco.y){
            
//             console.log('colidiu');
//     }
// }

    
    function blockRect(r1,r2){
        //r1 -> bloqueado
        //r2 -> parede
        //catetos; armazenam a distância entre os retângulos
        var catX = r1.centerX() - r2.centerX();
        var catY = r1.centerY() - r2.centerY();
        
        //soma das metades
        var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
        var sumHalfHeight = r1.halfHeight() + r2.halfHeight();
        
        if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight){
            //r2.visible = false;
            //setTimeout(function(){
            //	r2.visible = true;
            //},1000);
            var overlapX = sumHalfWidth - Math.abs(catX);
            var overlapY = sumHalfHeight - Math.abs(catY);
            
            if(overlapX >= overlapY){//colisão por cima ou por baixo
                if(catY > 0){//por cima
                    r1.y += overlapY;
                } else {
                    r1.y -= overlapY;
                }
            } else {//colisão pela esquerda ou direita
                if(catX > 0){//colisão pela esquerda
                    r1.x += overlapX;
                } else {
                    r1.x -= overlapX;
                }
            }
        }
    }


function init(){
    gameConfig.configKeyBoard(player);
    gameElements.add(player);
    gameElements.add(player2);   
    
}

function update(){
    gameElements.update();

    blocos.forEach(b => blockRect(player, b))

    blockRect(player, player2)

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