var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector("h2");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const sciccors_div=document.getElementById("s");

const game = (userChoice) =>
{	
	const computerChoice=getComputerChoice();
	switch(userChoice + computerChoice)
	{
		//cases in which the user wins
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;

		// cases in which the user loses
		case "rp":
		case "ps":
		case "sr":
			lose();
			break;

		//draw cases
		case "rr":
		case "pp":
		case "ss":
			draw();
			break; 
	}

}

const convertToWord = (letter) =>
{
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice)
{
	userScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWord="user".fontsize(3).sub();
	const smallCompWord="comp".fontsize(3).sub();
	let userChoice_div=document.getElementById(userChoice);
	result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}.You win! `;
	userChoice_div.classList.add('green-glow');
	setTimeout(function(){userChoice_div.classList.remove('green-glow')},1000);

}

function lose(userChoice, computerChoice)
{
	computerScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWord="user".fontsize(3).sub();
	const smallCompWord="comp".fontsize(3).sub();
	let userChoice_div=document.getElementById(userChoice);
	result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}.You lose! `;
	userChoice_div.classList.add('red-glow');
	setTimeout(function(){userChoice_div.classList.remove('red-glow')},1000);
}

function draw(userChoice, computerChoice)
{
userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWord="user".fontsize(3).sub();
	const smallCompWord="comp".fontsize(3).sub();
	let userChoice_div=document.getElementById(userChoice);
	result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} draws ${convertToWord(computerChoice)}${smallCompWord}.You draw! `;
	userChoice_div.classList.add('gray-glow');
	setTimeout(function(){userChoice_div.classList.remove('gray-glow')},1000);	
}



function getComputerChoice()
{
	const choices=['r','p','s'];
	const randomNumber=Math.floor(Math.random()*3);  //random fnction gives number between 0 and 1 exclusive. multiply it by 3 to get between 0 and 2
	return choices[randomNumber];
}


function main(){
		rock_div.addEventListener('click', function(){
		game("r");
		})

		paper_div.addEventListener('click', function(){
		game("p");
		})

		sciccors_div.addEventListener('click', function(){
			game("s");
		})
}


main();
