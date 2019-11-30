mainSpace = document.getElementById('main')
hangman = document.getElementById('hangman')
wGuess = document.getElementById('wrongGuess')
inputField = document.getElementById('inputField')
wrongGuessNo = 0
allGuesses = []
movie = []
allAlphabets = []

function main()
{      
	x = []
	movie = movies[Math.floor(Math.random()*movies.length)]
	name = movie.Title.toUpperCase()
	console.log(name)
	for(i = 0;i<name.length;i++)
	{
		//console.log(movie[i])
		if (name[i] == " ")
			x[i] = "&nbsp"
		else if(!(name[i].match(/[a-z]/i)))
			x[i] = name[i]
		else
		{
			x[i] = '_'
			if (!(allAlphabets.includes(name[i])))
				allAlphabets.push(name[i]) 
		}

		
	}	
	console.log(x)
	console.log(allAlphabets)
	mainSpace.innerHTML = String(x.join(' '))
	showHints()


}

function guess(guessed)
{ 
	allGuesses.push(guessed)
	alphabetButton = document.getElementById(guessed)
	//guessed = inputField.value.toUpperCase()
	//if(guessed.length == 1 && typeof(guessed) == 'string' )
	if(name.includes(guessed))
	{
	alphabetButton.disabled = true
	alphabetButton.style = "background:green"
	
	for (i = 0; i<x.length;i++)
	{
		if (guessed == name[i])
		{
			x[i] = name[i]
			mainSpace.innerHTML = x.join(' ')
		}
	}
	}
	else
	{
		alphabetButton.disabled = true
		alphabetButton.style = "background:red"

		wrongGuessNo++
		hangman.src = String(wrongGuessNo) + '.jpg'
	
		if (wrongGuessNo == 6)
		{
			alert('You lost. The movie was '+ name)
			reset()
		}
	}
	someVar = true
	allAlphabets.forEach(a => {
		if(!(allGuesses.includes(a)))
		someVar = false 
	});
	if (someVar == true)
	{
	alert("You won! You got it after "+ wrongGuessNo +" incorrect guesses")
	reset()
	}
}

function showHints()
{
	alert("Description: \n"+movie.Description+"\n\nYear of release: "+movie.Year+"\n\nGenre: "+movie.Genre)
}

function reset()
{
	allGuesses.forEach(id => {
	toReset = document.getElementById(id)
	toReset.disabled = false
	toReset.style = ""
	});
	hangman.src = "0.jpg"
	wrongGuessNo = 0
	main()
}

function newMovie()
{
	alert("The movie was "+ name)
	reset()
}
main()



	
	

