//Player Indicator Displays who's turn it is, Player 1 always begins (the `chicken` player)

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
const TopRightGrab = document.querySelector(`#top-right`)
TopRightGrab.addEventListener(`click`, () =>{
    if (TopRightGrab.className){
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        TopRightGrab.classList.add(`chicken`)
        checkWinner()
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        TopRightGrab.classList.add(`bin`)
        checkWinner()
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
        checkWinner()
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        TopCenterGrab.classList.add(`bin`)
        checkWinner()
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
        checkWinner()
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        TopLeftGrab.classList.add(`bin`)
        checkWinner()
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
        checkWinner()
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        CenterLeftGrab.classList.add(`bin`)
        checkWinner()
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
        checkWinner()
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        CenterRightGrab.classList.add(`bin`)
        checkWinner()
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
        checkWinner()
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        middleGrab.classList.add(`bin`)
        checkWinner()
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
        checkWinner();
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        BottomLeftGrab.classList.add(`bin`)
        checkWinner()
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
        checkWinner()
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        BottomRightGrab.classList.add(`bin`)
        checkWinner()
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
        checkWinner()
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        BottomCenterGrab.classList.add(`bin`)
        checkWinner()
        switchPlayer()
    }
})

//top left, center top, top right
//center left, middle, center right
//bottom left, bottom center, bottom right
//top left, center left, bottom left
//top right, center right, bottom right
//top center, middle, bottom center
//top left, middle, bottom right
//top right, middle, bottom left

// Winning Logic for all 8 win conditions
// 
// 
// 

const winner = (currentPlayer) =>{
    if (currentPlayer === `player1`){
        const grabEndScreen = document.querySelector(`.endScreen`)
        grabEndScreen.classList.add(`winner`)
        const winnerDisplay = document.createElement(`h1`)
        winnerDisplay.textContent = `${currentPlayer} is the winner! Click below to play again.`
        grabEndScreen.appendChild(winnerDisplay)
        
    // .winner > h1.textContent = `Player 1 is the winner! Click below to play again`
    }
    else if (currentPlayer === `player2`){
        const grabEndScreen = document.querySelector(`.endScreen`)
        grabEndScreen.classList.add(`winner`)
        const winnerDisplay = document.createElement(`h1`)
        winnerDisplay.textContent = `${currentPlayer} is the winner! Click below to play again.`
        grabEndScreen.appendChild(winnerDisplay)

    }
    // else if (gameEndCondition === `Draw`){
    //     // drawScreen
    // }
}

const checkWinner = () => {
    if (TopLeftGrab.className === `chicken` && TopCenterGrab.className === `chicken` && TopRightGrab.className === `chicken` || TopLeftGrab.className === `bin` && TopCenterGrab.className === `bin` && TopRightGrab.className === `bin` ){
        console.log(`${currentPlayer} is the winner`)
        winner(currentPlayer)

    }
    // else if (CenterLeftGrab.className && middleGrab && CenterRightGrab)
}

// if (Board1Grab.className === `chicken` && Board2Grab.className === `chicken` && Board3Grab.className === `chicken`){
//     console.log(Board1Grab.className)
// }
// if (TopLeftGrab.className === TopRightGrab.className && TopLeftGrab.className === TopCenterGrab.className){
//     if (TopCenterGrab.className === `chicken`){
        
//     winner(`Player 1`)
//     }
//     else if (TopLeftGrab.className === `bin`){
//         winner(`Player 2`)
//     }
// }
if (CenterLeftGrab.className === middleGrab.className && CenterLeftGrab.className === CenterRightGrab.className){
    winner()
    // `${CenterLeftGrab.className}'s Win!` 
}
if (BottomLeftGrab.className === BottomRightGrab.className && BottomLeftGrab.className === BottomCenterGrab.className){
    winner()
    // `${BottomLeftGrab.className}'s Win!`
}

if (TopLeftGrab.className === CenterLeftGrab.className && TopLeftGrab.className === BottomLeftGrab.className){
    winner()
    // `${TopLeftGrab.className}'s Win!`
}

if (TopCenterGrab.className === middleGrab.className && TopCenterGrab.className === BottomCenterGrab.className){
    winner()
    // `${TopCenterGrab.className}'s Win!`
}

if (TopRightGrab.className === CenterRightGrab.className && TopRightGrab.className === BottomRightGrab.className){
    winner()
    // `${TopRightGrab.className}'s Win!`
}

if (TopLeftGrab.className === middleGrab.className && TopLeftGrab.className === BottomRightGrab.className){
    winner()
    // `${TopLeftGrab.className}'s Win!`
}

if (TopRightGrab.className === middleGrab.className && TopRightGrab.className === BottomLeftGrab.className){
    winner()
    // `${TopRightGrab.className}'s Win!`
}

// const drawScreen = 
// const gameboardGrab = document.querySelector(`.gameBoard`)
// else if () {
// for (let div in gameboardGrab){
//     div.className = true
//     winner(drawScreen)
// }
// }
//End of winning logic

//restart button = refresh page /reload
//score - between games
