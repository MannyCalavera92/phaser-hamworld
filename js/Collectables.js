function create_Pipa (posX, posY){
    pipa = game.add.sprite(posX, posY, 'pipa');
    game.physics.p2.enable(pipa, false);
    pipa.body.setCircle(5);
    pipa.body.kinematic = true;
    
    //http://test.xapient.net/phaser/movingplatform-withouttweens.html
    //http://www.html5gamedevs.com/topic/4797-how-to-create-a-moving-platform-to-jump-on-with-p2/
    pipa.topbounds = pipa.body.y ;       //set bounds for later calculations
    pipa.bottombounds = pipa.body.y + 15; //20 defines the distance the platform will move down
    pipa.velo= 50;                         //define the speed for the moving platform
     
    grupo_pipas.add(pipa);
    max_pipas++;
    return pipa;
}

function move_Pipa (pipa){
    if(pipa.body != null){
        if (pipa.body.y > pipa.body.sprite.bottombounds){  pipa.body.sprite.velo *= -1;}
        if (pipa.body.y < pipa.body.sprite.topbounds) { pipa.body.sprite.velo *= -1;}
        pipa.body.velocity.y = pipa.body.sprite.velo;
    }
}

function collect_Pipa (body){
    body.sprite.alpha = 0;
    body.destroy();
    pipas_recogidas++;
}
