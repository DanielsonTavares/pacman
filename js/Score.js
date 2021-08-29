export default class Score{
    
    points = 0
    pointsView = document.getElementById('score');
    
    constructor(){

    }

    add(p){
        this.points += p;
        this.pointsView.innerHTML = this.points;
    }

    remove(p){
        this.points -= p;
    }

    clean(){
        this.points = 0;
    }
}