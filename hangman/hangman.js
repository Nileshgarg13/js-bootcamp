//prototype chain for various values
// object : myobject-->object.prototype-->null
// array : myarray--> function.prototype-->object.prototype-->null
// function : myfunc --> function.prototype --> object.prototype --> null
// string: mystring --> string.prototype --> object.prototype --> null
// Number: mynum -->Number.prototype--> object.prototype --> null
// Boolean: mybool --> Boolean.prototype --> object.prototype --> null


const Hangman = function (word,remainingguesses)
{
    this.word=word.toLowerCase().split('')
    this.remainingGuesses=remainingguesses
    this.guessedletter=[]
    this.staus='PLAYING'
} 
Hangman.prototype.calculateStatus=function()
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
Hangman.prototype.getPuzzle=function(){
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
Hangman.prototype.statusMessage=function(){
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
Hangman.prototype.makeguess=function(guess){
    guess=guess.toLowerCase()
    isUnique=!this.guessedletter.includes(guess)
    isBadGuess=!this.word.includes(guess)
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