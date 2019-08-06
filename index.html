<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>TicTacToe</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/app.css">
  </head>
  <body>
    <div class="main-container">
      <div class="board">
        <!-- data-indx following cell divs represents cell index in 1D array representation -->
        <div class="cell" data-indx = "0" ></div>
        <div class="cell" data-indx = "1" ></div>
        <div class="cell" data-indx = "2" ></div>
        <div class="cell" data-indx = "3" ></div>
        <div class="cell" data-indx = "4" ></div>
        <div class="cell" data-indx = "5" ></div>
        <div class="cell" data-indx = "6" ></div>
        <div class="cell" data-indx = "7" ></div>
        <div class="cell" data-indx = "8" ></div>
      </div>
      <div class="control">
        <!-- div.intial displays the starting controls -->
        <div class="intial">
          <div class="start"> Start </div>
        </div>
        <!-- div.ingame displays in-game messages and controls -->
        <div class="ingame" id="human">It's your turn ...</div>
        <div class="ingame" id="ai">
          <img src="images/robot.png" id = "robot" class= "robot" />
          <p>Waint for it ...</p>
        </div>
        <div class="ingame" id="won">You won !
          <div class="start"> Start </div>
        </div>
        <div class="ingame" id="lost">You lost !
          <div class="start"> Start </div>
        </div>
        <div class="ingame" id="draw">
          It's a Draw
          <div class="start"> Start </div>
        </div>
      </div>
    </div>
    <!-- Optional JavaScript <--></-->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/app.js"></script>
    <script src="js/tictactoe.js"></script>
    <script>
      $(document).ready(function(){
        var globals = {};
        /*
         * start game action
         */
        $(".start").click(function() {
          // clear the board
          $(".cell").each(function() {
              var $this = $(this);
              $this.removeClass('occupied').html('');
          });
          //setup AI and Game
          var aiPlayer = new AI();
          globals.game = new Game(aiPlayer);
          aiPlayer.plays(globals.game);

          //start the game
          globals.game.start();
        });
        
        /*
         * click and set the cell 
         */
        $(".cell").each(function() {
          var $this = $(this);
          $this.click(function() {
            // validate the game status is running, the current turn is player, and the cell is empty
            if (globals.game.status === "running" && globals.game.currentState.turn === "X" && !$this.hasClass('occupied')) {
              var indx = parseInt($this.data("indx"));
              var next = new State(globals.game.currentState);
              next.board[indx] = "X";
              ui.insertAt(indx, "X");
              next.advanceTurn();
              globals.game.advanceTo(next);
            }
          });
        });
      });
      
    </script>
  </body>
</html>