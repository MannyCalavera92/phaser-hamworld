//Nivel 3

var level_3State = {


	//Funcion de creacion
	create: function () {

        //Tamanios standar
        block_size = 50;
        background_length = 2500;
	    background_height = 1250;
        
        //Posicion de spawn inicial
        spawnX = 100;  //100
        spawnY = 1000;  //1000
        
        //Generamos el fondo del juego
		background = this.game.add.sprite(0, 0, 'background_level_3');
        background.scale.setTo(0.8, 0.7);
        this.game.world.setBounds(0, 0, background_length, background_height);
        
        //Grupos
        mundo =  game.add.group();
        
        
        player3D = new Player3D(spawnX, spawnY); // 100 1000 
        playerMaterial = game.physics.p2.createMaterial('playerMaterial', player3D.player.body);
        
        this.createWorld();
        
        
        
        mundo.add(player3D.player);
        
        
        var pajaPlayerCM = game.physics.p2.createContactMaterial(playerMaterial, pajaMaterial, { friction: 0.0 , restitution: 0});
        var maderaPlayerCM = game.physics.p2.createContactMaterial(playerMaterial, maderaMaterial, { friction: 1.0 });
        var maderaPajaCM = game.physics.p2.createContactMaterial(pajaMaterial, maderaMaterial, { friction: 1.0 });

        //  Here are some more options you can set:

        // contactMaterial.friction = 0.0;     // Friction to use in the contact of these two materials.
        // contactMaterial.restitution = 0.0;  // Restitution (i.e. how bouncy it is!) to use in the contact of these two materials.
        // contactMaterial.stiffness = 1e3;    // Stiffness of the resulting ContactEquation that this ContactMaterial generate.
        // contactMaterial.relaxation = 0;     // Relaxation of the resulting ContactEquation that this ContactMaterial generate.
        // contactMaterial.frictionStiffness = 1e7;    // Stiffness of the resulting FrictionEquation that this ContactMaterial generate.
        // contactMaterial.frictionRelaxation = 3;     // Relaxation of the resulting FrictionEquation that this ContactMaterial generate.
        // contactMaterial.surfaceVelocity = 0.0;        // Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.
        
        
        //Asignamos la funcion de tocar
        player3D.player.body.onBeginContact.add(canTouchThis, player3D, this);
        
        mundo.sort('y', Phaser.Group.SORT_DESCENDING);
        //cursors = game.input.keyboard.createCursorKeys();
        
        
        //	Musica
        music = game.add.audio('level3-music');
        music.volume = 0.5;
        music.play();
        music.loopFull();
        
        //Ponemos la puntuacion
        puntuacion = game.add.text(700, 50, pipas_recogidas+'/'+max_pipas,{ font: '30px Comic Sans MS', fill: '#FFFFFF', fontStyle: 'bold', backgroundColor: 000000 });
        puntuacion.fixedToCamera = true;
        
        pipa = game.add.sprite(630, 50, 'pipa');
        pipa.scale.set(1.5);
        pipa.fixedToCamera = true;
        
        //Metemos el tiemer para el efecto de fin de nivel
        timer = 0;
    },

	update: function() {
        
        bindControls();
        
        player3D.updatePlayer3D();
        //this.parallax_Background();
        
        mundo.sort('x', Phaser.Group.SORT_ASCENDING);
        grupo_pipas.forEach(move_Pipa, this);
        puntuacion.setText(pipas_recogidas+'/'+max_pipas);
        
        this.end_level();
        this.parallax_Background();
        mundo.forEach(movePlatforms,this);

	},
    create_Pipas: function () { 
        grupo_pipas = game.add.group();
        max_pipas = 0; //Cuenta el numero de pipas en el mundo
        pipas_recogidas = 0; //Cuenta las pipas recogidas
        
        //Planta 1
        pipa = create_Pipa(200 +10, 1150);//Inicio 0
        pipa = create_Pipa(300 +10, 1150);
        pipa = create_Pipa(400 +10, 1150);
        pipa = create_Pipa(200 +10, 1050);//Inicio 1
        pipa = create_Pipa(400 +10, 1050);
        pipa = create_Pipa(250 +10, 1000);//Inicio 2
        pipa = create_Pipa(350 +10, 1000);
        pipa = create_Pipa(200 +10, 950);//Inicio 3
        pipa = create_Pipa(300 +10, 950);
        pipa = create_Pipa(400 +10, 950);
        
        pipa = create_Pipa(700 +10, 1100);
        pipa = create_Pipa(900 +10, 1100);
        pipa = create_Pipa(1100 +10, 1100);
        pipa = create_Pipa(1250 +10, 1100);
        
        pipa = create_Pipa(1300 +10, 900);
        pipa = create_Pipa(1150 +10, 900);
        
        pipa = create_Pipa(1700 +10, 950);
        pipa = create_Pipa(1900 +10, 950);
        pipa = create_Pipa(2100 +10, 950);
        
        pipa = create_Pipa(2300 +30, 950);
        pipa = create_Pipa(2300 +30, 850);
        pipa = create_Pipa(2300 +30, 750);
        
        //Planta 2
        pipa = create_Pipa(1600 +10, 750);
        pipa = create_Pipa(1450 +10, 550);
        pipa = create_Pipa(1000 +10, 550);
        pipa = create_Pipa(700 +10, 550);
        pipa = create_Pipa(650 +10, 750);
        pipa = create_Pipa(600 +10, 750);
        
        pipa = create_Pipa(150 +10, 750);
        pipa = create_Pipa(250 +10, 750);
        pipa = create_Pipa(350 +10, 750);
        
        pipa = create_Pipa(200 +10, 550);
        pipa = create_Pipa(100 +30, 400);
        pipa = create_Pipa(100 +30, 300);
        
        //Planta 3
        pipa = create_Pipa(500 +10, 250);
        pipa = create_Pipa(950 +10, 200);
        pipa = create_Pipa(1100 +10, 50);
        pipa = create_Pipa(1100 +10, 250);
        pipa = create_Pipa(1000 +10, 350);
        pipa = create_Pipa(1200 +10, 350);
        
        pipa = create_Pipa(2400 +10, 400);
        pipa = create_Pipa(2400 +10, 150);
        pipa = create_Pipa(2100 +10, 150);
        pipa = create_Pipa(1950 +10, 100);
        pipa = create_Pipa(1900 +10, 250);
    },
    
    createCubos_Hierba: function () { 
        level3_Tile();
    },
    createCubos_Hierba2: function () { 
        cubo = createCubo_Hierba2(800, 650, block_size, hierbaMaterial, 800, 1200, 100);
        cubo = createCubo_Hierba2(850, 650, block_size, hierbaMaterial, 850, 1250, 100);    
    },
    createCubos_Paja2: function () { 
        cubo = createCubo_Paja2(1700, 1050, block_size, paja2Material);
        cubo = createCubo_Paja2(1900, 1050, block_size, paja2Material);
        cubo = createCubo_Paja2(2100, 1050, block_size, paja2Material);
        
        for(i = 300 ; i <= 650 ; i = i+block_size){
            cubo = createCubo_Paja2(i, 400, block_size, paja2Material);
        }
        
        cubo = createCubo_Paja2(2200, 450, block_size, paja2Material);
        cubo = createCubo_Paja2(2150, 450, block_size, paja2Material);
        
        cubo = createCubo_Paja2(1900, 300, block_size, paja2Material);
        cubo = createCubo_Paja2(1950, 300, block_size, paja2Material);
        
        cubo = createCubo_Paja2(1900, 150, block_size, paja2Material);
        cubo = createCubo_Paja2(1950, 150, block_size, paja2Material);
        
        cubo = createCubo_Paja2(2100, 200, block_size, paja2Material);
        cubo = createCubo_Paja2(2150, 200, block_size, paja2Material);
    },
    createCubos_Madera: function () {
        cubo = createCubo_Madera(1800, 1150, block_size, maderaMaterial);
        cubo = createCubo_Madera(1900, 750, block_size, maderaMaterial);
        cubo = createCubo_Madera(2200, 750, block_size, maderaMaterial);
    },
    
    createCubos_Cuadraditos: function () {  
        //Planta 1
        cubo = createCubo_Cuadraditos(200, 1150, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(300, 1150, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(400, 1150, block_size, cuadraditosMaterial);
        
        cubo = createCubo_Cuadraditos(200, 1050, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(400, 1050, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(250, 1000, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(350, 1000, block_size, cuadraditosMaterial);
        
        cubo = createCubo_Cuadraditos(200, 950, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(300, 950, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(400, 950, block_size, cuadraditosMaterial);
        
        for(i = 200 ; i <= 400 ; i = i+block_size){
            cubo = createCubo_Cuadraditos(i, 900, block_size, cuadraditosMaterial);
        }
        
        //Planta 2
        for(i = 150 ; i <= 350 ; i = i+block_size){
            cubo = createCubo_Cuadraditos(i, 800, block_size, cuadraditosMaterial);
            cubo = createCubo_Cuadraditos(i, 700, block_size, cuadraditosMaterial);
        }
        cubo = createCubo_Cuadraditos(150, 750, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(250, 750, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(350, 750, block_size, cuadraditosMaterial);
        
        
        //Planta 3
        for(i = 50 ; i <= 350 ; i = i+block_size){
            cubo = createCubo_Cuadraditos(1600, i, block_size, cuadraditosMaterial);
            cubo = createCubo_Cuadraditos(1650, i, block_size, cuadraditosMaterial);
            cubo = createCubo_Cuadraditos(1700, i, block_size, cuadraditosMaterial);
        }
    },
    
    createCubos_Caramelo: function () {  
        
        //Planta 1-2
        /*cubo = createCubo_Caramelo(2250, 1000, block_size, carameloMaterial);
        cubo = createCubo_Caramelo(2250, 950, block_size, carameloMaterial);
        cubo = createCubo_Caramelo(2250, 900, block_size, carameloMaterial);
        cubo = createCubo_Caramelo(2250, 850, block_size, carameloMaterial);*/
        for(i = 850 ; i <= 1000 ; i = i+block_size){
            cubo = createCubo_Caramelo(2250, i, block_size, carameloMaterial);
        }
        
        for(i = 650 ; i <= 1150 ; i = i+block_size){
            cubo = createCubo_Caramelo(2400, i, block_size, carameloMaterial);
        }

        //Planta 2-3
        for(i = 250 ; i <= 600 ; i = i+block_size){
            cubo = createCubo_Caramelo(50, i, block_size, carameloMaterial);
        }
        for(i = 400 ; i <= 500 ; i = i+block_size){
            cubo = createCubo_Caramelo(200, i, block_size, carameloMaterial);
        }
    },
    createWorld: function (){
        
        game.physics.p2.gravity.y = 700;
        
        game.physics.p2.world.defaultContactMaterial.friction = 0.3;
        game.physics.p2.world.setGlobalStiffness(1e5);

        worldMaterial = game.physics.p2.createMaterial('worldMaterial');
        pajaMaterial = game.physics.p2.createMaterial('pajaMaterial');
        paja2Material = game.physics.p2.createMaterial('paja2Material');
        maderaMaterial = game.physics.p2.createMaterial('maderaMaterial');
        cuadraditosMaterial = game.physics.p2.createMaterial('cuadraditosMaterial');
        carameloMaterial = game.physics.p2.createMaterial('carameloMaterial');
        nubeMaterial = game.physics.p2.createMaterial('nubeMaterial');
        hierbaMaterial = game.physics.p2.createMaterial('hierbaMaterial');

        //  4 trues = the 4 faces of the world in left, right, top, bottom order
        game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);
        
        this.create_Pipas();
        this.createCubos_Madera();
        this.createCubos_Cuadraditos();
        this.createCubos_Caramelo();
        this.createCubos_Paja2();
        this.createCubos_Hierba();
        this.createCubos_Hierba2();

    },
    end_level: function (){ //Cambia al siguiente nivel con una transaccion
        
        if(max_pipas == pipas_recogidas){
            music.stop();

            if(timer == 0){
                end_music = game.add.audio('end_level');
                end_music.volume = 0.7;
                end_music.play();
                
                fadeoutSprite=game.add.image(player3D.player.x, player3D.player.y, 'circlemask');
                fadeoutSprite.anchor.setTo(0.5,0.5);
                fadeoutSprite.scale.setTo(4,4);
                fadeoutSprite.alpha=0;
                
                player3D.flag_state = 'victoria';
                
                this.fadeOut();
            }else{
                this.fadeOut();
            }
        
            if(timer >= 2.7){
                end_music.stop();
                game.state.start('level_4');
            }
        }

    },
    fadeOut: function(){ //Genera el efecto de oscurecerse al final
        timer += 0.01;
        fadeoutSprite.alpha += timer*0.002;
        if (fadeoutSprite.scale.x >1){fadeoutSprite.scale.x = fadeoutSprite.scale.y  = 4 + timer * -1;}
    },
    parallax_Background: function (){ 
        background.x = 0.3*game.camera.x;
        background.y = 0.3*game.camera.y;
    }
};
