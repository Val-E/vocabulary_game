

/*
 Each q(...) is a question. The first number is the column (category), the secound is the (level). If you a 
 How you add question:
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
      "<td><center>3</center></td>"+
      "<td><input type='button' value='Question 4' onclick='getquestion(q1_4)'/></td>"+
      "<td><input type='button' value='Question 4' onclick='getquestion(q2_4)'/></td>"+
      "<td><input type='button' value='Listen 4' onclick='getquestion(q3_4)'/></td>"+
   "</tr>"+
"</table>"+
"<hr>";

submit = "<ul><p>Question: <nav id='question'></nav></p><p><input id='answer' type='password'/><input type='submit' value='answer' onclick='check()'/></p></ul>"
noquestions = "The questions for this level are runned out. Try a another level or a another category!"
question = "";
answer = "take";
useranswer = "";
points = 0;
teams = [];
team = 0;
team_count = 0;
round = 0;
round_count = 0;
teams_length = 0;
team_length=0;
i = 0;

function quiz() {   
   team = Math.floor(Math.abs(document.getElementById('teams').value));
   round = Math.floor(Math.abs(document.getElementById('rounds').value));
   round_count = team*round;
   teams_length = team;
   team_length = team;
   
   if(team == 0 || team == '') {
      alert('Need at least one player/team.');
      return;
   }
   if(round == 0 || round == '') {
         alert('Need at least one round.');
         return;
   }
   
   while(team != 0) {
      teams.unshift(0);
      team--;
   }
   
   document.getElementById('main').innerHTML = quiz_game;
   document.getElementById('addteams').innerHTML = "";
   document.getElementById('addrounds').innerHTML = "";
}   



function setquestion(question) {
   document.getElementById('main').innerHTML = submit;
   document.getElementById('question').innerHTML = question;
   
}

function getquestion(q_id) {
   var z = q_id;
   i = z[0].c;
   
   question = z[i].q;
   if (question == 'end') {
      alert(noquestions);
      return;
    }

   z[0].c++;
   answer = z[i].a;
   points = parseFloat(z[i].p);
   setquestion(question);
}

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
      alert('The Game is over.');
      var a = 0;
      var score = "";
      for (t in teams) {
         a++;
         score = score + "Team/Player" + a + ": " + teams[t] + "; ";
        }
        document.getElementById('main').innerHTML = score;
    }
}


function check() {
    useranswer = document.getElementById('answer').value;
    document.getElementById('main').innerHTML="";
    document.getElementById('main').innerHTML= quiz_game;
        
    if (answer == 'take') {
        alert('Please take a new question!')
        return;
    }
    
    if (answer ==  useranswer) {
        alert("You are right");
        teams[team_count] = teams[team_count] + points;
        setcounter();
        return;
    }
    
    else if (answer != useranswer) {
        alert("You are wrong!");
        teams[team_count] = teams[team_count] - points;
        setcounter();
        return;
    }
}
