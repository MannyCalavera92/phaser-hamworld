var PrincipalMenuState = {
    
    create: function() {
        // Ponemos el fondo
        background = game.add.tileSprite(0, 0, 800, 600, 'background_PrincipalMenu');
        background.tileScale.set(0.7);
        
        //Agregamos a flurflis
        this.sound_laugh = game.add.audio('sound_laugh');
        hamtaro = game.add.button(600, 300, 'menu_ham', this.laugh, this, 2, 1, 0);
        hamtaro.scale.set(0.15);
        hamtaro.anchor.set(0.5, 0.5);
        hamtaro_tween = game.add.tween(hamtaro).to({ angle: 15 }, 2000, function(k) {                
            return Math.sin(Math.PI * 2 * k);            
        }, true, 0, -1);
        
        
        
        
        //Hacemos los botones
        //Boton 1
        button1 = game.add.button(20, 100, 'nube2', this.start, this, 2, 1, 0);
        button1.scale.setTo(0.9);
        
        var texto1 = game.add.text(120, 140, 'JUGAR',{ font: '40px Comic Sans MS', fill: '#ff9933', fontStyle: 'bold', backgroundColor: 000000 });
        
        //Boton 2
        button2 = game.add.button(20, 350, 'nube3', this.go_to_levels, this, 2, 1, 0);
        button2.scale.setTo(0.9);
        
        var texto2 = game.add.text(120, 400, 'NIVELES',{ font: '40px Comic Sans MS', fill: '#ff9933', fontStyle: 'bold', backgroundColor: 000000 });
        
        
        //Bindeamos teclas para ELEGIR NIVEL
        one_key = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        two_key = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        three_key = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
        four_key = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
        five_key = game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
        six_key = game.input.keyboard.addKey(Phaser.Keyboard.SIX);
        
        //Ponemos musica
        //music = game.add.audio('crashNitro');
        //music.play();
        //music.loopFull();
    },

    laugh: function(){
        
        if(!this.sound_laugh.isPlaying){
            this.sound_laugh.play();
        }
    },
    
    go_to_levels: function(){
        
        game.state.start('level_menu');
    },
    
    update: function(){
        bindControls();
        if(game.input.gamepad.pad1.connected){
            //buttonStart.onDown.add(this.start, this);
            buttonStart.onDown.add(this.start, this);
            buttonBack.onDown.add(this.start2, this);
        }
        
        one_key.onDown.add(this.start, this);
        two_key.onDown.add(this.start2, this);
        three_key.onDown.add(this.start3, this);
        four_key.onDown.add(this.start4, this);
        five_key.onDown.add(this.start5, this);
        six_key.onDown.add(this.start6, this);
        
        background.tilePosition.x -= 1;
    },
    
    start: function () {
        // Transicion al siguiente estado
        music.stop();
        game.state.start('level_1');
        
    },
    start2: function () {
        // Transicion al siguiente estado
        music.stop();
        game.state.start('level_2');
        
    },
    start3: function () {
        // Transicion al siguiente estado
        music.stop();
        game.state.start('level_3');
        
    },
    start4: function () {
        // Transicion al siguiente estado
        music.stop();
        game.state.start('level_4');
        
    },
    start5: function () {
        // Transicion al siguiente estado
        music.stop();
        game.state.start('level_5');
        
    },
    
    start6: function () {
        // Transicion al siguiente estado
        music.stop();
        game.state.start('level_6');
        
    }
    
    
};