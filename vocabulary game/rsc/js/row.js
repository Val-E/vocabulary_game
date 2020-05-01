

/*
 Each q(number)_(number) is a question. The first number is the column (category), the secound is the level. 
 How you add/change question:
 q1_1 = [{'q': 'Your first Question.', 'a': 'the answer', 'p': 'the points for this question' }, ... {'q': '...', 'a': '...', p: '...' }, {'q': 'end'}]
 
 This object is at the end of each list and is not a question, but a necessary flag for the script. Make sure that you did not deleted it! 
 ,{'q': 'end'}
 
 This object is at the start of each list, it is used for counting. Make sure for that you do not delet it will editing.
 {'c': 0},
 */
q1_1 = [{'c': 1}, {'q': 'abhaken', 'a': 'tick', 'p': '1'}, {'q': 'einzigartig', 'a': 'unique', 'p': '1'}, {'q': 'Wahl', 'a': 'election', 'p': '1'}, {'q': 'end'}];
q1_2 = [{'c': 1}, {'q': 'Willenskraft', 'a': 'willpower', 'p': '2'}, {'q': 'Streben', 'a': 'persuit', 'p': '2'}, {'q': 'Melancholie', 'a': 'melancholy', 'p': '2'},{'q': 'end'}];
q1_3 = [{'c': 1}, {'q': 'bedrohlich', 'a': 'threating', 'p': '3'}, {'q': 'denkw&uuml;rdig', 'a': 'memorable', 'p': '3'}, {'q': 'alt, antik', 'a': 'ancient', 'p': '3'},{'q': 'end'}];
q1_4 = [{'c': 1}, {'q': 'Schmelztiegel', 'a': 'melting pot', 'p': '4'}, {'q': 'atemberaubend', 'a': 'breathtaking', 'p': '4'}, {'q': 'geschieden', 'a': 'divorced', 'p': '4'},{'q': 'end'}];
q2_1 = [{'c': 1}, {'q': 'At the end of a ... is a pot of gold.', 'a': 'rainbow', 'p': '1'}, {'q': 'We need a ... to our problem.', 'a': 'solution', 'p': '1'}, {'q': 'end'}];
q2_2 = [{'c': 1}, {'q': 'She used a ... from a speech for her essay.', 'a': 'quote', 'p': '2'}, {'q': 'A lot of English words have Latin ... .', 'a': 'origins', 'p': '2'}, {'q': 'end'}];
q2_3 = [{'c': 1}, {'q': 'The sky is ... us.', 'a': 'above', 'p': '3'}, {'q': 'The fall of the Berlin Wall was a major ... in German history.', 'a': 'event', 'p': '3'}, {'q': 'end'}];
q2_4 = [{'c': 1}, {'q': 'He needed a ... to solve the riddle.', 'a': 'hint', 'p': '4'}, {'q': 'Horror films use ... music to scare the audience. Note: "Scary" IS NOT the solution!', 'a': 'sinister', 'p': '4'}, {'q': 'end'}];
//If you wanne change the audio, you have to edit the path: src='...' or you go replace the mp3 file with your file!
q3_1 = [{'c': 1}, {'q': "<audio controls><source src='../vocabulary game/rsc/misc/q3_1.mp3'></audion", 'a': 'introduce', 'p': 1}, {'q': 'end'}];
q3_2 = [{'c': 1}, {'q': "<audio controls><source src='../vocabulary game/rsc/misc/q3_2.mp3'></audion", 'a': 'exceptional', 'p': 2}, {'q': 'end'}];
q3_3 = [{'c': 1}, {'q': "<audio controls><source src='../vocabulary game/rsc/misc/q3_3.mp3'></audion", 'a': 'leisure', 'p': 3}, {'q': 'end'}];
q3_4 = [{'c': 1}, {'q': "<audio controls><source src='../vocabulary game/rsc/misc/q3_4.mp3'></audion", 'a': 'contemporary', 'p': 4}, {'q': 'end'}];


//the main html-code for the quiz game
quiz_game = 
"<table border='5px'>" +
   "<tr>"+
      "<th>Level</th><th>Translate</th><th>Guess</th><th>Spell</th>" +
   "</tr>" +
   "<tr>"  +
      "<td><center>1</center></td>"+
      "<td><input type='button' value='Question 1' onclick='getquestion(q1_1)'/></td>"+
      "<td><input type='button' value='Question 1' onclick='getquestion(q2_1)'/></td>" +
      "<td><input type='button' value='Listen 1' onclick='getquestion(q3_1)'/></td>" +
   "<tr>" +
      "<td><center>2</center></td>" +
      "<td><input type='button' value='Question 2' onclick='getquestion(q1_2)'/></td>" +
      "<td><input type='button' value='Question 2' onclick='getquestion(q2_2)'/></td>" +
      "<td><input type='button' value='Listen 2' onclick='getquestion(q3_2)'/></td>" +
   "</tr>"+
   "<tr>" +
      "<td><center>3</center></td>"+
      "<td><input type='button' value='Question 3' onclick='getquestion(q1_3)'/></td>"+
      "<td><input type='button' value='Question 3' onclick='getquestion(q2_3)'/></td>"+
      "<td><input type='button' value='Listen 3' onclick='getquestion(q3_3)'/></td>"+
   "</tr>"+
   "<tr>" +
      "<td><center>4</center></td>"+
      "<td><input type='button' value='Question 4' onclick='getquestion(q1_4)'/></td>"+
      "<td><input type='button' value='Question 4' onclick='getquestion(q2_4)'/></td>"+
      "<td><input type='button' value='Listen 4' onclick='getquestion(q3_4)'/></td>"+
   "</tr>"+
"</table>"+
"<hr>";

//the html code for the submit area
submit = "<ul><p>Question: <nav id='question'></nav></p><p><input id='answer' type='text'/><input type='submit' value='answer' onclick='check()'/></p></ul>"
noquestions = "The questions for this level are runned out. Try a another level or a another category!"

//saves the question
question = "";

//saves the correct answer
answer = "take";

//saves the user's answer
useranswer = "";

//save the points
points = 0;

//array archives the points of th and make them assignable
teams = [];

//variables to track rounds and teams
team = 0;
team_count = 0;
round = 0;
round_count = 0;
teams_length = 0;
team_length=0;
i = 0;

//main function 
function quiz() {   
   team = Math.floor(Math.abs(document.getElementById('teams').value));
   round = Math.floor(Math.abs(document.getElementById('rounds').value));
   round_count = team*round;
   teams_length = team;
   team_length = team;
   
   //Error messages, if the players forget to say how many teams they are and how many rounds they want to play.
   if(team == 0 || team == '') {
      alert('Need at least one player/team.');
      return;
   }
   if(round == 0 || round == '') {
         alert('Need at least one round.');
         return;
   }
   
   //adds elements to the array, with the value of 0
   //the value are the points the player gets while playing
   while(team != 0) {
      teams.unshift(0);
      team--;
   }
   
   //creates the game 
   document.getElementById('main').innerHTML = quiz_game;
   document.getElementById('addteams').innerHTML = "";
   document.getElementById('addrounds').innerHTML = "";
}   


//creates the submit area
function setquestion(question) {
   document.getElementById('main').innerHTML = submit;
   document.getElementById('question').innerHTML = question;
}

//function for setting up the questions 
function getquestion(q_id) {
   //setting up z to the name of the object
   //so I can call z instead of checking each objects name
   var z = q_id;
   
   //setting up i to the counting element c at the beginning of each object
   //so I can keep track of the questions, which were asked
   i = z[0].c;
   
   //setting up the question
   question = z[i].q;
   
   //Error message, if no questions are left
   if (question == 'end') {
      alert(noquestions);
      return;
    } 
    
   //increase the counting element by 1 
   z[0].c++;
   
   //set up the answer
   answer = z[i].a;
   
   //set up the points
   points = parseFloat(z[i].p);
   setquestion(question);
}

//function for keeping track of the teams and the rounds
function setcounter() {
   answer = "take";
   teams_length--;
   team_count++;
   if (teams_length == 0) {
      team_count=0;
      teams_length=team_length;
   }
   
   
   round_count--;
   if(round_count==0) {
      //tells the players that the game is over
      alert('The Game is over.');
      var a = 0;
      //creates the result page
      var score = "";
      for (t in teams) {
         a++;
         score = score + "Team/Player" + a + ": " + teams[t] + "; ";
        }
        document.getElementById('main').innerHTML = score;
    }
}

//function for checking the answers
function check() {
    //get the user's answer
    useranswer = document.getElementById('answer').value;
    
    document.getElementById('main').innerHTML="";
    document.getElementById('main').innerHTML= quiz_game;
    
    //Error message, if the player forget to pick a new question.
    if (answer == 'take') {
        alert('Please take a new question!')
        return;
    }
    
    //this if close is true, if the answer is right
    if (answer ==  useranswer) {
        alert("You are right " + "Your answer: " + useranswer + "; " + " Correct answer: " + answer);
        teams[team_count] = teams[team_count] + points;
        setcounter();
        return;
    }
    
    //this if close is true, if the answer is wrong
    else if (answer != useranswer) {
        alert("You are wrong! " + "Your answer: " + useranswer + "; " + " Correct answer: " + answer);
        teams[team_count] = teams[team_count] - points;
        setcounter();
        return;
    }
}
