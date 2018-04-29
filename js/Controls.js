function bindControls (){
    
    game.input.gamepad.start();
    
    //Mapeado de Xbox360, supuestamente estan en orden: XBOX360_A = 0 = BUTTON_0
    if(game.input.gamepad.supported && game.input.gamepad.active && game.input.gamepad.pad1.connected){
        
        pad = game.input.gamepad.pad1;
        
        //Botones dcha
        buttonA = pad.getButton(Phaser.Gamepad.XBOX360_A);
        buttonB = pad.getButton(Phaser.Gamepad.XBOX360_B);
        buttonX = pad.getButton(Phaser.Gamepad.XBOX360_X);
        buttonY = pad.getButton(Phaser.Gamepad.XBOX360_Y);

        //Bumpers
        bumperL = pad.getButton(Phaser.Gamepad.XBOX360_LEFT_BUMPER);
        bumperR = pad.getButton(Phaser.Gamepad.XBOX360_RIGHT_BUMPER);

        //Gatillos
        leftTriggerButton = pad.getButton(Phaser.Gamepad.XBOX360_LEFT_TRIGGER);
        rightTriggerButton = pad.getButton(Phaser.Gamepad.XBOX360_RIGHT_TRIGGER);
        

        //Select y Start
        buttonBack = pad.getButton(Phaser.Gamepad.XBOX360_BACK);
        buttonStart = pad.getButton(Phaser.Gamepad.XBOX360_START);
        
        //L3 y R3
        buttonL3 = pad.getButton(Phaser.Gamepad.XBOX360_STICK_LEFT_BUTTON);
        buttonR3 = pad.getButton(Phaser.Gamepad.XBOX360_STICK_RIGHT_BUTTON);

        //Cruceta
        buttonDPadUp = pad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP);
        buttonDPadDown = pad.getButton(Phaser.Gamepad.XBOX360_DPAD_DOWN);
        buttonDPadLeft = pad.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT);
        buttonDPadRight = pad.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT);

        
        //Sitcks Izdo y Dcho
        //  On FF 0 = Y, 1 = X, 2 = Y, 3 = X, 4 = left bumper, 5 = dpad left, 6 = dpad right
        stickLeftX = pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X);
        stickLeftY = pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y);
        stickRightX = pad.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X);
        stickRightY = pad.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y);
      
    }else{
        space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        shift_key = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
        w_key = game.input.keyboard.addKey(Phaser.Keyboard.W);
        s_key = game.input.keyboard.addKey(Phaser.Keyboard.S);
        a_key = game.input.keyboard.addKey(Phaser.Keyboard.A);
        d_key = game.input.keyboard.addKey(Phaser.Keyboard.D);
        
        left_key = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        up_key = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        right_key = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        down_key = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    }
}

function bindSimpleControls () {
    
    game.input.gamepad.start();
    
    //Mapeado de Xbox360, supuestamente estan en orden: XBOX360_A = 0 = BUTTON_0
    if(game.input.gamepad.supported && game.input.gamepad.active && game.input.gamepad.pad1.connected){
        
        pad = game.input.gamepad.pad1;
        
        //Botones dcha
        buttonA = pad.getButton(Phaser.Gamepad.XBOX360_A);
        

        //Select y Start
        buttonBack = pad.getButton(Phaser.Gamepad.XBOX360_BACK);
        buttonStart = pad.getButton(Phaser.Gamepad.XBOX360_START);

        //Cruceta
        buttonDPadUp = pad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP);
      
    }else{
        space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        up_key = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    }
}
