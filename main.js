
const cnv = document.querySelector('#cnv');

function init(){
    cnv.width = '900';
    cnv.height = '800';
    cnv.style.backgroundColor = '#555';
}

function update(){
    
}

function render(){

}

function loop(){
    update();
    render();
    requestAnimationFrame(loop);
}






init();
loop();