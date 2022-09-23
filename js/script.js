//Player Indicator Displays who's turn it is, Player 1 always begins (the `chicken` player)
//
//
//

const playerDisplay = document.querySelector(`#playerIndicator`)
let currentPlayer = `player1`
const switchPlayer = () =>{
if (currentPlayer === `player1`){
    currentPlayer = `player2`
    playerDisplay.textContent = `Player 2's Turn`
}
else if (currentPlayer === `player2`){
    currentPlayer = `player1`
    playerDisplay.textContent = `Player 1's Turn`
}
}
if (currentPlayer === `player1`){
    playerDisplay.textContent = `Player 1's Turn`
}

//Selector Logic - Apply Bin or Chicken class on DivClick
//Stops overwrite of classes
//Switches between players after class applied
//checks winning logic on each div on click
//
//

const TopRightGrab = document.querySelector(`#top-right`)
TopRightGrab.addEventListener(`click`, () =>{
    if (TopRightGrab.className){
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        TopRightGrab.classList.add(`chicken`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        TopRightGrab.classList.add(`bin`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
    }
})

const TopCenterGrab = document.querySelector(`#top-center`)
TopCenterGrab.addEventListener(`click`, () =>{
    if (TopCenterGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        TopCenterGrab.classList.add(`chicken`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        TopCenterGrab.classList.add(`bin`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
    }
})

const TopLeftGrab = document.querySelector(`#top-left`)
TopLeftGrab.addEventListener(`click`, () =>{
    if (TopLeftGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        TopLeftGrab.classList.add(`chicken`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        TopLeftGrab.classList.add(`bin`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
    }
})

const CenterLeftGrab = document.querySelector(`#center-left`)
CenterLeftGrab.addEventListener(`click`, () =>{
    if (CenterLeftGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        CenterLeftGrab.classList.add(`chicken`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        CenterLeftGrab.classList.add(`bin`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
    }
})

const CenterRightGrab = document.querySelector(`#center-right`)
CenterRightGrab.addEventListener(`click`, () =>{
    if (CenterRightGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        CenterRightGrab.classList.add(`chicken`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        CenterRightGrab.classList.add(`bin`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
    }
})

const middleGrab = document.querySelector(`#middle`)
middleGrab.addEventListener(`click`, () =>{
    if (middleGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        middleGrab.classList.add(`chicken`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        middleGrab.classList.add(`bin`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
    }
})

const BottomLeftGrab = document.querySelector(`#bottom-left`)
BottomLeftGrab.addEventListener(`click`, () =>{
    if (BottomLeftGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        BottomLeftGrab.classList.add(`chicken`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        BottomLeftGrab.classList.add(`bin`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
    }
})

const BottomRightGrab = document.querySelector(`#bottom-right`)
BottomRightGrab.addEventListener(`click`, () =>{
    if (BottomRightGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        BottomRightGrab.classList.add(`chicken`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        BottomRightGrab.classList.add(`bin`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
    }
})

const BottomCenterGrab = document.querySelector(`#bottom-center`)
BottomCenterGrab.addEventListener(`click`, () =>{
    if (BottomCenterGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        BottomCenterGrab.classList.add(`chicken`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        BottomCenterGrab.classList.add(`bin`)
        const win = checkWinner()
        if (win === false) {
            drawScreen()
        }
        switchPlayer()
    }
})

// Winning Logic for all 8 win conditions
// add's `X player is the winner` screen display (via appending class .winner)
// 
// 
// Button for refresh (content not page) has to be included before 'winner' as it displays on .winner overlay
// reference LOTR project for how to append functionality to a button on creation of DOM element

const winner = (currentPlayer) =>{
    if (currentPlayer === `player1`){
        const grabEndScreen = document.querySelector(`.endScreen`)
        grabEndScreen.classList.add(`winner`)
        const winnerDisplay = document.createElement(`h1`)
        winnerDisplay.textContent = `${currentPlayer} is the winner! Click below to play again.`
        grabEndScreen.appendChild(winnerDisplay)
    }
    else if (currentPlayer === `player2`){
        const grabEndScreen = document.querySelector(`.endScreen`)
        grabEndScreen.classList.add(`winner`)
        const winnerDisplay = document.createElement(`h1`)
        winnerDisplay.textContent = `${currentPlayer} is the winner! Click below to play again.`
        grabEndScreen.appendChild(winnerDisplay)

    }
    else if (currentPlayer === `draw`){
        const grabEndScreen = document.querySelector(`.endScreen`)
        grabEndScreen.classList.add(`winner`)
        const drawDisplay = document.createElement(`h1`)
        drawDisplay.textContent = `This game is a draw! Click below to play again.`
        grabEndScreen.appendChild(drawDisplay)
    }
}

// Begin of CheckWinner Logic //
// Returns True to prevent double up of Draw/Win Condition if player wins on final selection
// Returns False to allow for Draw's / Continuation of game

const checkWinner = () => {
    if (TopLeftGrab.className === `chicken` && TopCenterGrab.className === `chicken` && TopRightGrab.className === `chicken` || TopLeftGrab.className === `bin` && TopCenterGrab.className === `bin` && TopRightGrab.className === `bin` ){
        console.log(`${currentPlayer} is the winner`)
        winner(currentPlayer)
        return true
    }
    if (CenterLeftGrab.className === `chicken` && middleGrab.className === `chicken` && CenterRightGrab.className === `chicken` || CenterLeftGrab.className === `bin` && middleGrab.className === `bin` && CenterRightGrab.className === `bin` ){
        console.log(`${currentPlayer} is the winner`)
        winner(currentPlayer)
        return true
    }
    if (BottomLeftGrab.className === `chicken` && BottomCenterGrab.className === `chicken` && BottomRightGrab.className === `chicken` || BottomLeftGrab.className === `bin` && BottomCenterGrab.className === `bin` && BottomRightGrab.className === `bin` ){
        console.log(`${currentPlayer} is the winner`)
        winner(currentPlayer)
        return true
    }
    if (TopLeftGrab.className === `chicken` && CenterLeftGrab.className === `chicken` && BottomLeftGrab.className === `chicken` || TopLeftGrab.className === `bin` && CenterLeftGrab.className === `bin` && BottomLeftGrab.className === `bin` ){
        console.log(`${currentPlayer} is the winner`)
        winner(currentPlayer)
        return true
    }
    if (TopCenterGrab.className === `chicken` && middleGrab.className === `chicken` && BottomCenterGrab.className === `chicken` || TopCenterGrab.className === `bin` && middleGrab.className === `bin` && BottomCenterGrab.className === `bin` ){
        console.log(`${currentPlayer} is the winner`)
        winner(currentPlayer)
        return true
    }
    if (TopRightGrab.className === `chicken` && CenterRightGrab.className === `chicken` && BottomRightGrab.className === `chicken` || TopRightGrab.className === `bin` && CenterRightGrab.className === `bin` && BottomRightGrab.className === `bin` ){
        console.log(`${currentPlayer} is the winner`)
        winner(currentPlayer)
        return true
    }
    if (TopLeftGrab.className === `chicken` && middleGrab.className === `chicken` && BottomRightGrab.className === `chicken` || TopLeftGrab.className === `bin` && middleGrab.className === `bin` && BottomRightGrab.className === `bin` ){
        console.log(`${currentPlayer} is the winner`)
        winner(currentPlayer)
        return true
    }
    if (TopRightGrab.className === `chicken` && middleGrab.className === `chicken` && BottomLeftGrab.className === `chicken` || TopRightGrab.className === `bin` && middleGrab.className === `bin` && BottomLeftGrab.className === `bin` ){
        console.log(`${currentPlayer} is the winner`)
        winner(currentPlayer)
        return true
    }
    else {
        return false
    }
}

const drawScreen = () => {
    const chickens = document.querySelectorAll('.chicken')
    const bins = document.querySelectorAll(`.bin`)

    console.log(chickens.length + bins.length)
    if (chickens.length + bins.length === 9){
        winner(`draw`)
    }
}
//End of winning logic

//restart button = refresh page /reload
//score - between games

