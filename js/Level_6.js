var paused = false;
//Metemos el timer para el efecto de fin de nivel
var timer = 0;
var fadeoutSprite=null;
var touchedVictory = false;
var finalPosX = 0;
var finalPosY = 0;

var level_6State = {
	//Funcion de creacion
	create: function () {
        bg = game.add.tileSprite(0, 0, 1200, 600, 'fondoL6');
        bg.fixedToCamera = true;
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.gravity.y = 1200;
        
        //Generamos el mapa de juego
        map = game.add.tilemap('map6');
        
        map.addTilesetImage('tileset6');
        
        map.setCollision(11,true,'eliminatorio');
        
        layer = map.createLayer('obstaculos');
        
        //  This resizes the game world to match the layer dimensions
        layer.resizeWorld();
        
        colisiones = game.physics.p2.convertCollisionObjects(map, 'colisiones');
        vict = game.physics.p2.convertCollisionObjects(map, 'victoria');
        elim = game.physics.p2.convertTilemap(map, 'eliminatorio');
        
        game.physics.p2.setBoundsToWorld(true, true, true, true, true);
        
        collisionG = game.physics.p2.createCollisionGroup();
        playerCG = game.physics.p2.createCollisionGroup();
        victoryCG = game.physics.p2.createCollisionGroup();
        eliminatoryCG = game.physics.p2.createCollisionGroup();
        
        game.physics.p2.updateBoundsCollisionGroup();
        
        for(var i = 0; i < colisiones.length; i++){
            colisiones[i].setCollisionGroup(collisionG);
            colisiones[i].collides(playerCG);
        }
        
        for(var i = 0; i < vict.length; i++){
            vict[i].setCollisionGroup(victoryCG);
            vict[i].collides(playerCG);
        }
        
        for(var i = 0; i < elim.length; i++){
            elim[i].setCollisionGroup(eliminatoryCG);
            elim[i].collides(playerCG);
        }
        
        player2D = new Player2D(100, 200, true);        
        
        player2D.player.body.setCollisionGroup(playerCG);
        player2D.player.body.collides(collisionG, this.gameOver,this);
        player2D.player.body.collides(eliminatoryCG, this.gameOver,this);
        player2D.player.body.collides(victoryCG, this.victory,this);
        
        game.camera.follow(player2D.player);
        
        music.stop();
        music = game.add.audio('level6-music');
        //music.volume = 0.8;
        music.play();
    },
    
    update: function () {
        if (touchedVictory){
            
            this.end_level();
        }else{
            if (paused == false){
                game.paused = true;
                bl6 = game.add.sprite(0,0,'beginL6');
                bl6.fixedToCamera = true;
                var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
                spaceKey.onDown.addOnce(this.start, this);

            }else{
                this.paralaxFunction();
                bindSimpleControls();
                player2D.updatePlayer2D();
                player2D.player.body.velocity.x = 200;
            }
        }
    },
    
    paralaxFunction: function () {
        bg.tilePosition.x -= 0.2;
    },
    
    start: function () {
        paused = true;
        game.paused=false;
        
        this.create();
    },
    
    gameOver: function () {
        //console.log(player2D.player.position.x);
        music.stop();
        player2D.player.animations.play('flyingShock');
        shock.play();
        game.state.start('level_6');
    },
    victory: function (){
        music.stop();
        touchedVictory = true;
        //player2D.player.body.static = true;
        this.update();
    },
    end_level: function (){ //Cambia al siguiente nivel con una transaccion
        paused = false;
        music.stop();
        
        if(timer == 0){
            end_music = game.add.audio('end_level');
            end_music.volume = 0.7;
            end_music.play();
            
            fadeoutSprite=game.add.image(player2D.player.x, player2D.player.y, 'circlemask');
            fadeoutSprite.anchor.setTo(0.5,0.5);
            fadeoutSprite.scale.setTo(4,4);
            fadeoutSprite.alpha=0;

            //player3D.flag_state = 'victoria';
            player2D.player.animations.play('flyingVictory');
            
            player2D.player.body.static = true;
            player2D.player.body.velocity.x = 0;
            player2D.player.body.velocity.y = 0;
            
            this.fadeOut();
        }else{
            this.fadeOut();
        }

        if(timer >= 2.7){
            timer = 0;
            end_music.stop();
            touchedVictory = false;
            //player2D.player.body.static = false;
            game.state.start('title');
        }
        

    },
        
    fadeOut: function(){ //Genera el efecto de oscurecerse al final
        timer += 0.01;
        fadeoutSprite.alpha += timer*0.002;
        if (fadeoutSprite.scale.x >1){fadeoutSprite.scale.x = fadeoutSprite.scale.y  = 4 + timer * -1;}
    }
    
}