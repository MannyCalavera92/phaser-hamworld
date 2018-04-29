/*function createCube (posX, posY, size, image) { //Posicion x, Posicion y, grupo, tamanio, imagen
    block = group.create(posX, posY, image);
    block.body.setSize(size, size, 10, 10);
    block.body.immovable = true;
    return block;
}*/

function createCubo_Paja (posX, posY, size, material) { //Posicion x, Posicion y, tamanio, material(P2) (Crea cubos de paja)
    block = game.add.sprite(posX, posY, 'cubo_paja');

    game.physics.p2.enable(block, false);
    block.body.setRectangle(size, size, 25, 0);
    block.anchor.x = 0.2;
    block.body.static = true;
    //block.body.kinematic = true;
    block.body.setMaterial(material);
        
    mundo.add(block);
    return block;
}

function createCubo_Paja2 (posX, posY, size, material) { //Posicion x, Posicion y, tamanio, material(P2) (Crea cubos de paja)
    block = game.add.sprite(posX, posY, 'cubo_paja2');

    game.physics.p2.enable(block, false);
    block.body.setRectangle(size, size, 25, 0);
    block.anchor.x = 0.2;
    //block.body.static = true;
    //block.body.kinematic = true;
    block.body.mass = 100;
    block.body.data.gravityScale = 0.0;
    block.body.setMaterial(material);
    
    //Aniadimos 3 parametros para el efecto
    block.body.flag_efecto = 0;
    block.body.posX_fija = posX; //Asi guardamos las posiciones y no las que hay cuando se toca el bloque
    block.body.posY_fija = posY;
    
    mundo.add(block);
    return block;
}

function createCubo_Madera (posX, posY, size, material) { //Posicion x, Posicion y, tamanio, material(P2)  (Crea cubos de madera)
    block = game.add.sprite(posX, posY, 'cubo_madera');
    game.physics.p2.enable(block, false);
    
    //block.body.setRectangle(size, size, -30, 0);
    block.body.setRectangle(size, size, -23, 0);
    block.anchor.x = 0.78;
    block.body.fixedRotation = true;
    block.body.setMaterial(material);
    block.body.mass = 50;
    
    mundo.add(block);
    return block;
}

function createCubo_Caramelo (posX, posY, size, material) { //Posicion x, Posicion y, tamanio, material(P2) (Crea cubos de caramelo)
    block = game.add.sprite(posX, posY, 'cubo_caramelo');
    game.physics.p2.enable(block, false);

    block.body.setRectangle(size, size, 25, 0);
    block.anchor.x = 0.2;
    block.body.static = true;
    //block.body.kinematic = true;
    block.body.setMaterial(material);
    
    mundo.add(block);
    return block;
}


function createCubo_Cuadraditos (posX, posY, size, material) { //Posicion x, Posicion y, tamanio, material(P2) (Crea cubos de cuadraditos)
    block = game.add.sprite(posX, posY, 'cubo_cuadraditos');
    game.physics.p2.enable(block, false);
    block.body.setRectangle(size, size, 25, 0);
    block.anchor.x = 0.2;
    //block.body.static = true;
    block.body.kinematic = true;
    //block.body.mass = 50;
    block.body.setMaterial(material);
    
    mundo.add(block);
    return block;
}

function createCubo_Hierba (posX, posY, size, material) { //Posicion x, Posicion y, tamanio, material(P2) (Crea cubos de paja)
    block = game.add.sprite(posX, posY, 'cubo_hierba');

    game.physics.p2.enable(block, false);
    block.body.setRectangle(size, size, 22, 0);
    block.anchor.x = 0.18;
    block.body.static = true;
    block.body.setMaterial(material);
        
    mundo.add(block);
    return block;
}

function createCubo_Hierba2 (posX, posY, size, material, leftbounds, rightbounds, velocity) { //Posicion x, Posicion y, tamanio, material(P2) (Crea cubos de paja)
    block = game.add.sprite(posX, posY, 'cubo_hierba2');

    game.physics.p2.enable(block, false);
    block.body.setRectangle(size, size, 25, 0);
    block.anchor.x = 0.2;
    block.body.kinematic = true;

    block.body.setMaterial(material);
    
    //Aniadimos 4 parametros para el movimiento
    block.name = 'hierba2';
    block.velo = velocity;
    block.leftbounds = leftbounds; 
    block.rightbounds = rightbounds;
    
    mundo.add(block);
    return block;
}

function createCubo_Nube (posX, posY, size, material) { //Posicion x, Posicion y, tamanio, material(P2) (Crea cubos de paja)
    block = game.add.sprite(posX, posY, 'cubo_nube');

    game.physics.p2.enable(block, false);
    block.body.setRectangle(size, size, 22, 0);
    block.anchor.x = 0.18;
    block.body.static = true;
    block.body.setMaterial(material);
        
    mundo.add(block);
    return block;
}

function createCubo_Nube2 (posX, posY, size, material, bottombounds, topbounds, velocity) { //Posicion x, Posicion y, tamanio, material(P2) (Crea cubos de paja)
    block = game.add.sprite(posX, posY, 'cubo_nube');

    game.physics.p2.enable(block, false);
    block.body.setRectangle(size, size, -23, 0);
    block.anchor.x = 0.78;
    block.body.kinematic = true;
    //block.body.sprite.alpha = 0.7;

    block.body.setMaterial(material);
    
    //Aniadimos 4 parametros para el movimiento
    block.name = 'nube2';
    block.velo = velocity;
    block.bottombounds = bottombounds; 
    block.topbounds = topbounds;
    
    mundo.add(block);
    return block;
}


//Hace que los cubos de cuadraditos desaparezcan
function efecto_Cuadraditos (body){
    if (body.sprite.alpha > 0.4){
        body.sprite.alpha -= 0.3;
    }else{
        body.sprite.alpha = 0;
        body.destroy();
    }
}

//Hace que los cubos de paja2 (fake) se caigan
function efecto_Paja2 (body){
    
    if(body.flag_efecto == 0){
        body.static = false;
        body.data.gravityScale = 0.15;
        
        tween = game.add.tween(body).to( { y: game.world.height - body.height }, 1500, Phaser.Easing.Bounce.Out, true, 1500, 1);
        tween.yoyo(true, 1000);

        game.time.events.add(Phaser.Timer.SECOND * 7, createCubo_Paja2, this, body.posX_fija, body.posY_fija, block_size, paja2Material);
        body.flag_efecto = 1; //El Flag permite que no se dupliquen los bloques por tocarlos varias veces   
    }
    
}

//Hace que se cree un efecto de pegamento con el caramelo
function efecto_Caramelo (player3D){
    
    player3D.flag_state = 'pegado'; 
}

//Hace que se cree un efecto de pegamento con el caramelo
function efecto_Madera (player3D, body){
    
    if(checkIfCanJump(player3D.player)){
        player3D.flag_state = 'empujar';
    }
}

function movePlatforms(platform){
    if (platform.body && platform.body.sprite.name == 'hierba2'){   //check for the moving direction 
        if (platform.body.x > platform.body.sprite.rightbounds){  platform.body.sprite.velo *= -1;} //if reached bounds reverse speed
        if (platform.body.x < platform.body.sprite.leftbounds) { platform.body.sprite.velo *= -1;}  // reverse speed
        platform.body.velocity.x = platform.body.sprite.velo;
    } else if (platform.body &&platform.body.sprite.name == 'nube2'){
        if (platform.body.y > platform.body.sprite.bottombounds){  platform.body.sprite.velo *= -1;}
        if (platform.body.y < platform.body.sprite.topbounds) { platform.body.sprite.velo *= -1;}
        platform.body.velocity.y = platform.body.sprite.velo;
    } 
}

function onPresolve(presolve){
  if (c = presolve.contactEquations[0]){
    var yAxis = p2.vec2.fromValues(0, 1);
    var y = p2.vec2.dot(c.normalA, yAxis);
    
    if (c.bodyB.parent.sprite && c.bodyB.parent.sprite.key == 'cubo_nube2' && y >= 0){
        c.enabled = false
        
        if (c.bodyA.parent.velocity.destination[1] < 10 ){
            console.log('velocity almost 0 but still inside the platform - gravity? where are you?')
            c.bodyA.parent.velocity.destination[1]=-10;
        } 
    }
  }
}