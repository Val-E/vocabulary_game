/*
 Each q(number)_(number) is a question. The first number is the column (category), the secound is the level. 
 How you add/change question:
 q(1-25) : {'q': 'Your question', your answer}
 */

p = [
{'q': 'abhaken', 'a': 'tick'},
{'q': 'einzigartig', 'a': 'unique'},
{'q': 'Wahl', 'a': 'election'},
{'q': 'Willenskraft', 'a': 'willpower'}, 
{'q': 'Streben', 'a': 'persuit'},
{'q': 'Melancholie', 'a': 'melancholy'},
{'q': 'bedrohlich', 'a': 'threating'},
{'q': 'denkwuerdig', 'a': 'memorable'},
{'q': 'alt, antik', 'a': 'ancient'},
{'q': 'Schmelztiegel', 'a': 'melting pot'},
{'q': 'atemberaubend', 'a': 'breathtaking'}, 
{'q': 'geschieden', 'a': 'divorced'},
{'q': 'At the end of a ... is a pot of gold.', 'a': 'rainbow'},
{'q': 'We need a ... to our problem.', 'a': 'solution'},
{'q': 'She used a ... from a speech for her essay.', 'a': 'quote'},
{'q': 'A lot of English words have Latin ... .', 'a': 'origins'},
{'q': 'The sky is ... us.', 'a': 'above'},
{'q': 'The fall of the Berlin Wall was a major ... in German history.', 'a': 'event'},
{'q': 'He needed a ... to solve the riddle.', 'a': 'hint'}, 
{'q': 'Horror films use ... music to scare the audience.', 'a': 'sinister'},
{'q': '_i_in_ __nd_ti_ns', 'a': 'living conditions'},
{'q': 's___rsti_io_', 'a': 'superstition'},
{'q': 'k__w__d', 'a': 'keyword'},
{'q': 'jew_ll_r_', 'a': 'jewellery'},
{'q': 'a__em_t', 'a': 'attempt'}]

//the html-code of the game
memory_game = 
"<p>"+
"<table border='7px'>"+
   "<center><p>Sentences/Words/Letters/German Words</p></center>"+
   "<tr>"+
      //If you wanne change the position of the words and questions, you have to switch the id (id='') and the functioncall (onclick='').
      "<td id='q0'><center><input onclick='first_pick(0)'  type='button' value='1'></center></td>"+
      "<td id='q1'><center><input onclick='first_pick(1)'  type='button' value='2'></center></td>"+
      "<td id='q24'><center><input onclick='first_pick(24)'type='button' value='3'></center></td>"+
      "<td id='q19'><center><input onclick='first_pick(19)'type='button' value='4'></center></td>"+
      "<td id='q22'><center><input onclick='first_pick(22)'type='button' value='5'></center></td>"+
   "</tr>"+
   "<tr>"+
      "<td id='q7'><center><input onclick='first_pick(7)'  type='button' value='6'></center></td>"+
      "<td id='q8'><center><input onclick='first_pick(8)'  type='button' value='7'></center></td>"+
      "<td id='q14'><center><input onclick='first_pick(14)'type='button' value='8'></center></td>"+      
      "<td id='q20'><center><input onclick='first_pick(20)'type='button' value='9'></center></td>"+
      "<td id='q16'><center><input onclick='first_pick(16)'type='button' value='10'></center></td>"+
   "</tr>"+
   "<tr>"+
      "<td id='q2'><center><input onclick='first_pick(2)'  type='button' value='11'></center></td>"+
      "<td id='q6'><center><input onclick='first_pick(6)'  type='button' value='12'></center></td>"+
      "<td id='q21'><center><input onclick='first_pick(21)'type='button' value='13'></center></td>"+
      "<td id='q23'><center><input onclick='first_pick(23)'type='button' value='14'></center></td>"+
      "<td id='q15'><center><input onclick='first_pick(15)'type='button' value='15'></center></td>"+
   "</tr>"+
   "<tr>"+
      "<td id='q11'><center><input onclick='first_pick(11)'type='button' value='16'></center></td>"+
      "<td id='q13'><center><input onclick='first_pick(13)'type='button' value='17'></center></td>"+
      "<td id='q4'><center><input onclick='first_pick(4)'  type='button' value='18'></center></td>"+
      "<td id='q3'><center><input onclick='first_pick(3)'  type='button' value='19'></center></td>"+
      "<td id='q12'><center><input onclick='first_pick(12)'type='button' value='20'></center></td>"+
   "</tr>"+
   "<tr>"+
      "<td id='q17'><center><input onclick='first_pick(17)'type='button' value='21'></center></td>"+
      "<td id='q9'><center><input onclick='first_pick(9)'  type='button' value='22'></center></td>"+
      "<td id='q18'><center><input onclick='first_pick(18)'type='button' value='23'></center></td>"+
      "<td id='q10'><center><input onclick='first_pick(10)'type='button' value='24'></center></td>"+
      "<td id='q5'><center><input onclick='first_pick(5)'  type='button' value='25'></center></td>"+
   "</tr>"+
"</table>"+
"<table border='7px'>"+
   "<center><p>English Words</p></center>"+
   "<tr>"+
      "<td id='a0'><center><input onclick='second_pick(0)'  type='button' value='1'></center></td>"+
      "<td id='a5'><center><input onclick='second_pick(5)'  type='button' value='2'></center></td>"+
      "<td id='a6'><center><input onclick='second_pick(6)'  type='button' value='3'></center></td>"+
      "<td id='a8'><center><input onclick='second_pick(8)'  type='button' value='4'></center></td>"+
      "<td id='a1'><center><input onclick='second_pick(1)'  type='button' value='5'></center></td>"+
   "</tr>"+
   "<tr>"+
      "<td id='a7'><center><input onclick='second_pick(7)'  type='button' value='6'></center></td>"+
      "<td id='a11'><center><input onclick='second_pick(11)'type='button' value='7'></center></td>"+
      "<td id='a20'><center><input onclick='second_pick(20)'type='button' value='8'></center></td>"+      
      "<td id='a19'><center><input onclick='second_pick(19)'type='button' value='9'></center></td>"+
      "<td id='a15'><center><input onclick='second_pick(15)'type='button' value='10'></center></td>"+
   "</tr>"+
   "<tr>"+
      "<td id='a4'><center><input onclick='second_pick(4)'  type='button' value='11'></center></td>"+
      "<td id='a22'><center><input onclick='second_pick(22)'type='button' value='12'></center></td>"+
      "<td id='a18'><center><input onclick='second_pick(18)'type='button' value='13'></center></td>"+
      "<td id='a9'><center><input onclick='second_pick(9)'  type='button' value='14'></center></td>"+
      "<td id='a23'><center><input onclick='second_pick(23)'type='button' value='15'></center></td>"+
   "</tr>"+
   "<tr>"+
      "<td id='a12'><center><input onclick='second_pick(12)'type='button' value='16'></center></td>"+
      "<td id='a2'><center><input onclick='second_pick(2)'  type='button' value='17'></center></td>"+
      "<td id='a17'><center><input onclick='second_pick(17)'type='button' value='18'></center></td>"+
      "<td id='a10'><center><input onclick='second_pick(10)'type='button' value='19'></center></td>"+
      "<td id='a3'><center><input onclick='second_pick(3)'  type='button' value='20'></center></td>"+
   "</tr>"+
   "<tr>"+
      "<td id='a13'><center><input onclick='second_pick(13)'type='button' value='21'></center></td>"+
      "<td id='a24'><center><input onclick='second_pick(24)'type='button' value='22'></center></td>"+
      "<td id='a16'><center><input onclick='second_pick(16)'type='button' value='23'></center></td>"+
      "<td id='a21'><center><input onclick='second_pick(21)'type='button' value='24'></center></td>"+
      "<td id='a14'><center><input onclick='second_pick(14)'type='button' value='25'></center></td>"+
   "</tr>"+
"</table>"+
"</p>"

//saves your picks
f_pick = "";
f_id   = 0;
s_pick = "";
s_id   = 0;
//number of rounds (50 cards = 25 rounds)
rounds = 25;

//keeps track of the teams
team = 0;
team_count = 0;
teams_length = 0;
team_length=0;
teams = [];

//main function
function memory() {
   team = Math.floor(Math.abs(document.getElementById('teams').value));
   teams_length = team;
   team_length = team;

   if(team == 0 || team == '') {
      alert('Need at least one player/team.');
      return;
   }
   
   while(team != 0) {
      teams.unshift(0);
      team--;
   }
   
   document.getElementById('addteams').innerHTML = "";
   document.getElementById('addrounds').innerHTML = "";
   document.getElementById('main').innerHTML = memory_game;
   
}

//function for the first pick
function first_pick(q_id) {
   //Error message, if the user picks a card from the wrong table
   if(f_pick != "") { 
      alert("You will not found the right card in this table."); 
      return;
   }
   
   //set up pick
   else if (f_pick == "") {
      var z = q_id;
      f_pick = p[z].q;
      alert(f_pick);
      f_id = z; 
   }
   check_pick();
}

//function for the secound pick
function second_pick(q_id) {
   //Error message, if the user picks a card from the wrong table
   if(s_pick != "") { 
      alert("You will not found the right card in this table."); 
      return;
   }
   
   //set up pick
   else if (s_pick == "") {
      var z = q_id;
      s_pick = p[z].a;
      alert(s_pick);
      s_id = z;
   }
   check_pick();
}

//function for tracking teams and their points
function players() {
   team_count++;
   if (teams_length == team_count) {
      team_count=0;
      teams_length=team_length;
   }
}

//function for creating the result page 
function end() {
   alert('The Game is over.');
   //creates the result page
   var a = 0;
   var score = "";
   for (t in teams) {
      a++;
      score = score + "Team/Player" + a + ": " + teams[t] + "; ";
   }
   document.getElementById('main').innerHTML = score;
}

//check the picks
function check_pick() {
   if(s_pick != "" ) {
      if(f_pick != "") {            
            //reset question setup
            s_pick = "";
            f_pick = "";
         if(f_id == s_id) {
            alert('You got the pick');
            //removes the cards
            document.getElementById('q' + f_id).innerHTML = "";
            document.getElementById('a' + s_id).innerHTML = "";
            //add points
            teams[team_count] = teams[team_count]+1;
            rounds--;
            //check are cards left
            if(rounds == 0) { end(); }
            //go out before you, teams and
            return;
         }
         else { 
            alert('Wrong pick.');
         }
         //resets the ids of the picks 
         s_id = 0;
         f_id = 0;
         
         //makes the over player able to make his turn
         players();
      }     
   }
}
