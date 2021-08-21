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

    

    update(){
       // this.x++;
    }

    render(){
        
        this.ctx.fillStyle= this.color;
        this.ctx.fillRect(this.x, this.y,this.width, this.height);
        
    }
}