//if id has class == alert `you cannot click here` (this is top in read order)
//event listener, on click if player-1 = true, append chicken class, if player-2 = true, append bin class



//if id topleft && top center && top right = class chicken === winner, player 1


// const player1 = firstclick

let currentPlayer = player1
console.log(currentPlayer)
`Player 1's Turn`
const playerAnnounce = document.querySelector(`somethingHere`)
if (currentPlayer = player1){
playerAnnounce.textContent = `Player 1's Turn`
}
else {
playerAnnounce.textContent = `Player 2's Turn`
}

//Selector Logic - Apply Bin or Chicken class on DivClick
const TopRightGrab = document.querySelector(`#top-right`)
// console.log(TopRightGrab.className)
TopRightGrab.addEventListener(`click`, () =>{
    if (TopRightGrab.className){
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === player1){
        TopRightGrab.classList(`chicken`)
}
    else if (currentPlayer === player2){
        TopRightGrab.classList(`bin`)
    }
})

const TopCenterGrab = document.querySelector(`#top-center`)
TopCenterGrab.addEventListener(`click`, () =>{
    if (TopCenterGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === player1){
        TopCenterGrab.classList(`chicken`)
}
    else if (currentPlayer === player2){
        TopCenterGrab.classList(`bin`)
    }
})

const TopLeftGrab = document.querySelector(`#top-left`)
TopLeftGrab.addEventListener(`click`, () =>{
    if (TopLeftGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === player1){
        TopLeftGrab.classList(`chicken`)
}
    else if (currentPlayer === player2){
        TopLeftGrab.classList(`bin`)
    }
})

const CenterLeftGrab = document.querySelector(`#center-left`)
CenterLeftGrab.addEventListener(`click`, () =>{
    if (CenterLeftGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === player1){
        CenterLeftGrab.classList(`chicken`)
}
    else if (currentPlayer === player2){
        CenterLeftGrab.classList(`bin`)
    }
})

const CenterRightGrab = document.querySelector(`#center-right`)
CenterRightGrab.addEventListener(`click`, () =>{
    if (CenterRightGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === player1){
        CenterRightGrab.classList(`chicken`)
}
    else if (currentPlayer === player2){
        CenterRightGrab.classList(`bin`)
    }
})

const middleGrab = document.querySelector(`#middle`)
middleGrab.addEventListener(`click`, () =>{
    if (middleGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === player1){
        middleGrab.classList(`chicken`)
}
    else if (currentPlayer === player2){
        middleGrab.classList(`bin`)
    }
})

const BottomLeftGrab = document.querySelector(`#bottom-left`)
BottomLeftGrab.addEventListener(`click`, () =>{
    if (BottomLeftGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === player1){
        BottomLeftGrab.classList(`chicken`)
}
    else if (currentPlayer === player2){
        BottomLeftGrab.classList(`bin`)
    }
})

const BottomRightGrab = document.querySelector(`#bottom-right`)
BottomRightGrab.addEventListener(`click`, () =>{
    if (BottomRightGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === player1){
        BottomRightGrab.classList(`chicken`)
}
    else if (currentPlayer === player2){
        BottomRightGrab.classList(`bin`)
    }
})

const BottomCenterGrab = document.querySelector(`#bottom-center`)
BottomCenterGrab.addEventListener(`click`, () =>{
    if (BottomCenterGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === player1){
        BottomCenterGrab.classList(`chicken`)
}
    else if (currentPlayer === player2){
        BottomCenterGrab.classList(`bin`)
    }
})

//same logic for center left, middle, center right!
//top left, center left, bottom left
//top right, center right, bottom right
//top center, middle, bottom center
//top left, middle, bottom right
//top right, middle, bottom left

if (TopLeftGrab.className === TopRightGrab.className && TopLeftGrab.className === TopCenterGrab.className){
    return winner
    `${TopLeftGrab.className}'s Win!` //as text in a header / wrapped page content/ centred
}
if (CenterLeftGrab.className === middleGrab.className && CenterLeftGrab.className === CenterRightGrab.className){
    return winner
    `${CenterLeftGrab.className}'s Win!` 
}
if (BottomLeftGrab.className === BottomRightGrab.className && BottomLeftGrab.className === BottomCenterGrab.className){
    return winner
    `${BottomLeftGrab.className}'s Win!`
}

if (TopLeftGrab.className === CenterLeftGrab.className && TopLeftGrab.className === BottomLeftGrab.className){
    return winner
    `${TopLeftGrab.className}'s Win!`
}

if (TopCenterGrab.className === middleGrab.className && TopCenterGrab.className === BottomCenterGrab.className){
    return winner
    `${TopCenterGrab.className}'s Win!`
}

if (TopRightGrab.className === CenterRightGrab.className && TopRightGrab.className === BottomRightGrab.className){
    return winner
    `${TopRightGrab.className}'s Win!`
}

if (TopLeftGrab.className === middleGrab.className && TopLeftGrab.className === BottomRightGrab.className){
    return winner
    `${TopLeftGrab.className}'s Win!`
}

if (TopRightGrab.className === middleGrab.className && TopRightGrab.className === BottomLeftGrab.className){
    return winner
    `${TopRightGrab.className}'s Win!`
}
//End of Selector Logic

//Player Logic
//currentPlayer declared earlier

// const playerIndicator = document.querySelector(`#playerIndicator`)
// playerIndicator.textContent = `Player 1's Turn`|| `Player 2's Turn`
// if (currentPlayer = player1){
//     playerIndicator.textContent = `Player 1's Turn`
// }
// else if (currentPlayer = player2){
//     playerIndicator.textContent = `Player 2's Turn`
// }

//restart button = refresh page /reload
//score - between games
