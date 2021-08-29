export default class  gameElements {
    
    constructor(){

    }
    
    players = [];
    maps = [];

    addPlayer(obj){
        
        if(!obj.update){
            console.error('Obj Inválido. update() não implementado.', obj);
            return false;
        }
        
        if(!obj.render){
            console.error('Obj Inválido. render() não implementado.', obj);
            return false;
        }

        this.players.push(obj);
    };

    addMap(obj){
        this.maps.push(obj);
    };

    update(){
        this.players.forEach(o => {
            o.update();
        });

        this.players.forEach(player => {
            this.maps.forEach(
                m => m.mapElements.blocos.forEach(
                    b => this.colisao(player, b)
                )
            );

            this.maps.forEach(
                m => m.mapElements.items.forEach(
                    b => this.colisao(player, b)
                )
            );

            
        });
    };

    render(){
        this.players.forEach(o => {
            o.render();
        });
        
        this.maps.forEach(o => {
            o.render();
        });
    };

    colisao(r1,r2){
        //r1 -> bloqueado
        //r2 -> parede
        //catetos; armazenam a distância entre os retângulos
        var catX = r1.centerX() - r2.centerX();
        var catY = r1.centerY() - r2.centerY();
        
        //soma das metades
        var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
        var sumHalfHeight = r1.halfHeight() + r2.halfHeight();
        
        if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight){
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

};