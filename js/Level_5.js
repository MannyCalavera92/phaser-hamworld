//Nivel 5

var level_5State = {


	//Funcion de creacion
	create: function () {

        //Tamanios standar
        block_size = 50;
        background_length = 1500;
	    background_height = 2500;
        
        //Posicion de spawn inicial
        spawnX = 100;  //100
        spawnY = 2300;  //2300
        
        //Generamos el fondo del juego
		background = this.game.add.sprite(0, 0, 'background_level_5');
        background.scale.setTo(1.3, 1);
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
        music = game.add.audio('level5-music');
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
        
        //Aniadimos fisicas para los cubos nube
        game.physics.p2.world.on("preSolve", onPresolve)
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
        pipa = create_Pipa(300 +10, 2050);
        pipa = create_Pipa(500 +10, 2050);
        
        pipa = create_Pipa(650 +10, 2200);
        pipa = create_Pipa(750 +10, 2200);
        pipa = create_Pipa(850 +10, 2200);
        pipa = create_Pipa(950 +10, 2200);
        
        for(i = 650 ; i <= 900 ; i = i+block_size){
             pipa = create_Pipa(i +10, 2350);
        }
        
        pipa = create_Pipa(1400, 2350);
        pipa = create_Pipa(1400, 2200);
        pipa = create_Pipa(1400, 2050);
        pipa = create_Pipa(1400, 1900);
        pipa = create_Pipa(1000, 1900);
        pipa = create_Pipa(1200, 1800);
        pipa = create_Pipa(700, 1900);
        
        //Planta 2
        pipa = create_Pipa(300, 1650);
        pipa = create_Pipa(150, 1550);
        pipa = create_Pipa(450, 1550);
        
        pipa = create_Pipa(200 +10, 1350);
        pipa = create_Pipa(100 +10, 1350);
        
        pipa = create_Pipa(250 +10, 1300);
        pipa = create_Pipa(150 +10, 1300);
        pipa = create_Pipa(50 +10, 1300);
        
        pipa = create_Pipa(200 +10, 1250);
        pipa = create_Pipa(100 +10, 1250);
        
        pipa = create_Pipa(500 , 1300);
        pipa = create_Pipa(700 , 1300);
        pipa = create_Pipa(1000 , 1300);
        
        //Planta 3
        pipa = create_Pipa(1300 , 1000);
        
        pipa = create_Pipa(1050 , 800);
        pipa = create_Pipa(950 , 750);
        pipa = create_Pipa(800 , 700);
        pipa = create_Pipa(650 , 650);
        pipa = create_Pipa(500 , 600);
        pipa = create_Pipa(350 , 550);
        
        for(i =950 ; i < 1250 ; i = i+block_size){
            pipa = create_Pipa(i +10, 400);
        }
        pipa = create_Pipa(1350, 400);
        
        //Planta 4
        pipa = create_Pipa(150, 200);
        pipa = create_Pipa(600, 100);
        pipa = create_Pipa(850 +20, 50);
        
        for(i = 1250 ; i < 1450 ; i = i+block_size){
            pipa = create_Pipa(i +10, 100);
        }
        
        pipa = create_Pipa(1400 +10, 300);
        pipa = create_Pipa(900 +10, 300);
    },
    
    createCubos_Nube: function () { 
        level5_Tile();
    },
    createCubos_Nube2: function () {
        //Planta 1
        cubo = createCubo_Nube2(350, 2350, block_size, nubeMaterial, 2100, 2350, 120);
        cubo = createCubo_Nube2(300, 2350, block_size, nubeMaterial, 2100, 2350, 120);
        
        cubo = createCubo_Nube2(1250, 2350, block_size, nubeMaterial, 1900, 2350, 150);
        cubo = createCubo_Nube2(1200, 2350, block_size, nubeMaterial, 1900, 2350, 150);
        
        //Planta 2
        cubo = createCubo_Nube2(350, 1850, block_size, nubeMaterial, 1750, 1850, 120);
        cubo = createCubo_Nube2(300, 1850, block_size, nubeMaterial, 1750, 1850, 120);
        
        cubo = createCubo_Nube2(500, 1800, block_size, nubeMaterial, 1650, 1800, 100);
        cubo = createCubo_Nube2(450, 1800, block_size, nubeMaterial, 1650, 1800, 100);
        
        cubo = createCubo_Nube2(200, 1800, block_size, nubeMaterial, 1650, 1800, 100);
        cubo = createCubo_Nube2(150, 1800, block_size, nubeMaterial, 1650, 1800, 100);
        
        cubo = createCubo_Nube2(750, 1600, block_size, nubeMaterial, 1400, 1600, 120);
        cubo = createCubo_Nube2(700, 1600, block_size, nubeMaterial, 1400, 1600, 120);
        
        cubo = createCubo_Nube2(1350, 1450, block_size, nubeMaterial, 1100, 1450, 120);
        cubo = createCubo_Nube2(1300, 1450, block_size, nubeMaterial, 1100, 1450, 120);
        
        //Planta 3
        cubo = createCubo_Nube2(1100, 1050, block_size, nubeMaterial, 900, 1050, 120);
        cubo = createCubo_Nube2(1050, 1050, block_size, nubeMaterial, 900, 1050, 120);
        
        cubo = createCubo_Nube2(1400, 850, block_size, nubeMaterial, 500, 850, 120);
        cubo = createCubo_Nube2(1350, 850, block_size, nubeMaterial, 500, 850, 120);
        
        cubo = createCubo_Nube2(1000, 900, block_size, nubeMaterial, 850, 900, 100);//escalera inicio
        cubo = createCubo_Nube2(950, 900, block_size, nubeMaterial, 850, 900, 100);
        
        cubo = createCubo_Nube2(850, 850, block_size, nubeMaterial, 800, 850, 120);
        cubo = createCubo_Nube2(800, 850, block_size, nubeMaterial, 800, 850, 120);
        
        cubo = createCubo_Nube2(700, 800, block_size, nubeMaterial, 750, 800, 100);
        cubo = createCubo_Nube2(650, 800, block_size, nubeMaterial, 750, 800, 100);
        
        cubo = createCubo_Nube2(550, 750, block_size, nubeMaterial, 700, 750, 120);
        cubo = createCubo_Nube2(500, 750, block_size, nubeMaterial, 700, 750, 120);
        
        cubo = createCubo_Nube2(400, 700, block_size, nubeMaterial, 650, 700, 100);
        cubo = createCubo_Nube2(350, 700, block_size, nubeMaterial, 650, 700, 100);
        
        cubo = createCubo_Nube2(200, 700, block_size, nubeMaterial, 300, 700, 120);
        cubo = createCubo_Nube2(150, 700, block_size, nubeMaterial, 300, 700, 120);
    },
    createCubos_Hierba2: function () {
        //Planta 1
        cubo = createCubo_Hierba2(1100, 2000, block_size, hierbaMaterial, 850, 1100, 100);
        cubo = createCubo_Hierba2(1050, 2000, block_size, hierbaMaterial, 800, 1050, 100);
        
        //Planta 2
        cubo = createCubo_Hierba2(600, 1400, block_size, hierbaMaterial, 400, 600, 100);
        cubo = createCubo_Hierba2(550, 1400, block_size, hierbaMaterial, 350, 550, 100);
        
        cubo = createCubo_Hierba2(900, 1400, block_size, hierbaMaterial, 900, 1150, 100);
        cubo = createCubo_Hierba2(850, 1400, block_size, hierbaMaterial, 850, 1100, 100);
        
        //Planta 4
        
        cubo = createCubo_Hierba2(550, 200, block_size, hierbaMaterial, 550, 750, 120);
        cubo = createCubo_Hierba2(500, 200, block_size, hierbaMaterial, 500, 700, 120);
        
    },
    createCubos_Paja2: function () {
        //Plata 1
        cubo = createCubo_Paja2(700, 1950, block_size, paja2Material);
        
        //Plata 3
        cubo = createCubo_Paja2(400, 250, block_size, paja2Material);
        cubo = createCubo_Paja2(350, 250, block_size, paja2Material);
        
        cubo = createCubo_Paja2(900, 250, block_size, paja2Material);
        
        cubo = createCubo_Paja2(1150, 250, block_size, paja2Material);
        cubo = createCubo_Paja2(1200, 250, block_size, paja2Material);
        
        for(i =1250 ; i < 1400 ; i = i+block_size){
            cubo = createCubo_Paja2(i, 200, block_size, paja2Material);
        }
    },
    createCubos_Madera: function () {
        //cubo = createCubo_Madera(1800, 1150, block_size, maderaMaterial);

    },
    
    createCubos_Cuadraditos: function () {  
        //Planta 1
        for(i = 650 ; i <= 900 ; i = i+block_size){
            cubo = createCubo_Cuadraditos(i, 2350, block_size, cuadraditosMaterial);
        }
        
        //Planta 2
        cubo = createCubo_Cuadraditos(100, 1200, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(200, 1200, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(50, 1250, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(150, 1250, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(250, 1250, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(100, 1300, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(200, 1300, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(50, 1350, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(150, 1350, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(250, 1350, block_size, cuadraditosMaterial);
        
        //Planta 3
        cubo = createCubo_Cuadraditos(50, 1100, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(50, 1050, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(100, 1100, block_size, cuadraditosMaterial);
        for(i =950 ; i < 1250 ; i = i+block_size){
            cubo = createCubo_Cuadraditos(i, 400, block_size, cuadraditosMaterial);
        }
        //Planta 4
        for(i =1250 ; i < 1450 ; i = i+block_size){
            cubo = createCubo_Cuadraditos(i, 100, block_size, cuadraditosMaterial);
        }

    },
    
    createCubos_Caramelo: function () {  
        
        //Planta 1
        for(i = 650 ; i <= 900 ; i = i+block_size){
            cubo = createCubo_Caramelo(i, 2300, block_size, carameloMaterial);
        }
        
        //Planta 2
        for(i = 550 ; i < 1200 ; i = i+block_size){
            cubo = createCubo_Caramelo(i, 1200, block_size, carameloMaterial);
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
        this.createCubos_Hierba2();
        this.createCubos_Nube();
        this.createCubos_Nube2();

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
                game.state.start('level_6');
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
