var p1 = null;

function p1rock(){
    p1 = "rock";
}

function p1paper(){
    p1 = "paper";
}


function p1scissors(){
    p1 = "scissors";
}



var p2 = null;

function p2rock(){
    p2 = "rock";
}

function p2paper(){
    p2 = "paper";
}

function p2scissors(){
    p2 = "scissors";
}





function getresult(){
	if(p1 == "rock" && p2 == "rock"){
		document.getElementById("result").innerHTML = "Both chose rock. It's a tie!";
	}
	else if(p1 == "rock" && p2 == "paper"){
		document.getElementById("result").innerHTML = "Paper beats rock. Player 2 wins!";
	}
	else if(p1 == "rock" && p2 == "scissors"){
		document.getElementById("result").innerHTML = "Scissors beats rock. Player 1 wins!";
	}
	else if(p1 == "paper" && p2 == "rock"){
		document.getElementById("result").innerHTML = "Paper beats rock. Player 1 wins!";
	}
	else if(p1 == "paper" && p2 == "paper"){
		document.getElementById("result").innerHTML = "Both chose paper. It's a tie!";
	}
	else if(p1 == "paper" && p2 == "scissors"){
		document.getElementById("result").innerHTML = "Scissors beat paper. Player 2 wins!";
	}
	else if(p1 == "scissors" && p2 == "rock"){
		document.getElementById("result").innerHTML = "Rock beats scissors. Player 2 wins!";
	}
	else if(p1 == "scissors" && p2 == "paper"){
		document.getElementById("result").innerHTML = "Scissors beats paper. Player 1 Wins!";
	}
	else if(p1 == "scissors" && p2 == "scissors"){
		document.getElementById("result").innerHTML = "Both choose scissors. It's a tie!";
	}
	else{
		document.getElementById("result").innerHTML = "Error!!!! Technical difficulties. Try refreshing page.";
	}
}

