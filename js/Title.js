var titleState = {
    
    create: function() {
        // Ponemos el fondo
        background = game.add.image(0, 0, 'background');
        background.scale.set(0.7);
        
        //Agregamos nubes
        nube1 = game.add.image(500, 0, 'nube1');
        nube1.scale.set(0.8);
        game.add.tween(nube1).to({ x: -500 }, 300000, 'Linear', true, 0).loop(true);
        
        nube2 = game.add.image(100, 50, 'nube2');
        nube2.scale.set(0.7);
        game.add.tween(nube2).to({ x: -500 }, 300000, 'Linear', true, 0).loop(true);
        
        nube3 = game.add.image(50, 400, 'nube3');
        nube3.scale.set(0.9);
        game.add.tween(nube3).to({ x: -500 }, 200000, 'Linear', true, 0).loop(true);
        
        nube4 = game.add.image(350, 350, 'nube4');
        nube4.scale.set(0.8);
        game.add.tween(nube4).to({ x: -500 }, 300000, 'Linear', true, 0).loop(true);
        
        nube5 = game.add.image(600, 150, 'nube5');
        nube1.scale.set(0.8);
        game.add.tween(nube5).to({ x: -500 }, 200000, 'Linear', true, 0).loop(true);
        
        nube6 = game.add.image(200, 250, 'nube6');
        nube6.scale.set(0.8);
        game.add.tween(nube6).to({ x: -500 }, 300000, 'Linear', true, 0).loop(true);
        
        nube7 = game.add.image(100, 500, 'nube7');
        nube7.scale.set(0.9);
        game.add.tween(nube7).to({ x: -500 }, 100000, 'Linear', true, 0).loop(true);
        
        nube8 = game.add.image(550, 450, 'nube8');
        nube8.scale.set(0.8);
        game.add.tween(nube8).to({ x: -500 }, 400000, 'Linear', true, 0).loop(true);
        
        nube9 = game.add.image(650, 300, 'nube9');
        nube9.scale.set(0.8);
        game.add.tween(nube9).to({ x: -500 }, 300000, 'Linear', true, 0).loop(true);
        
        nube10 = game.add.image(350, 100, 'nube10');
        nube10.scale.set(0.8);
        game.add.tween(nube10).to({ x: -500 }, 200000, 'Linear', true, 0).loop(true);
        
        nube11 = game.add.image(50, 200, 'nube11');
        nube11.scale.set(0.8);
        game.add.tween(nube11).to({ x: -500 }, 350000, 'Linear', true, 0).loop(true);
        


        //Agregamos el titulo
        titulo = this.game.add.sprite(400, 250, 'titulo');
        titulo.scale.set(0.6);
        titulo.anchor.setTo(0.5, 0.5);
        this.world.add(titulo);
        game.add.tween(titulo.scale).to( {x: 1.2, y: 1.2}, 1200, Phaser.Easing.Back.InOut, true, 1000, 20, true).loop(true);
        game.add.tween(titulo).to({ angle: 15 }, 2000, function(k) {                
            return Math.sin(Math.PI * 2 * k);            
        }, true, 0, -1);
        
        //Ponemos el texto
        var texto = game.add.text(game.world.centerX, game.world.height-100, '"Espacio" o "Start" para empezar',{ font: '40px Comic Sans MS', fill: '#ff9933', fontStyle: 'bold', backgroundColor: 000000 });
        texto.anchor.setTo(0.5, 0.5);    
        texto.alpha = 0.1;
        tween_texto = game.add.tween(texto).to( { alpha: 1 }, 1000, "Linear", true).loop(true);
        tween_texto.yoyo(true, 1000);
        
        // Ponemos la tecla espacio para que inicie el juego
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        //jump_button.onDown.addOnce(this.start, this);
        spaceKey.onDown.addOnce(this.start1, this);
        
        //Bindeamos teclas para ELEGIR NIVEL
        one_key = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        two_key = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        three_key = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
        four_key = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
        five_key = game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
        six_key = game.input.keyboard.addKey(Phaser.Keyboard.SIX);
        
        //Ponemos this.musica
        music = game.add.audio('crashNitro');
        this.music = music;
        this.music.play();
        this.music.loopFull();
    },
    update: function(){
        bindControls();
        if(game.input.gamepad.pad1.connected){
            //buttonStart.onDown.add(this.start, this);
            buttonStart.onDown.add(this.start1, this);
            buttonBack.onDown.add(this.start2, this);
        }
        
        one_key.onDown.add(this.start1, this);
        two_key.onDown.add(this.start2, this);
        three_key.onDown.add(this.start3, this);
        four_key.onDown.add(this.start4, this);
        five_key.onDown.add(this.start5, this);
        six_key.onDown.add(this.start6, this);
    },
    
    start1: function () {
        // Transicion al siguiente estado
        //this.music.stop();
        game.state.start('PrincipalMenu');
        
    },
    start2: function () {
        // Transicion al siguiente estado
        this.music.stop();
        game.state.start('level_2');
        
    },
    start3: function () {
        // Transicion al siguiente estado
        this.music.stop();
        game.state.start('level_3');
        
    },
    start4: function () {
        // Transicion al siguiente estado
        this.music.stop();
        game.state.start('level_4');
        
    },
    start5: function () {
        // Transicion al siguiente estado
        this.music.stop();
        game.state.start('level_5');
        
    },
    
    start6: function () {
        // Transicion al siguiente estado
        this.music.stop();
        game.state.start('level_6');
        
    }
    
    
};