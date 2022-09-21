// const player1 = firstclick
//everytime className is applied to gameboard - switch player // player1 //player2

let currentPlayer = `player1`
const switchPlayer = () =>{
if (currentPlayer === `player1`){
    currentPlayer = `player2`
}
else if (currentPlayer === `player2`){
    currentPlayer = `player1`
}
}



// console.log(currentPlayer)
// `Player 1's Turn`
// const playerIndicator = document.querySelector(`somethingHere`)
// if (currentPlayer = `player1`){
// playerIndicator.textContent = `Player 1's Turn`
// }
// else {
// playerIndicator.textContent = `Player 2's Turn`
// }

//Selector Logic - Apply Bin or Chicken class on DivClick
const TopRightGrab = document.querySelector(`#top-right`)
// console.log(TopRightGrab.className)
TopRightGrab.addEventListener(`click`, () =>{
    if (TopRightGrab.className){
        alert(`You can't overwrite another option!`)
        return
    }
    else if (currentPlayer === `player1`){
        TopRightGrab.classList.add(`chicken`)
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        TopRightGrab.classList.add(`bin`)
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
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        TopCenterGrab.classList.add(`bin`)
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
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        TopLeftGrab.classList.add(`bin`)
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
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        CenterLeftGrab.classList.add(`bin`)
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
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        CenterRightGrab.classList.add(`bin`)
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
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        middleGrab.classList.add(`bin`)
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
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        BottomLeftGrab.classList.add(`bin`)
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
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        BottomRightGrab.classList.add(`bin`)
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
        switchPlayer()
}
    else if (currentPlayer === `player2`){
        BottomCenterGrab.classList.add(`bin`)
        switchPlayer()
    }
})

//top left, center top, top right
//center left, middle, center right
//bottom left, bottom center, bottomr right
//top left, center left, bottom left
//top right, center right, bottom right
//top center, middle, bottom center
//top left, middle, bottom right
//top right, middle, bottom left

// Winning Logic for all 8 win conditions

if (TopLeftGrab.className === TopRightGrab.className && TopLeftGrab.className === TopCenterGrab.className){
    // return winner
    `${TopLeftGrab.className}'s Win!` //as text in a header / wrapped page content/ centred
}
if (CenterLeftGrab.className === middleGrab.className && CenterLeftGrab.className === CenterRightGrab.className){
    // return winner
    `${CenterLeftGrab.className}'s Win!` 
}
if (BottomLeftGrab.className === BottomRightGrab.className && BottomLeftGrab.className === BottomCenterGrab.className){
    // return winner
    `${BottomLeftGrab.className}'s Win!`
}

if (TopLeftGrab.className === CenterLeftGrab.className && TopLeftGrab.className === BottomLeftGrab.className){
    // return winner
    `${TopLeftGrab.className}'s Win!`
}

if (TopCenterGrab.className === middleGrab.className && TopCenterGrab.className === BottomCenterGrab.className){
    // return winner
    `${TopCenterGrab.className}'s Win!`
}

if (TopRightGrab.className === CenterRightGrab.className && TopRightGrab.className === BottomRightGrab.className){
    // return winner
    `${TopRightGrab.className}'s Win!`
}

if (TopLeftGrab.className === middleGrab.className && TopLeftGrab.className === BottomRightGrab.className){
    // return winner
    `${TopLeftGrab.className}'s Win!`
}

if (TopRightGrab.className === middleGrab.className && TopRightGrab.className === BottomLeftGrab.className){
    // return winner
    `${TopRightGrab.className}'s Win!`
}

//End of winning logic



//Player Logic
//currentPlayer declared earlier

// const playerIndicator = document.querySelector(`#playerIndicator`)
// playerIndicator.textContent = `Player 1's Turn`|| `Player 2's Turn`
// if (currentPlayer = `player1`){
//     playerIndicator.textContent = `Player 1's Turn`
// }
// else if (currentPlayer = `player2`){
//     playerIndicator.textContent = `Player 2's Turn`
// }

//restart button = refresh page /reload
//score - between games
