function send()
{
num_1= document.getElementById("num_1").value;
num_2= document.getElementById("num_2").value;

actual_ans= parseInt(num_1) * parseInt(num_2);

question_number="<h1>" + num_1 + "&nbsp" + "X" + "&nbsp" +num_2 + "</h1>";
input_box= "<br> Answer : <input type='text' id='input_check_box'>";
check_box= "<br></br><button id='check_button' onclick='check();' style='border-radius:25px; border: hidden; background-color: darkcyan; color: orange; font-size: 30px;'>Check your answer</button>"+"<br>";

row= question_number + input_box + check_box;

document.getElementById("num_1").value= "";
document.getElementById("num_2").value= "";
document.getElementById("Ans_sec").innerHTML= row;
}

player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");

player1_score= 0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("qestion_turn").innerHTML="Question Turn- "+player1_name;
document.getElementById("answer_turn").innerHTML="Answer Turn- "+player2_name;

function check() {
get_answer= document.getElementById("input_check_box").value;
console.log("answer in lowercase-"+answer);
 
if( get_answer==actual_ans)
{
    if(answer_turn == "player1")
    {
        update_player1_score= player1_score + 1;
        update.document.getElementById("player1_score").innerHTML= update_player1_score;
    }
    else{
        update_player2_score= player2_score + 1;
        update.document.getElementById("player2_score").innerHTML= update_player2_score;
    }

    if(question_turn == "player1")
    {
        question_turn="player2";
        document.getElementById("question_turn").innerHTML="Question turn -" + player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("question_turn").innerHTML="Question turn -" + player1_name;
    }
}

}



