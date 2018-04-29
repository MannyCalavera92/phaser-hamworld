var loadState = {
    
    preload: function () {
        // Ponemos el texto de cargando...
        var loadingLabel = game.add.text(game.world.centerX, 200, 'Cargando...',{ font: '30px Comic Sans MS', fill: '#ffffff' });
        loadingLabel.anchor.setTo(0.5, 0.5);
        
        // Ponemos la barra de carga
        var progressBar = game.add.sprite(game.world.centerX, 300, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);

        //Ponemos el plugin de tiled
        //game.add.plugin(Phaser.Plugin.Tiled);
        
        //Cargamos todas las imágenes y sprites del resto de estados
        
        //Elementos del Titulo
        game.load.audio('crashNitro', 'sounds/music/crashnitro.mp3');
        game.load.image('background', 'backgrounds/cielo.png');
        game.load.image('titulo', 'images/titulo/titulo.png');
        game.load.image('nube1', 'images/titulo/nubes/nube1.png');
        game.load.image('nube2', 'images/titulo/nubes/nube2.png');
        game.load.image('nube3', 'images/titulo/nubes/nube3.png');
        game.load.image('nube4', 'images/titulo/nubes/nube4.png');
        game.load.image('nube5', 'images/titulo/nubes/nube5.png');
        game.load.image('nube6', 'images/titulo/nubes/nube6.png');
        game.load.image('nube7', 'images/titulo/nubes/nube7.png');
        game.load.image('nube8', 'images/titulo/nubes/nube8.png');
        game.load.image('nube9', 'images/titulo/nubes/nube9.png');
        game.load.image('nube10', 'images/titulo/nubes/nube10.png');
        game.load.image('nube11', 'images/titulo/nubes/nube11.png');
        
        //Elementos del Menu Principal
        game.load.image('background_PrincipalMenu', 'backgrounds/fondogranero2.png');
        game.load.image('menu_ham', 'images/HAMTARO.png');
        
        game.load.audio('sound_jump', 'sounds/PlayerJump.mp3');
        game.load.audio('sound_collect', 'sounds/PlayerCollect.mp3');
        game.load.audio('sound_laugh', 'sounds/PlayerLaugh.mp3');
        game.load.audio('end_level', 'sounds/victory.mp3');
        
        //Elementos del level 1
        game.load.audio('level1-music', 'sounds/music/Level1-Music.mp3');
        game.load.image('background_level_1', 'backgrounds/background_level1.png');
        
        //Cubos
        game.load.image('cubo_paja', 'sprites/cubos/cajapaja(80x64).png');
        game.load.image('cubo_paja2', 'sprites/cubos/cajapaja2(80x64).png');
        game.load.image('cubo_madera', 'sprites/cubos/cajamadera(80x63-55x50).png');
        game.load.image('cubo_caramelo', 'sprites/cubos/caramelo(80x64).png');
        game.load.image('cubo_cuadraditos', 'sprites/cubos/cuadraditos(80x64).png');
        game.load.image('cubo_nube', 'sprites/cubos/nube(80x64).png');
        game.load.image('cubo_hierba', 'sprites/cubos/hierba(80x64).png');
        game.load.image('cubo_hierba2', 'sprites/cubos/hierba2(80x64).png');

        game.load.image('pipa', 'sprites/pipa.png');
        game.load.image('destello', 'sprites/destello.png');
        game.load.image('circlemask', 'images/circlemask.png');

        //Tiles
        //game.load.tilemap('level_1_tilemap', 'tiles/level1v2.json', null, Phaser.Tilemap.TILED_JSON);
        
        //Elementos del level 3
        game.load.audio('level3-music', 'sounds/music/Level3-Music.mp3');
        game.load.image('background_level_3', 'backgrounds/background_level3.png');
        
        //Elementos del level 4
        game.load.audio('level4-music', 'sounds/music/Level4-Music.mp3');
        
        //Elementos del level 5
        game.load.audio('level5-music', 'sounds/music/Level5-Music.mp3');
        game.load.image('background_level_5', 'backgrounds/background_level5.png');
        
         //Elementos del level 6
        game.load.audio('level6-music', 'sounds/music/Level6-Music.mp3');
        
        
        //SrpitesSheets
        game.load.spritesheet('flurflis', 'sprites/hamtaro(50x50).png', 50, 50); //indicates the size of the sprite

        
        //Elementos del nivel 2
        game.load.image('beginL2', 'sprites/beginningLevel2.png');
        game.load.audio('tetris', 'sounds/music/tetris.mp3');
        game.load.audio('shock', 'sounds/hop.mp3');
        game.load.audio('splash', 'sounds/splash.wav');
        game.load.image('tileset2', 'sprites/platforms.png');
        game.load.image('tornado', 'sprites/tornado.png');
        game.load.spritesheet('tinyFlurflis', 'sprites/hamtaro1(47x47).png', 47, 47);
        game.load.tilemap('map2', 'json/tilemap2.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('sky', 'backgrounds/azul.png');
        game.load.image('clouds', 'backgrounds/nubes.png');
        
        
        
        //Elementos del nivel 4
        game.load.image('beginL4', 'sprites/beginningLevel4.png');
        game.load.image('tileset4', 'sprites/platformsLevel4.png');
        game.load.image('tornadoL4', 'sprites/tornadoL4.png');
        game.load.image('fondoL4', 'backgrounds/fondoL4.png');
        game.load.tilemap('map4', 'json/tilemap4.json', null, Phaser.Tilemap.TILED_JSON);
        
        //Elementos del nivel 6
        game.load.spritesheet('flurflisflying', 'sprites/hamtaroFlying.png', 60, 55);
        game.load.image('beginL6', 'sprites/beginningLevel6.png');
        game.load.image('tileset6', 'sprites/platformsLevel6.png');
        game.load.image('fondoL6', 'backgrounds/fondoL6.png');
        game.load.tilemap('map6', 'json/tilemap6.json', null, Phaser.Tilemap.TILED_JSON);
        
        bindControls();
        
        bindSimpleControls();

    },
    
    create: function() {
        // Elegir nivel de inicio
        game.state.start('title');
    }
};