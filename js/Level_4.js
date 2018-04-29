var invertPlayer;
var paused = false;
var level_4State = {
	//Funcion de creacion
	create: function () {
        bg = game.add.tileSprite(0, 0, 1200, 600, 'fondoL4');
        bg.fixedToCamera = true;
        game.physics.p2.setImpactEvents(true);
        //game.physics.p2.gravity.y = 1600;
        
        
        //birds = game.add.sprite(1000,100, 'birds');
        //birds.animations.add('bigBird', [0,0,0,0,0,1,1,1], 10, true);
        //birds.animations.add('smallBird', [2,2,2,3,3,3], 10, true);
        //birds.animations.play('bigBird');
        //birds.animations.play('smallBird');
        
        //Generamos el mapa de juego
        map = game.add.tilemap('map4');
        
        map.addTilesetImage('tileset4');
        map.addTilesetImage('tornadoL4');
        
        map.setCollision(4,true,'colisiones');
        map.setCollision(5,true,'eliminatorio');
        map.setCollision(6,true,'victoria');
        layer = map.createLayer('obstaculos');
        
        //  This resizes the game world to match the layer dimensions
        layer.resizeWorld();
        
        colis = game.physics.p2.convertTilemap(map, 'colisiones');
        vict = game.physics.p2.convertTilemap(map, 'victoria');
        picos = game.physics.p2.convertCollisionObjects(map, 'pinchos');
        elim = game.physics.p2.convertTilemap(map, 'eliminatorio');
        game.physics.p2.setBoundsToWorld(true, true, true, true, true);
        
        //Generamos grupos de colision
        collisionG = game.physics.p2.createCollisionGroup();
        playerCG = game.physics.p2.createCollisionGroup();
        victoryCG = game.physics.p2.createCollisionGroup();
        picosCG = game.physics.p2.createCollisionGroup();
        eliminatoryCG = game.physics.p2.createCollisionGroup();
        
        game.physics.p2.updateBoundsCollisionGroup();
        
        for(var i = 0; i < colis.length; i++){
            colis[i].setCollisionGroup(collisionG);
            colis[i].collides(playerCG);
        }
        
        for(var i = 0; i < vict.length; i++){
            vict[i].setCollisionGroup(victoryCG);
            vict[i].collides(playerCG);
        }
        
        for(var i = 0; i < elim.length; i++){
            elim[i].setCollisionGroup(eliminatoryCG);
            elim[i].collides(playerCG);
        }
        
        for(var i = 0; i < picos.length; i++){
            picos[i].setCollisionGroup(picosCG);
            picos[i].collides(playerCG);
        }
        
        player2D = new Player2D(50, 400, false);
        
        player2D.player.body.setCollisionGroup(playerCG);
        player2D.player.body.collides(eliminatoryCG, this.gameOver,this);
        player2D.player.body.collides(collisionG, this.checkCollision, this);
        player2D.player.body.collides(victoryCG, this.victory, this);
        player2D.player.body.collides(picosCG, this.gameOver, this);
        
        game.camera.follow(player2D.player);
        music.stop();
        music = game.add.audio('level4-music');
        //music.volume = 0.5;
        music.play();
    },
    
    update: function () {
        if (paused == false){
            game.paused = true;
            bl4 = game.add.sprite(0,0,'beginL4');
            bl4.fixedToCamera = true;
            var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            spaceKey.onDown.addOnce(this.start, this);
            
        }else{
            //birds.position.x -= 0.2;
            this.paralaxFunction();
            bindSimpleControls();
            //player2D.updatePlayer2D();
            position = player2D.player.position.x;
            if (position <= 2450){
                this.normalGravityFunction();
            } else if (position > 2450 && position <= 6000){
                this.invertGravityFunction();
            }else{
                this.normalGravityFunction();
            }
        }
    },
    
    start: function () {
        paused = true;
        game.paused=false;
        
        this.create();
    },
    
    normalGravityFunction: function () {
        game.physics.p2.gravity.y = 1600;
        this.invertPlayer = false;
        player2D.updatePlayer2D(this.invertPlayer);
    },
    
    invertGravityFunction: function () {
        game.physics.p2.gravity.y = -1600;
        this.invertPlayer = true;
        player2D.updatePlayer2D(this.invertPlayer);
    },
    
    paralaxFunction: function () {
        bg.tilePosition.x -= 0.2;
    },
    
    gameOver: function () {
        //console.log(player2D.player.position.x);
        //music.stop();
        if(this.invertPlayer == true){
            player2D.player.animations.play('invertShock');
        }else{
            player2D.player.animations.play('shock');
        }
        shock.play();
        game.state.start('level_4');
    },  
    
    victory: function () {
        paused = false;
        music.stop();
        game.state.start('level_5');
    }, 
    
    checkCollision: function (body1, body2) {
        collision = false;
        if(this.invertPlayer == true){
            if( body1.x < body2.x && (body2.y-body1.y) < 0){
                collision = true;
            }
            
        }else {
            if( body1.x < body2.x && (body2.y-body1.y) > 0){
                collision = true;
            }
            //player2D.player.animations.play('right');
        }
        if(collision == true)
        {
            if(this.invertPlayer == true){
                player2D.player.animations.play('invertShock');
            }else{
                player2D.player.animations.play('shock');
            }
            shock.play();
            music.stop();
            game.state.start('level_4');
        }
    }
    
}