import ObjetoFisico from "./ObjetoFisico.js";

export default class Player extends ObjetoFisico{
    constructor(params, ctx){
        super();
        const {x, y, width, height, color} = params;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.widthOri = width;
        this.heightOri = height;
        this.color = color;
        this.ctx = ctx;
    }

    keyBoard = {};
    velocity = 4;

    hability = {shrink: false, fast: true};
    isShrunken = false;
    isRuning = false;

    cfgKeyBoardDown(e){
        this.keyBoard[e.code] = true;
        
    }

    cfgKeyBoardUp(e){
        this.keyBoard[e.code] = false;
    }

    move(){
        if(this.keyBoard['ArrowRight']) this.x+=this.velocity;
        if(this.keyBoard['ArrowLeft']) this.x-=this.velocity;
        if(this.keyBoard['ArrowDown']) this.y+=this.velocity;
        if(this.keyBoard['ArrowUp']) this.y-=this.velocity;
    }

    action(){
        if(this.keyBoard['Space']){
            
            if(this.hability.shrink){

                if(this.isShrunken){
                    this.width = this.widthOri;
                    this.height = this.heightOri;
                }else{
                    this.width = this.width - this.width * 0.3;
                    this.height = this.height - this.height * 0.3;
                }
                this.isShrunken = !this.isShrunken;

            } 
            
            if(this.hability.fast){
                
                if(this.isRuning){
                    this.velocity = 4;
                }else{
                    this.velocity = 8;
                }
                
                this.isRuning = !this.isRuning;
            }

            this.keyBoard['Space'] = false;
        }
    }

    update(){
       this.move();
       this.action();
    }

    render(){
        
        this.ctx.fillStyle= this.color;
        this.ctx.fillRect(this.x, this.y,this.width, this.height);
        
    }

}