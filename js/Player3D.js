//Funcion de update de PLayer3D
function updatePlayer3D() {
    
    //Elegimos entre mando o teclado
    if(game.input.gamepad.supported && game.input.gamepad.active && game.input.gamepad.pad1.connected){
        this.movement_Gamepad();
    }else{
        this.movement_Keyboard();
    }

}


function checkIfCanJump(player) {

    var result = false;
    var yAxis = p2.vec2.fromValues(0, 1);

    for (var i=0; i < game.physics.p2.world.narrowphase.contactEquations.length; i++)
    {
        var c = game.physics.p2.world.narrowphase.contactEquations[i];

        if (c.bodyA === player.body.data || c.bodyB === player.body.data)
        {
            var d = p2.vec2.dot(c.normalA, yAxis);

            if (c.bodyA === player.body.data)
            {
                d *= -1;
            }

            if (d > 0.5)
            {
                result = true;
            }
        }
    }
    
    return result;

}

//Dependiendo del sprite que toque se genera un efecto u otro
function canTouchThis (body, bodyB, shapeA, shapeB, equation) {

    //  The block hit something.
    //  
    //  This callback is sent 5 arguments:
    //  
    //  The Phaser.Physics.P2.Body it is in contact with. *This might be null* if the Body was created directly in the p2 world.
    //  The p2.Body this Body is in contact with.
    //  The Shape from this body that caused the contact.
    //  The Shape from the contact body.
    //  The Contact Equation data array.
    //  
    //  The first argument may be null or not have a sprite property, such as when you hit the world bounds.
    if (body)
    {
        if(body.sprite.key == 'cubo_cuadraditos'){
            efecto_Cuadraditos(body);
        }else if(body.sprite.key == 'cubo_paja2'){
            efecto_Paja2(body);
        }else if(body.sprite.key == 'cubo_caramelo'){
            efecto_Caramelo(this);
        }/*else if(body.sprite.key == 'cubo_madera'){  //WORK IN PROGRESS
            efecto_Madera(this, body);
        }*/else if(body.sprite.key == 'pipa'){
            this.sound_collect.play();
            collect_Pipa(body);
        }else{
            this.flag_state = 'normal';
        }
    }
    else
    {
        this.flag_state = 'normal';
    }

}

//Movimientos con el gamepad
function movement_Gamepad(){
    
    if(this.flag_state == 'normal'){

        //Actalizamos las opciones de movimiento disponibles
        this.player.body.velocity.x = 0;
        //this.player.body.velocity.y = 0;

        if ((buttonA.isDown || buttonY.isDown) && checkIfCanJump(this.player) && (buttonDPadRight.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)){ //Salto Dcha

            this.player.body.velocity.y = -400;
            this.player.body.velocity.x = 150;
            this.player.animations.play('jump-right');
            this.sound_jump.play();

        }else if ((buttonA.isDown || buttonY.isDown) && checkIfCanJump(this.player) && (buttonDPadLeft.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)){ //Salto Izda
            this.player.body.velocity.y = -400;
            this.player.body.velocity.x = -150;
            this.player.animations.play('jump-left');
            this.sound_jump.play();
        }else if ((bumperL.isDown || bumperR.isDown || leftTriggerButton.isDown || rightTriggerButton.isDown) && (buttonDPadLeft.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)){ //Correr hacia la izda

            this.player.body.velocity.x = -250;

            if(checkIfCanJump(this.player)){
                this.player.animations.play('left-fast');
            }else{
                this.player.animations.play('jump-left');
            }

        } else if ((bumperL.isDown || bumperR.isDown || leftTriggerButton.isDown || rightTriggerButton.isDown) && (buttonDPadRight.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)){ //Movimientos hacia la dcha

            this.player.body.velocity.x = 250;

            if(checkIfCanJump(this.player)){
                this.player.animations.play('right-fast');
            }else{
                this.player.animations.play('jump-right');
            }

        }else if ((buttonDPadLeft.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)){ //Movimientos hacia la izda

            this.player.body.velocity.x = -150;

            if(checkIfCanJump(this.player)){
                this.player.animations.play('left');
            }else{
                this.player.animations.play('jump-left');
            }
        } else if ((buttonDPadRight.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)){ //Movimientos hacia la dcha

            this.player.body.velocity.x = 150;

            if(checkIfCanJump(this.player)){
                this.player.animations.play('right');
            }else{
                this.player.animations.play('jump-right');
            }
        }else if ((buttonA.isDown || buttonY.isDown) && checkIfCanJump(this.player)){ //Salto Vertical

            this.player.body.velocity.y = -400;
            this.sound_jump.play();

        }else if ((buttonDPadDown.isDown || buttonB.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1) && checkIfCanJump(this.player)){ //Movimiento Abajo

            this.player.animations.play('down');
            if(!this.sound_laugh.isPlaying){
                this.sound_laugh.play();
            }

        }else{ //Parado

            if(checkIfCanJump(this.player)){
                this.player.animations.stop();
                this.player.animations.play('stand');
            }else{
                this.player.animations.play('jump-straight');
            }
        }
    }else if(this.flag_state == 'empujar'){
        if((buttonDPadRight.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)){
            this.player.animations.play('push-right');
            this.player.body.velocity.x = 150;
        }else if(buttonDPadLeft.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1){
            this.player.animations.play('push-left');
            this.player.body.velocity.x = -150;
        }
        
    }else if(this.flag_state == 'pegado'){
        
        //this.player.body.static = true;
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = -10; //Hay que contrarrestar la gravedad
        
        if ((buttonA.isDown || buttonY.isDown) && (buttonDPadRight.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)){ //Salto Dcha
            this.player.body.kinematic = false;
            this.player.body.velocity.y = -400;
            this.player.body.velocity.x = 150;
            this.player.animations.play('jump-right');
            this.sound_jump.play();
            this.flag_state = 'normal';
            
        }else if ((buttonA.isDown || buttonY.isDown) && (buttonDPadLeft.isDown || pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)){ //Salto Izda
            this.player.body.kinematic = false;
            this.player.body.velocity.y = -400;
            this.player.body.velocity.x = -150;
            this.player.animations.play('jump-left');
            this.sound_jump.play();
            this.flag_state = 'normal';
        }
    }else if(this.flag_state == 'victoria'){
        
        //this.player.body.static = true;
        this.player.body.static = true;
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        
        this.player.animations.play('victory');
    }
}

//Movimientos con el teclado
function movement_Keyboard(){
    if(this.flag_state == 'normal'){

        //Actalizamos las opciones de movimiento disponibles
        this.player.body.velocity.x = 0;
        //this.player.body.velocity.y = 0;

        if ((w_key.isDown || up_key.isDown || space_key.isDown) && checkIfCanJump(this.player) && (d_key.isDown || right_key.isDown)){ //Salto Dcha

            this.player.body.velocity.y = -400;
            this.player.body.velocity.x = 150;
            this.player.animations.play('jump-right');
            this.sound_jump.play();

        }else if ((w_key.isDown || up_key.isDown || space_key.isDown) && checkIfCanJump(this.player) && (a_key.isDown || left_key.isDown)){ //Salto Izda
            this.player.body.velocity.y = -400;
            this.player.body.velocity.x = -150;
            this.player.animations.play('jump-left');
            this.sound_jump.play();
            
        }else if (shift_key.isDown && (a_key.isDown || left_key.isDown)){ //Correr hacia la izda

            this.player.body.velocity.x = -250;

            if(checkIfCanJump(this.player)){
                this.player.animations.play('left-fast');
            }else{
                this.player.animations.play('jump-left');
            }

        } else if (shift_key.isDown && (d_key.isDown || right_key.isDown)){ //Movimientos hacia la dcha

            this.player.body.velocity.x = 250;

            if(checkIfCanJump(this.player)){
                this.player.animations.play('right-fast');
            }else{
                this.player.animations.play('jump-right');
            }

        }else if ((a_key.isDown || left_key.isDown)){ //Movimientos hacia la izda

            this.player.body.velocity.x = -150;

            if(checkIfCanJump(this.player)){
                this.player.animations.play('left');
            }else{
                this.player.animations.play('jump-left');
            }
        } else if ((d_key.isDown || right_key.isDown)){ //Movimientos hacia la dcha

            this.player.body.velocity.x = 150;

            if(checkIfCanJump(this.player)){
                this.player.animations.play('right');
            }else{
                this.player.animations.play('jump-right');
            }
        }else if ((w_key.isDown || up_key.isDown || space_key.isDown) && checkIfCanJump(this.player)){ //Salto Vertical

            this.player.body.velocity.y = -400;
            this.sound_jump.play();

        }else if ((s_key.isDown || down_key.isDown)&& checkIfCanJump(this.player)){ //Movimiento Abajo

            this.player.animations.play('down');
             if(!this.sound_laugh.isPlaying){
                this.sound_laugh.play();
            }

        }else{ //Parado

            if(checkIfCanJump(this.player)){
                this.player.animations.stop();
                this.player.animations.play('stand');
            }else{
                this.player.animations.play('jump-straight');
            }
        }
    }else if(this.flag_state == 'pegado'){
        
        //this.player.body.static = true;
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = -10; //Hay que contrarrestar la gravedad
        
        if ((w_key.isDown || up_key.isDown || space_key.isDown) && (d_key.isDown || right_key.isDown)){ //Salto Dcha
            this.player.body.kinematic = false;
            this.player.body.velocity.y = -400;
            this.player.body.velocity.x = 150;
            this.player.animations.play('jump-right');
            this.sound_jump.play();
            this.flag_state = 'normal';
            
        }else if ((w_key.isDown || up_key.isDown || space_key.isDown) && (a_key.isDown || left_key.isDown)){ //Salto Izda
            this.player.body.kinematic = false;
            this.player.body.velocity.y = -400;
            this.player.body.velocity.x = -150;
            this.player.animations.play('jump-left');
            this.sound_jump.play();
            this.flag_state = 'normal';
        }
    }else if(this.flag_state == 'victoria'){
        
        //this.player.body.static = true;
        this.player.body.static = true;
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        
        this.player.animations.play('victory');
    }
}

//Constructor de Player3D
function Player3D(posX, posY) { //Posicion x, Posicion y

    // Creamos al Player
    this.player = game.add.sprite(posX, posY, 'flurflis');

    //  Activamos las fisicas del juego en el personaje
    game.physics.p2.enable(this.player, false);

    //  Configuramos las "fisicas".
    this.player.body.setCircle(23);
    this.player.body.mass = 20;
    this.player.body.collideWorldBounds = true;
    this.player.body.fixedRotation = true;
    this.player.body.damping = 0.0;

    game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    
    

    //  Agregamos las animaciones de los movimientos.
    this.player.animations.add('stand', [0, 1, 2], 10, true);
    this.player.animations.add('right', [6, 7, 8, 9, 10, 11, 12, 13], 10, true);
    this.player.animations.add('left', [14, 15, 16, 17, 18, 19, 20, 21], 10, true);
    this.player.animations.add('right-fast', [22, 23, 24, 25], 10, true);
    this.player.animations.add('left-fast', [26, 27, 28, 29], 10, true);
    this.player.animations.add('jump-right', [41], 10, true);
    this.player.animations.add('jump-left', [40], 10, true);
    this.player.animations.add('jump-straight', [30], 10, true);
    this.player.animations.add('pull-right', [42, 43, 44, 45, 46], 10, true);
    this.player.animations.add('pull-left', [47, 48, 49, 50, 51], 10, true);
    this.player.animations.add('push-right', [31, 32], 10, true);
    this.player.animations.add('push-left', [33, 34], 10, true);
    this.player.animations.add('dead', [35, 36, 37, 38, 39], 10, true);
    this.player.animations.add('victory', [54, 30], 3, true);
    this.player.animations.add('down', [53, 54, 55, 56], 10, true);
    
    //Declaramos sonidos
    this.sound_jump = game.add.audio('sound_jump');
    this.sound_laugh = game.add.audio('sound_laugh');
    this.sound_collect = game.add.audio('sound_collect');
    
    this.flag_state = 'normal';
    //this.player.body.onCollide.add(pushRight, this);
    
    this.updatePlayer3D = updatePlayer3D;
    this.movement_Gamepad = movement_Gamepad;
    this.movement_Keyboard = movement_Keyboard;
}

