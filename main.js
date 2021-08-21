
const cnv = document.querySelector('#cnv');
const ctx = document.querySelector('#cnv').getContext('2d');

const player = {
    x: 400,
    y: 400,
    width: 48,
    height: 48,

    update(){
        this.x++;
    },

    render(){
        
        ctx.fillStyle= '#0f0';
        ctx.fillRect(this.x, this.y,this.width, this.height);
        
    }
}

function init(){
    cnv.width = '900';
    cnv.height = '800';
    cnv.style.backgroundColor = '#555';

}

function update(){
    player.update();
}

function render(){
    ctx.fillStyle= '#555';
    ctx.fillRect(0, 0,cnv.width, cnv.height);
    
    
    player.render();

}

function loop(){
    update();
    
    render();
    
    requestAnimationFrame(loop);
}






init();
loop();