export default {
    

    init(){
        this.cnv = document.querySelector('#cnv');
        this.ctx = document.querySelector('#cnv').getContext('2d');

        this.cnv.width = '900';
        this.cnv.height = '800';
        this.cnv.style.backgroundColor = '#555';

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
