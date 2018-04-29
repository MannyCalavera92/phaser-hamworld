var bootState = {
    preload: function () {
        // Cargamos aqui la imagen para la pantalla de load
        game.load.image('progressBar', 'images/load/cargando.png');
    },
    
    
    create: function() {
        // Ponemos el color de fondo
        game.stage.backgroundColor = '#000000';
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.startSystem(Phaser.Physics.P2JS);

        // Iniciamos el estado load
        game.state.start('load');
    }
};