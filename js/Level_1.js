//Nivel 1

var level_1State = {


	//Funcion de creacion
	create: function () {

        block_size = 50;
        background_length = 1250;
	    background_height = 1050;
        
        
        //Generamos el fondo del juego
		background = this.game.add.sprite(0, 0, 'background_level_1');
        this.game.world.setBounds(0, 0, background_length, background_height);
        
        //Grupos
        mundo =  game.add.group();
        
        
        player3D = new Player3D(100, 900); // 100 900 
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
        music = game.add.audio('level1-music');
        music.volume = 0.5;
        music.play();
        music.loopFull();
        
        //Ponemos la puntuacion
        puntuacion = game.add.text(700, 50, pipas_recogidas+'/'+max_pipas,{ font: '30px Comic Sans MS', fill: '#FFFFFF', fontStyle: 'bold', backgroundColor: 000000 });
        puntuacion.fixedToCamera = true;
        
        pipa = game.add.sprite(630, 50, 'pipa');
        pipa.scale.set(1.5);
        pipa.fixedToCamera = true;
        
        //Metemos el timer para el efecto de fin de nivel
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

	},
    create_Pipas: function () { 
        grupo_pipas = game.add.group();
        max_pipas = 0; //Cuenta el numero de pipas en el mundo
        pipas_recogidas = 0; //Cuenta las pipas recogidas
        pipa = create_Pipa(300 +10, 800);
        pipa = create_Pipa(600 +10, 850);
        pipa = create_Pipa(750 +10, 800);
        pipa = create_Pipa(850 +10, 550);
        pipa = create_Pipa(1150 +10, 550);
        pipa = create_Pipa(1050 +10, 550);
        pipa = create_Pipa(950 +10, 550);
        pipa = create_Pipa(1100 +10, 450);
        pipa = create_Pipa(1000 +10, 450);
        pipa = create_Pipa(900 +10, 450);
        pipa = create_Pipa(800 +10, 450);
        pipa = create_Pipa(200 +10, 700);
        pipa = create_Pipa(100 +10, 700);
        pipa = create_Pipa(250 +10, 250);
        pipa = create_Pipa(650, 450); //Para que esté en el centro
        pipa = create_Pipa(950 +10, 200);
        pipa = create_Pipa(50 +10, 350);
        pipa = create_Pipa(50 +10, 200);
        pipa = create_Pipa(450 +10, 150);
        pipa = create_Pipa(1150 +10, 100);
        
        //inercia = pipa.body.inertia;
    },
    
    createCubos_Paja: function () { 
        level1_Tile();
    },
    
    createCubos_Paja2: function () { 

        for(i = 100 ; i <= 500 ; i = i+block_size){
            cubo = createCubo_Paja2(i, 400, block_size, paja2Material);
        }
        
        cubo = createCubo_Paja2(950, 250, block_size, paja2Material);
    },
    createCubos_Madera: function () {
        cubo = createCubo_Madera(700, 900, block_size, maderaMaterial);
        cubo = createCubo_Madera(1100, 900, block_size, maderaMaterial);
        
        cubo = createCubo_Madera(650, 700, block_size, maderaMaterial);
        cubo = createCubo_Madera(850, 700, block_size, maderaMaterial);
    },
    
    createCubos_Cuadraditos: function () {  
        cubo = createCubo_Cuadraditos(1050, 550, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(950, 550, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(850, 550, block_size, cuadraditosMaterial);
        
        cubo = createCubo_Cuadraditos(1100, 450, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(1000, 450, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(900, 450, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(800, 450, block_size, cuadraditosMaterial);
        
        cubo = createCubo_Cuadraditos(200, 650, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(200, 700, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(100, 650, block_size, cuadraditosMaterial);
        cubo = createCubo_Cuadraditos(100, 700, block_size, cuadraditosMaterial);
    },
    
    createCubos_Caramelo: function () {  

        cubo = createCubo_Caramelo(550, 550, block_size, carameloMaterial);
        cubo = createCubo_Caramelo(550, 500, block_size, carameloMaterial);
        cubo = createCubo_Caramelo(550, 450, block_size, carameloMaterial);
        cubo = createCubo_Caramelo(550, 400, block_size, carameloMaterial);
        
        cubo = createCubo_Caramelo(700, 550, block_size, carameloMaterial);
        cubo = createCubo_Caramelo(700, 500, block_size, carameloMaterial);
        cubo = createCubo_Caramelo(700, 450, block_size, carameloMaterial);
        cubo = createCubo_Caramelo(700, 400, block_size, carameloMaterial);
       
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

        //  4 trues = the 4 faces of the world in left, right, top, bottom order
        game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);
        
        this.create_Pipas();
        this.createCubos_Madera();
        this.createCubos_Cuadraditos();
        this.createCubos_Caramelo();
        this.createCubos_Paja2();
        this.createCubos_Paja();

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
                game.state.start('level_2');
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
