const Hangman = function (word,remainingguesses)
{
    this.word=word.toLowerCase().split('')
    this.remainingGuesses=remainingguesses
    this.guessedletter=['c']
} 
Hangman.prototype.getPuzzle=function(){
    let puzzle=''
    this.word.forEach((letter) => {
        if(this.guessedletter.includes(letter)||letter===' '){
            puzzle+=letter
        }
        else{puzzle+='*'}
    })    
    return puzzle;
}
const game1=new Hangman('cat',3)
console.log(game1.getPuzzle())