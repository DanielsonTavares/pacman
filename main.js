import GameElements from "./js/GameElement.js";

const cnv = document.querySelector('#cnv');
const ctx = document.querySelector('#cnv').getContext('2d');

const gameElements = new GameElements();

const player = {
    x: 400,
    y: 400,
    width: 48,
    height: 48,

    update(){
       // this.x++;
    },

    render(){
        
        ctx.fillStyle= '#0f0';
        ctx.fillRect(this.x, this.y,this.width, this.height);
        
    }
}

const player2 = {
    x: 200,
    y: 100,
    width: 48,
    height: 48,

    update(){
       // this.x++;
    },

    render(){
        
        ctx.fillStyle= '#600';
        ctx.fillRect(this.x, this.y,this.width, this.height);
        
    }
}




function init(){
    cnv.width = '900';
    cnv.height = '800';
    cnv.style.backgroundColor = '#555';

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