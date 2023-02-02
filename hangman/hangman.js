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

}
const game1=new Hangman('cat',3)

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress',function(e)
{
    const guess=e.key
    game1.makeguess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)})