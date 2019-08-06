/*
 * Constructs a game 
 */
var Game = function(autoPlayer) {
    

    // initilize an AI
    this.ai = autoPlayer;

    // initiate state
    this.currentState = new State();

    // setup board
    this.currentState.board = ["E", "E", "E",
                               "E", "E", "E",
                               "E", "E", "E"];

    // randome first turn
    this.currentState.turn = Game.randomTurn(); 

    // initiate status of game
    this.status = "beginning";

     // advance the game to new state
    this.advanceTo = function(_state) {
        this.currentState = _state;
        if(_state.isTerminal()) {
            this.status = "ended";

            if(_state.result === "X-won")
                //X won
                ui.switchViewTo("won");
            else if(_state.result === "O-won")
                //X lost
                ui.switchViewTo("lost");
            else
                //it's a draw
                ui.switchViewTo("draw");
        }
        else {
            //the game is still running

            if(this.currentState.turn === "X") {
                ui.switchViewTo("human");
            }
            else {
                // ui.switchViewTo("human");

                //notify the AI player its turn has come up
                this.ai.notify("O");
            }
        }
    };

    // start the game
    this.start = function() {
        if(this.status = "beginning") {
            //invoke advanceTo with the initial state
            this.advanceTo(this.currentState);
            this.status = "running";
        }
    }

};

 // calculate the score of the x player in give terminal state
Game.score = function(_state) {
    if(_state.result === "X-won"){
        // the x player won
        return 10 - _state.oMovesCount;
    }
    else if(_state.result === "O-won") {
        //the x player lost
        return - 10 + _state.oMovesCount;
    }
    else {
        //it's a draw
        return 0;
    }
}

 // set random first turn
Game.randomTurn = function(){
    var turn = '';
    var characters = 'XOXOXO';
    var charactersLength = characters.length;
    for ( var i = 0; i < 1; i++ ) {
      turn += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return turn;
}
