const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})

// getCountry('MX').then((country) => {
//     console.log(country.name)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })


// const request= new XMLHttpRequest()
// request.addEventListener('readystatechange',(e)=>
// {
    // if(e.target.readyState===4 && e.target.status===200)
    // {
        // const data=JSON.parse(e.target.responseText)
        // console.log(data)
    // }
// })
// request.setRequestHeader(Headers='Access-Control-Allow-Origin')
// request.open('GET','https://puzzle.mead.io/puzzle')
// request.send()

// const request= new XMLHttpRequest()
// const countrycode='IND'
// request.addEventListener('readystatechange',(e)=>
// {
//     if(e.target.readyState===4 && e.target.status===200)
//     {
//         const data=JSON.parse(e.target.responseText)
//         const country=data.find((country)=>country.cca3===countrycode)
//         console.log(country.name.common)
//     }
// })
// // request.setRequestHeader(Headers='Access-Control-Allow-Origin')
// request.open('GET','https://restcountries.com/v3.1/all')
// request.send()