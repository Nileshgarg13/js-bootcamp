//prototype chain for various values
// object : myobject-->object.prototype-->null
// array : myarray--> function.prototype-->object.prototype-->null
// function : myfunc --> function.prototype --> object.prototype --> null
// string: mystring --> string.prototype --> object.prototype --> null
// Number: mynum -->Number.prototype--> object.prototype --> null
// Boolean: mybool --> Boolean.prototype --> object.prototype --> null

class Hangman{
    constructor(word,remainingguesses)
    {
    this.word=word.toLowerCase().split('')
    this.remainingGuesses=remainingguesses
    this.guessedletter=[]
    this.staus='PLAYING'
    }
    calculateStatus()
    {
        if(game1.remainingGuesses===0)
        {
            this.staus='FAILED'
        }
        else{
        if(!game1.getPuzzle().includes('*'))
        {
            this.staus='FINISHED'
        }}
    }
    getPuzzle()
    {
        let puzzle=''
        this.word.forEach((letter) => {
        if(this.guessedletter.includes(letter)||letter===' '){
            puzzle+=letter
        }
        else
        {
            puzzle+='*'
        }
    })    
    return puzzle;
    }
    statusMessage()
    {
        if(this.staus==='FAILED')
        {
            return`FAILED THE WORD WAS ${game1.word.join('')}`
        }
        else if(this.staus==='PLAYING')
        {
            return `GUESSES LEFT --> ${game1.remainingGuesses}`
        }
        else{return'CONGRATULATIONS YOU HAVE GUESSED THE WORD'}
    }
    makeguess(guess)
    {
    guess=guess.toLowerCase()
    const isUnique=!this.guessedletter.includes(guess)
    const isBadGuess=!this.word.includes(guess)
    if(!this.staus==='PLAYING')
    {
        return
    }

    if(isUnique)
    {
    this.guessedletter.push(guess)}
    if(isUnique && isBadGuess)
    {
        this.remainingGuesses--
    }
    this.calculateStatus()   
    }

}
