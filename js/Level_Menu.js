var level_menuState = {
    
    create: function() {
        // Ponemos el fondo
        background = game.add.tileSprite(0, 0, 800, 600, 'background_PrincipalMenu');
        background.tileScale.set(0.7);
        
        
        
        //Hacemos los botones
        //Boton 1
        button1 = game.add.button(150, 150, 'nube2', this.start, this, 2, 1, 0);
        button1.anchor.setTo(0.5, 0.5);
        button1.scale.setTo(0.7);
        tween_button1 = game.add.tween(button1).to({ y: 100 }, 1000, Phaser.Easing.Quadratic.in, true, 0).loop(true);
        tween_button1.yoyo(true, 1);
        
        var texto1 = game.add.text(150, 150, '1',{ font: '40px Comic Sans MS', fill: '#ff9933', fontStyle: 'bold', backgroundColor: 000000 });
        texto1.anchor.setTo(0.5, 0.5);
        tween_texto1 = game.add.tween(texto1).to({ y: 100 }, 1000, Phaser.Easing.Quadratic.out, true, 0).loop(true);
        tween_texto1.yoyo(true, 1);
        
        //Boton 2
        button2 = game.add.button(400, 250, 'nube3', this.start2, this, 2, 1, 0);
        button2.anchor.setTo(0.5, 0.5);
        button2.scale.setTo(0.7);
        tween_button2 = game.add.tween(button2).to({ y: 200 }, 600, Phaser.Easing.Quadratic.in, true, 0).loop(true);
        tween_button2.yoyo(true, 1);
        
        var texto2 = game.add.text(400, 250, '2',{ font: '40px Comic Sans MS', fill: '#ff9933', fontStyle: 'bold', backgroundColor: 000000 });
        texto2.anchor.setTo(0.5, 0.5);
        tween_texto2 = game.add.tween(texto2).to({ y: 200 }, 600, Phaser.Easing.Quadratic.out, true, 0).loop(true);
        tween_texto2.yoyo(true, 1);
        
        //Boton 3
        button3 = game.add.button(620, 150, 'nube1', this.start3, this, 2, 1, 0);
        button3.anchor.setTo(0.5, 0.5);
        button3.scale.setTo(0.7);
        tween_button3 = game.add.tween(button3).to({ y: 100 }, 2000, Phaser.Easing.Quadratic.in, true, 0).loop(true);
        tween_button3.yoyo(true, 1);
        
        var texto3 = game.add.text(620, 150, '3',{ font: '40px Comic Sans MS', fill: '#ff9933', fontStyle: 'bold', backgroundColor: 000000 });
        texto3.anchor.setTo(0.5, 0.5);
        tween_texto3 = game.add.tween(texto3).to({ y: 100 }, 2000, Phaser.Easing.Quadratic.out, true, 0).loop(true);
        tween_texto3.yoyo(true, 1);
        
        //Boton 4
        button4 = game.add.button(130, 350, 'nube4', this.start4, this, 2, 1, 0);
        button4.anchor.setTo(0.5, 0.5);
        button4.scale.setTo(0.7);
        tween_button4 = game.add.tween(button4).to({ y: 320 }, 400, Phaser.Easing.Quadratic.in, true, 0).loop(true);
        tween_button4.yoyo(true, 1);
        
        var texto4 = game.add.text(130, 350, '4',{ font: '40px Comic Sans MS', fill: '#ff9933', fontStyle: 'bold', backgroundColor: 000000 });
        texto4.anchor.setTo(0.5, 0.5);
        tween_texto4 = game.add.tween(texto4).to({ y: 320 }, 400, Phaser.Easing.Quadratic.out, true, 0).loop(true);
        tween_texto4.yoyo(true, 1);
        
        //Boton 5
        button5 = game.add.button(400, 400, 'nube5', this.start5, this, 2, 1, 0);
        button5.anchor.setTo(0.5, 0.5);
        button5.scale.setTo(0.7);
        tween_button5 = game.add.tween(button5).to({ y: 450 }, 1000, Phaser.Easing.Quadratic.in, true, 0).loop(true);
        tween_button5.yoyo(true, 1);
        
        var texto5 = game.add.text(400, 400, '5',{ font: '40px Comic Sans MS', fill: '#ff9933', fontStyle: 'bold', backgroundColor: 000000 });
        texto5.anchor.setTo(0.5, 0.5);
        tween_texto5 = game.add.tween(texto5).to({ y: 450 }, 1000, Phaser.Easing.Quadratic.out, true, 0).loop(true);
        tween_texto5.yoyo(true, 1);
        
        //Boton 6
        button6 = game.add.button(650, 350, 'nube7', this.start6, this, 2, 1, 0);
        button6.anchor.setTo(0.5, 0.5);
        button6.scale.setTo(0.7);
        tween_button6 = game.add.tween(button6).to({ y: 300 }, 1000, Phaser.Easing.Quadratic.in, true, 0).loop(true);
        tween_button6.yoyo(true, 1);
        
        var texto6 = game.add.text(650, 350, '6',{ font: '40px Comic Sans MS', fill: '#ff9933', fontStyle: 'bold', backgroundColor: 000000 });
        texto6.anchor.setTo(0.5, 0.5);
        tween_texto6 = game.add.tween(texto6).to({ y: 300 }, 1000, Phaser.Easing.Quadratic.out, true, 0).loop(true);
        tween_texto6.yoyo(true, 1);
        
        //Boton 7 (volver)
        button7 = game.add.button(650, 500, 'nube8', this.back_to_main, this, 2, 1, 0);
        button7.anchor.setTo(0.5, 0.5);
        button7.scale.setTo(0.7);
        
        var texto7 = game.add.text(650, 500, 'VOLVER',{ font: '30px Comic Sans MS', fill: '#ff9933', fontStyle: 'bold', backgroundColor: 000000 });
        texto7.anchor.setTo(0.5, 0.5);
        
        
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
    
    back_to_main: function(){
        
        game.state.start('PrincipalMenu');
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