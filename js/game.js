class Game {
    constructor() {

    }

    getState() {
        var gameSateref = database.ref("gameState");
        gameSateref.on("value", function (data) { gameState = data.val() });
    }

    update(state) {
        database.ref("/").update({ gameState: state });
    }

    start() {
        if (gameState === 0) {
            player = new Player()
            player.getCount();
            form = new Form();
            form.display();

        }
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);

        car1.addImage(car1Img);
        car2.addImage(car2Img);
        car3.addImage(car3Img);
        car4.addImage(car4Img);
        cars = [car1, car2, car3, car4];
        finished = false;

    }

    play() {
        form.hide();
        Player.getPlayerInfo();
        player.getFinishedPlayers();
        if (allPlayers !== undefined) {//var display_pos =130;
            background("#c68767");
            image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            var index = 0;
            var x = 250;
            var y;
            for (var plr in allPlayers) {
                index++;
                x += 200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if (index === player.index) {
                    stroke(10);
                    fill("red");
                    ellipse(x, y, 60, 60);
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                }

                textAlign(CENTER);
                textSize(20);
                text(allPlayers[plr].name, cars[index - 1].x, cars[index - 1].y - 75)

            }
        }

        if (keyIsDown(UP_ARROW) && player.index !== null && finished !== true) {
            player.distance += 50;
            player.update();
        }
        if (player.distance > 410 && finished===false) {
            Player.updateFinish();
            player.rank = finishedPlayers;
            player.update();
            finished=true;
        }
        drawSprites();
    }
    displayRanks() {
        camera.position.x = 0;
        camera.position.y = 0;

        imageMode(CENTER);
        Player.getPlayerInfo();
        image(bronze,displayWidth/-4,-100 + displayHeight/9,200,240);
        image(silver,displayWidth/4,-100 + displayHeight/10,225,270);
        image(gold,0,-100,250,300);

        textAlign(CENTER);
        textSize(50);
        for(var plr in allPlayers){
            if(allPlayers[plr].rank===1){
                text("1st "+allPlayers[pls].name, 0, 85);
            }
            else if(allPlayers[plr].rank===2){
                text("2nd "+allPlayers[pls].name, displayWidth/4, displayHeight/9+73);
            }
            else if(allPlayers[plr].rank===3){
                text("3rd "+allPlayers[pls].name, displayWidth/-4, displayHeight/10+76);
            }
            else{
                textSize(30);
                text("4th "+allPlayers[pls].name, 0, 225);
            }
        }

    }
}