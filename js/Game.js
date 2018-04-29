
// Initialise Phaser
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

// Define our 'global' variable
game.global = {
    score: 0
};

world_scale = 1.5;

// Add all the states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('title', titleState);
//game.state.add('play', playState);
game.state.add('level_1', level_1State);
game.state.add('level_2', level_2State);
game.state.add('level_3', level_3State);
game.state.add('level_4', level_4State);
game.state.add('level_5', level_5State);
game.state.add('level_6', level_6State);
game.state.add('PrincipalMenu', PrincipalMenuState);
game.state.add('level_menu', level_menuState);
// Start the 'boot' state
game.state.start('boot');