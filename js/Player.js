export default class Player{
    constructor(params, ctx){
        const {x, y, width, height, color} = params;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = ctx;
    }

    keyBoard = {};
    velocity = 4;

    cfgKeyBoardDown(e){
        this.keyBoard[e.key] = true;
        
    }

    cfgKeyBoardUp(e){
        this.keyBoard[e.key] = false;
    }

    move(){
        if(this.keyBoard['ArrowRight']) this.x+=this.velocity;
        if(this.keyBoard['ArrowLeft']) this.x-=this.velocity;
        if(this.keyBoard['ArrowDown']) this.y+=this.velocity;
        if(this.keyBoard['ArrowUp']) this.y-=this.velocity;
        
    }

    update(){
       this.move();
    }

    render(){
        
        this.ctx.fillStyle= this.color;
        this.ctx.fillRect(this.x, this.y,this.width, this.height);
        
    }

    //Retorna a metade da largura
    halfWidth (){
        return this.width/2;
    }
    //Retorna a metade da altura
    halfHeight (){
        return this.height/2;
    }
    //Retorna a posição do centro do objeto no eixo X
    centerX (){
        return this.x + this.halfWidth();
    }
    //Retorna a posição do centro do objeto no eixo Y
    centerY (){
        return this.y + this.halfHeight();
    }

}