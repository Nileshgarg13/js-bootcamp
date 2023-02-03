
const puzzleEl= document.querySelector("#puzzle")
const guessesEl=document.querySelector("#guesses")
const statusEl=document.querySelector("#status")
const game1=new Hangman('cat',3)
puzzleEl.textContent=game1.getPuzzle()
guessesEl.textContent=game1.remainingGuesses
statusEl.textContent=game1.staus
window.addEventListener('keypress',function(e)
{
    const guess=e.key
    game1.makeguess(guess)
    puzzleEl.textContent=game1.getPuzzle()
    guessesEl.textContent=game1.remainingGuesses
    statusEl.textContent=game1.staus
    if(game1.staus==='FAILED')
    {
        statusEl.textContent=`FAILED THE WORD WAS ${game1.word}`
    }
})