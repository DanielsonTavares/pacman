export default class  gameElements {
    
    constructor(){

    }
    
    objects = [];

    add(obj){
        
        if(!obj.update){
            console.error('Obj Inválido. update() não implementado.', obj);
            return false;
        }
        
        if(!obj.render){
            console.error('Obj Inválido. render() não implementado.', obj);
            return false;
        }

        this.objects.push(obj);
    };

    update(){
        this.objects.forEach(o => {
            o.update();
        });
    };

    render(){
        this.objects.forEach(o => {
            o.render();
        });
    };

};