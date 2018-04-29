//Nivel 2
var player;
var layer;
var map;
var game;
var paused = false;

var level_2State = {
	//Funcion de creacion
	create: function () {
        bg = game.add.tileSprite(0, 0, 800, 600, 'sky');
        bgCloud = game.add.tileSprite(0, 0, 1200, 600, 'clouds');
        bgCloud.fixedToCamera = true;
        bg.fixedToCamera = true;
        
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.gravity.y = 1600;
        
        //Generamos el mapa de juego
        map = game.add.tilemap('map2');
        
        map.addTilesetImage('tileset2');
        map.addTilesetImage('tornado');
    
        map.setCollision(11,true,'colisiones');
        map.setCollision(6,true,'victoria');
        layer = map.createLayer('obstaculos');
        
        //  This resizes the game world to match the layer dimensions
        layer.resizeWorld();
        //collisionLayer.visible = false;
        //eliminatoryLayer.visible = false;
        
        //  Convert the tilemap layer into bodies. Only tiles that collide (see above) are created.
        //  This call returns an array of body objects which you can perform addition actions on if
        //  required. There is also a parameter to control optimising the map build.
        colis = game.physics.p2.convertTilemap(map, 'colisiones');
        water = game.physics.p2.convertCollisionObjects(map, 'water');
        vict = game.physics.p2.convertTilemap(map, 'victoria');
        plat = game.physics.p2.convertCollisionObjects(map, 'platformsLayer');
        
        //  The first 4 parameters control if you need a boundary on the left, right, top and bottom of your world.
        //  The final parameter (false) controls if the boundary should use its own collision group or not. In this case we don't
        //  require that, so it's set to false. But if you had custom collision groups set-up then you would need this set to true.
        game.physics.p2.setBoundsToWorld(true, true, true, true, true);
        
        //Generamos grupos de colision
        collisionG = game.physics.p2.createCollisionGroup();
        waterCG= game.physics.p2.createCollisionGroup();
        playerCG = game.physics.p2.createCollisionGroup();
        victoryCG = game.physics.p2.createCollisionGroup();
        platformsCG = game.physics.p2.createCollisionGroup();
        
        game.physics.p2.updateBoundsCollisionGroup();
        
        for(var i = 0; i < colis.length; i++){
            colis[i].setCollisionGroup(collisionG);
            colis[i].collides(playerCG);
        }
        
        for(var i = 0; i < water.length;i ++){
            water[i].setCollisionGroup(waterCG);
            water[i].collides(playerCG);
        }
        
        for(var i = 0; i < vict.length;i ++){
            vict[i].setCollisionGroup(victoryCG);
            vict[i].collides(playerCG);
        }
        console.log(plat.length);
        for(var i = 0; i < plat.length;i ++){
            plat[i].setCollisionGroup(platformsCG);
            plat[i].collides(playerCG);
        }
        player2D = new Player2D(50, 500, false);
        
        player2D.player.body.setCollisionGroup(playerCG);
        player2D.player.body.collides(waterCG, this.gameOver,this);
        player2D.player.body.collides(collisionG, this.checkCollision, this);
        player2D.player.body.collides(victoryCG, this.victory, this);
        player2D.player.body.collides(platformsCG, this.checkCollision, this);
        game.camera.follow(player2D.player);
        
        music = game.add.audio('tetris');
        music.play();
    },

    update: function () {
        if (paused == false){
            game.paused = true;
            music.stop();
            bl4 = game.add.sprite(0,0,'beginL2');
            bl4.fixedToCamera = true;
            var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            spaceKey.onDown.addOnce(this.start, this);
            
        }else{
            this.paralaxFunction();
            bindSimpleControls();
            player2D.updatePlayer2D(false);
        }
    },
    
    start: function () {
        paused = true;
        game.paused=false;
        this.create();
    },
    
    paralaxFunction: function () {
        bgCloud.tilePosition.x -= 0.2;
    },
    
    gameOver: function () {
        music.stop();
        player2D.player.animations.play('drown');
        splash.play();
        game.state.start('level_2');
    },  
    
    victory: function () {
        paused = false;
        music.stop();
        game.state.start('level_3');
    }, 
    
    checkCollision: function (body1, body2) {
        
        if( body1.x < body2.x && (body2.y-body1.y) < 0)
        {
            music.stop();
            player2D.player.animations.play('shock');
            shock.play();
            game.state.start('level_2');
        }
    }
}