class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = 0;
    }
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",function(data){playerCount = data.val()});
    }
    updateCount(count){
        database.ref("/").update({playerCount:count});
 
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
            rank:this.rank
        });

    }
    static getPlayerInfo(){
        var reference = database.ref("players");
        reference.on("value",(data)=>{
            allPlayers=data.val();
        });
    }
    getFinishedPlayers(){
        var finishedPlayerref = database.ref("finishedPlayers");
        finishedPlayerref.on("value",(data)=>{
            finishedPlayers = data.val();
        });
    }
    static updateFinish(){
        database.ref('/').update({finishedPlayers:finishedPlayers+1});
        this.rank+=1;
    }
}