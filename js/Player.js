import ObjetoFisico from "./ObjetoFisico.js";

export default class Player extends ObjetoFisico{
    constructor(params, ctx){
        super();
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

}