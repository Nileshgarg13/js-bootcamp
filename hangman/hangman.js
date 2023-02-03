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
Hangman.prototype.makeguess=function(guess){
    guess=guess.toLowerCase()
    isUnique=!this.guessedletter.includes(guess)
    isBadGuess=!this.word.includes(guess)
    if(isUnique)
    {
    this.guessedletter.push(guess)}
    if(isUnique && isBadGuess)
    {
        this.remainingGuesses--
    }
    this.calculateStatus()
}