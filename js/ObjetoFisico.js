export default class ObjetoFisico {
    
    //Retorna a metade da largura
    halfWidth (){
        return this.width/2;
    };

    //Retorna a metade da altura
    halfHeight (){
        return this.height/2;
    };
    //Retorna a posição do centro do objeto no eixo X
    centerX (){
        return this.x + this.halfWidth();
    };
    //Retorna a posição do centro do objeto no eixo Y
    centerY (){
        return this.y + this.halfHeight();
    };
}