# vocabulary_game
Discription: 
This is a little collection of games focused on training german students, who are learning english.

Game Rules:

Quiz:
You have to choose a category and a level.
In the first category you have to translate form German to English.
In the second category you have to guess which word fits best.
And in the last category you have to listen to a word and after listening, to spell it correctly.
If you choose level one and your answer is correct you get one point, but if your answer is wrong you lose one point.
Level 2; 3 and 4 work the same way, except for the points. The points are corresponding with the level.

4 in a row:
Throw your balls from the top to the bottom.
Try to get four balls of your color in a horizontal, vertical or diaganol row to win. 
Each Player/Team throw alternately, but before throwing the Team/Player has to answer a question, do a challenge etc.
If the answer is correct, the ball will be thrown and if the answer is wrong, the ball will not be thrown.

Memory:
Each player has to pick one card from each table.
The first table contents:
-german words and the player has to find a translation in the over table,
-sentences, where a word is missing, and the player has to find in the over table the word, which fits,
-or words with missing letters and the player has to find the full word in the over table.
If the player pick correctly, the two cards will be removed from the game and the player can pick again.
If he picks wrong, the over player can make his pick.

Software requirements:
Browser, which supports html5 and Javascipt.
Recommended browser: Chromium 81 or later

Configuration:
The current vocabularies are from A1 - C12, Theme 3 Camden Town 6.

Quiz:
In order to change the questions, their order, the answers or the points go to rsc/js/quiz.js and follow the instruction there!

Row:
In order to change the questions, their order or the answers go to rsc/js/row.js and follow the instruction there!

Memory:
In order to change the questions or the answers go to rsc/js/memory.js and follow the instruction there!
Note: If you wanne change the position of the cards, you will need to scroll down to the variable named memory_game.

Debug:
Problems with starting the game: If you are not able to start the games using the buttons, start with F12 Dev-Tool, go to the console and execute 'quiz()' for the quiz game or 'row()' for the 4 in a row game.
Problems with chars: HTML has the char-codes for the english letters. If you need "Umlaute" page 95 of the "Das große Tafelwerk 2.0" explains how to create them. 


© Copyright:
I do not own the concepts of the games.
Feel free to use and edit this code.
