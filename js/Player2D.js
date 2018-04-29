var inverted = false;
var isflying = false;
//Funcion de update de PLayer2D

function updatePlayer2D(inv) {
    if(!isflying){
        this.inverted = inv;

        if(inv){
            this.player.animations.play('invertRight');
        }else{
            this.player.animations.play('right');
        }

        this.player.body.velocity.x = 300;
    } else {
        this.player.animations.play('fall');
    }
    
    //Elegimos entre mando o teclado
    if(game.input.gamepad.supported && game.input.gamepad.active && game.input.gamepad.pad1.connected){
        this.movement_Gamepad_2D();
    }else{
        this.movement_Keyboard_2D();
    }

}
    
function checkIfCanJump (player) {

    var yAxis = p2.vec2.fromValues(0, 1);
    var result = false;

    for (var i = 0; i < game.physics.p2.world.narrowphase.contactEquations.length; i++)
    {
        var c = game.physics.p2.world.narrowphase.contactEquations[i];

        if (c.bodyA === player.body.data || c.bodyB === player.body.data)
        {
            var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
            if (c.bodyA === player.body.data) d *= -1;
            if (d > 0.5) result = true;
        }
    }

    return result;

}

function checkIfCanJumpInvert (player) {

    var yAxis = p2.vec2.fromValues(0, 1);
    var result = false;

    for (var i = 0; i < game.physics.p2.world.narrowphase.contactEquations.length; i++)
    {
        var c = game.physics.p2.world.narrowphase.contactEquations[i];

        if (c.bodyA === player.body.data || c.bodyB === player.body.data)
        {
            var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
            if (c.bodyA === player.body.data) d *= -1;
            if (d < 0.5) result = true;
        }
    }

    return result;

}

function movement_Gamepad_2D(){
    
    if(isflying ){
        if(buttonA.isDown){
            this.player.animations.play('fly');
            this.player.body.moveUp(300);
        }
        return;
    }
    
    if (buttonA.isDown && checkIfCanJumpInvert(this.player)){
        if(this.inverted){
            this.player.animations.play('invertJump');
            this.player.body.moveDown(600);
        }
    }

    if (buttonA.isDown)
    {
        if(this.inverted && checkIfCanJumpInvert(this.player)){
            this.player.animations.play('invertJump');
            this.player.body.moveDown(600);
        }else if(!this.inverted && checkIfCanJump(this.player)){
            this.player.animations.play('jump');
            this.player.body.moveUp(600);
        }
        
    }
    if(this.inverted && !checkIfCanJumpInvert(this.player)){
        this.player.animations.play('invertJump');
    }
    if(!this.inverted && !checkIfCanJump(this.player)){
        this.player.animations.play('jump');
    }
    
}

function movement_Keyboard_2D(){
    
    if(isflying){
        if(up_key.isDown || w_key.isDown ){
            this.player.animations.play('fly');
            this.player.body.moveUp(300);
        }
        return;
    }
    
    if ((up_key.isDown || w_key.isDown) && checkIfCanJumpInvert(this.player)){
        if(this.inverted){
            this.player.animations.play('invertJump');
            this.player.body.moveDown(600);
        }
    }

    if (up_key.isDown || w_key.isDown)
    {
        if(this.inverted && checkIfCanJumpInvert(this.player)){
            this.player.animations.play('invertJump');
            this.player.body.moveDown(600);
        }else if(!this.inverted && checkIfCanJump(this.player)){
            this.player.animations.play('jump');
            this.player.body.moveUp(600);
        }
        
    }
    if(this.inverted && !checkIfCanJumpInvert(this.player)){
        this.player.animations.play('invertJump');
    }
    if(!this.inverted && !checkIfCanJump(this.player)){
        this.player.animations.play('jump');
    }
}


//Constructor de Player3D   
function Player2D(posX, posY, check) { //Posicion x, Posicion y
    
    isflying = check;
    if(!isflying){
        //  Generamos el jugador y le otorgamos animaciones
        this.player = game.add.sprite(posX, posY, 'tinyFlurflis');
        this.player.animations.add('jump', [0], 10, true);
        this.player.animations.add('right', [1, 2, 3, 0], 10, true);
        this.player.animations.add('drown', [4],true);
        this.player.animations.add('shock', [5],true);
        this.player.animations.add('invertShock', [9],true);
        this.player.animations.add('invertRight', [13, 14, 15, 12], 10, true);
        this.player.animations.add('invertJump', [12], 10, true);
    }else{
        this.player = game.add.sprite(posX, posY, 'flurflisflying');
        this.player.animations.add('fly', [0], 10, true);
        this.player.animations.add('fall', [1], 10, true);
        this.player.animations.add('flyingShock', [2], 10, true);
        this.player.animations.add('flyingVictory', [4,5,6,7], 10, true);
    }
    game.physics.p2.enable(this.player);

    
    //  Player physics properties.
    this.player.body.setCircle(23,0,0);
    this.player.body.fixedRotation = true;
    this.player.body.collideWorldBounds = true;
    this.player.damping = 0;
    
    shock = game.add.audio('shock');
    splash = game.add.audio('splash');
    
    this.updatePlayer2D = updatePlayer2D;
    this.movement_Gamepad_2D = movement_Gamepad_2D;
    this.movement_Keyboard_2D = movement_Keyboard_2D;
    
}