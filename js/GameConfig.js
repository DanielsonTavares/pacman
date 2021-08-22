export default {
    
    WIDTH: 888,
    HEIGHT: 792,

    init(){
        this.cnv1 = document.querySelector('#cnv');
        this.ctx = this.cnv1.getContext('2d');

        this.cnv1.width = this.WIDTH;
        this.cnv1.height = this.HEIGHT;
        this.cnv1.style.backgroundColor = '#555';

        return this.ctx;
    },

    game(){
        
    },

    configKeyBoard(player){
        document.addEventListener('keydown', (e)=>{
        
            player.cfgKeyBoardDown(e);
        
        });
        
        document.addEventListener('keyup', (e)=>{
            
            player.cfgKeyBoardUp(e);
        
        });
    }
}
