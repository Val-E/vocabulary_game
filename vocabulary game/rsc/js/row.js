
challenges = [
/* You can add here your questions. 
   Form: {'q':"Your Question", 'a': 'Your answer'},
   The questions will be asked in the ordere in which they are listed here.
   If you play without skipping make sure to have at least 42 questions/challenges/etc. !
   If you play more add as much as possible.
 */
{'q':'Regenbogen', 'a':'rainbow'}, 
{'q':'visuell', 'a':'visual'},
{'q':'wie (zum Beispiel)', 'a':'such as'}, 
{'q':'&Uuml;berw&auml;ltigend', 'a':'overwhelming'},
{'q':'Mehrheit', 'a':'majority'}, 
{'q':"zu jdm/etw passen (Note: Just the word, without 'jdm/etw' or 'to')", 'a':'suit'},
{'q':'alt, antik', 'a': 'ancient'}, 
{'q':'Landschaft (Note: landscape is not meant)', 'a':'scenery'},
{'q':'jenenseits (von), &uuml;ber', 'a':'beyond'}, 
{'q':'unvergesslich', 'a':'unforgettable'},
{'q':'Schmelztiegel', 'a':'melting pot'}, 
{'q':'Kreativit&auml;t', 'a':'creativity'},
{'q':'atemberaubend', 'a':'breathtaking'}, 
{'q':'Disziplin', 'a':'discipline'},
{'q':'Welle', 'a':'wave'}, 
{'q':'Freizeit', 'a':'leisure'},
{'q':'umgebend', 'a':'surrounding'}, 
{'q':'Streben', 'a':'pursuit'},
{'q':'großartig, fantastisch, toll', 'a':'terrific'}, 
{'q':'einzigartig', 'a':'unique'},
{'q':'abhaken', 'a':'tick'}, 
{'q':'im Gegensatz zu', 'a':'in contrast to'},
{'q':'(be)f&ouml;rdern, aufsteigen; hier: werben für', 'a':'promote'}, 
{'q':'Apartheid', 'a':'apartheid'},
{'q':'aushängen, an(zeigen)', 'a':'display'}, 
{'q':'vorstellen; hier: einführen', 'a':'introduce'},
{'q':'Ziel, Tor', 'a':'goal'}, 
{'q':'vereinigen, verbinden', 'a':'unite'},
{'q':'deshalb, deswegen, daher', 'a':'therefore'}, 
{'q':'erf&uuml;llen, verwirklichen', 'a':'fulfil'},
{'q':'(sich) bewegend', 'a':'moving'}, 
{'q':'akkurat', 'a':'accurate'},
{'q':'authentisch', 'a':'authentic'}, 
{'q':'Einkommen', 'a':'income'},
{'q':'sch&auml;tzen, zu schätzen wissen', 'a':'appreciate'}, 
{'q':'beruhigend', 'a':'calming'},
{'q':'Zitat', 'a':'quote'}, 
{'q':'oberhalb', 'a':'above'},
{'q':'hoffnungslos', 'a':'hopeless'}, 
{'q':'Bilderrahmen', 'a':'frame'},
{'q':'Ursprung, Herkunft', 'a':'origin'}, 
{'q':'Prozentsatz', 'a':'percentage'},
{'q':'If you see this, you have a draw, you skipped to much questions and now we are runned out of them or you broke the program.', 'a':''}
]

//html-code for the game
row_game=
"<table>"+
"<tr>" +
   "<td id='r00' onclick='createchallenge(0)'> </td>" +
   "<td id='r01' onclick='createchallenge(1)'> </td>" +
   "<td id='r02' onclick='createchallenge(2)'> </td>" +
   "<td id='r03' onclick='createchallenge(3)'> </td>" +
   "<td id='r04' onclick='createchallenge(4)'> </td>" +
   "<td id='r05' onclick='createchallenge(5)'> </td>" +
   "<td id='r06' onclick='createchallenge(6)'> </td>" +
"</tr>" +
"<tr>" +
   "<td id='r10'> </td>" +
   "<td id='r11'> </td>" +
   "<td id='r12'> </td>" +
   "<td id='r13'> </td>" +
   "<td id='r14'> </td>" +
   "<td id='r15'> </td>" +
   "<td id='r16'> </td>" +
"</tr>" +
"<tr>" +
   "<td id='r20'> </td>" +
   "<td id='r21'> </td>" +
   "<td id='r22'> </td>" +
   "<td id='r23'> </td>" +
   "<td id='r24'> </td>" +
   "<td id='r25'> </td>" +
   "<td id='r26'> </td>" +
"</tr>" +
"<tr>" +
   "<td id='r30'> </td>" +
   "<td id='r31'> </td>" +
   "<td id='r32'> </td>" +
   "<td id='r33'> </td>" +
   "<td id='r34'> </td>" +
   "<td id='r35'> </td>" +
   "<td id='r36'> </td>" +
"</tr>" +
"<tr>" +
   "<td id='r40'> </td>" +
   "<td id='r41'> </td>" +
   "<td id='r42'> </td>" +
   "<td id='r43'> </td>" +
   "<td id='r44'> </td>" +
   "<td id='r45'> </td>" +
   "<td id='r46'> </td>" +
"</tr>" +
"<tr>" +
   "<td id='r50'> </td>" +
   "<td id='r51'> </td>" +
   "<td id='r52'> </td>" +
   "<td id='r53'> </td>" +
   "<td id='r54'> </td>" +
   "<td id='r55'> </td>" +
   "<td id='r56'> </td>" +
"</tr>" +
"</table>"+
"<link rel='stylesheet' type='text/css' href='./rsc/css/row.css'>"

//counts which questions are used
counter = 0;

//saves the question
cha = "";

//saves the answer
ans = "";

//saves the id of the question
quest_id = 0;

//keeps track of players
cur = 1;
s1 = "red";
s2 = "yellow";

//creating an array for keeping track of the balls
arr = [];
for(var a=0;a<6;a++) {
   arr[a] = [0,0,0,0,0,0,0];
}

function row() {
   document.getElementById('main').innerHTML = row_game;
   document.getElementById('addteams').innerHTML = "";
   document.getElementById('addrounds').innerHTML = "";
}
function challenge() {
   var answer = document.getElementById('answer').value;
   document.getElementById('submitter1').innerHTML= "";
   document.getElementById('submitter2').innerHTML= "";
   if (answer == ans) { move(quest_id); }
   else if (answer != ans) { alert('Your answer: ' + answer + '; Correct answer: ' + ans); }
}

//function for creating the submit area and setting up the question
function createchallenge(id) {
   quest_id = id;
   cha = challenges[counter].q;
   ans = challenges[counter].a;
   counter++;
   if(cur==1) {cur = 2;}
   else if(cur==2) {cur = 1;}
   document.getElementById('submitter1').innerHTML= "<p>Question: </p><p>" + cha + "</p>";
   document.getElementById('submitter2').innerHTML= "<p><input type='text' id='answer'/><input type='submit' onclick='challenge()'/></p>";
   
}

/*
 The following functions are checking if someone wins
 */
function check_r(a) {
   var c=0;
   var c2=0;
   for(var x=0;c<4&&c2<4&&x<7;x++) {
       if(a[x] == 1){
          c++;
          c2=0; 
       }
       else if(a[x] == 2) {
          c=0;
          c2++; 
       }
       else{
          c=0;
          c2=0;
       }
   }
   if(c==4) return 1;
   else if(c2==4) return 2;
   else return 0;
}

function check_row() {
   for(var z=0;z<6;z++) {
       var win = check_r(arr[z]);
       if (win != 0) return win;
   }
   return 0;
}

function check_c(z) {
   var c=0;
   var c2=0;
   for(var x=0;c<4&&c2<4&&x<6;x++) {
       if(arr[x][z] == 1){
          c++;
          c2=0; 
       }
       else if(arr[x][z] == 2){
          c=0;
          c2++; 
       }
       else{
          c=0;
          c2=0;
       }
   }
   if(c==4) return 1;
   else if(c2==4) return 2;
   else return 0;
}

function check_column() {
   for(var s=0;s<7;s++) {
       var win = check_c(s);
       if (win != 0) return win;
   }
   return 0;
}

function diag1(x,y) {
    var c=0;
    var c2=0;
    var max=0;
    if (x==2) max=4;
    else if(x==1) max=5;
    else if(x==0){
       if(y==0||y==1) max=6;
       else if(y==2) max=5;
       else if(y==3) max=4;
    }
    for(var a=0;a<max;a++) {
        if(arr[x][y]==1) {
           c++;
           c2=0; 
        }
        else if(arr[x][y]==2) {
           c=0;
           c2++; 
        }
        else if(arr[x][y]==0) {
           c=0;
           c2=0; 
        }
        x++;
        y++;
    }
    if(c==4)return 1;
    else if(c2==4)return 2;
    else return 0;
}

function diag2(x,y) {
    var c=0;
    var c2=0;
    var max=0;
    if (x==2) max=4;
    else if(x==1) max=5;
    else if(x==0){
       if(y==5||y==6) max=6;
       else if(y==4) max=5;
       else if(y==3) max=4;
    }
    for(var a=0;a<max;a++) {
        if(arr[x][y]==1) {
           c++;
           c2=0; 
        }
        else if(arr[x][y]==2) {
           c=0;
           c2++; 
        }
        else if(arr[x][y]==0) {
           c=0;
           c2=0; 
        }
        x++;
        y--;
    }
    if(c==4)return 1;
    else if(c2==4)return 2;
    else return 0;
}
function check_diag1() {
    for(var a=0;a<3;a++) {
       for(var b=0;b<4;b++) {
          var win = diag1(a,b);
          if(win!=0)return win;
       }
    }
    return 0;
}
function check_diag2() {
    for(var a=0;a<3;a++) {
       for(var b=3;b<7;b++) {
          var win = diag2(a,b);
          if(win!=0)return win;
       }
    }
    return 0;
}
function check_diagonal() {
   var win = check_diag1();
   if(win==0){
      win = check_diag2();
   }
   if(win!=0){
    return win;
   }
   return 0;
}

//check is someone winning
function check_win() {
   var win = check_column();
   if(win==0) win = check_row();
   if(win==0) win = check_diagonal();
   if(win!=0) {
       if (win=='1') { var winpic = "<img height=500px width=900px src='./rsc/images/redwin.jpg'/>"; }
       if (win=='2') { var winpic = "<img height=500px width=900px src='./rsc/images/yellowwin.jpg/>";}
       document.getElementById('main').innerHTML= winpic;
   }
}
 //makes the move 
function move(row) {
    var check = false;
    for (var series=5;check == false&&series>=0;series--) {
       if (arr[series][row] == 0) {
          var n = "r"+series+row;
          check = true;
          if(cur==1) {
              arr[series][row] = cur; document.getElementById(n).style.background = s1;
          }
          else if(cur==2) {
              arr[series][row] = cur; document.getElementById(n).style.background = s2;
          }
          check_win();
       }
       else{
          if(series==0) {
             alert("The column is full, try another one!");
          }
        }
    }
}
