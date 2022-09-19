//if id has class == alert `you cannot click here` (this is top in read order)
//event listener, on click if player-1 = true, append chicken class, if player-2 = true, append bin class



//if id topleft && top center && top right = class chicken === winner, player 1
//same logic for center left, middle, center right
//top left, center left, bottom left
//top right, center right, bottom right
//top center, middle, bottom center
//top left, middle, bottom right
//top right, middle, bottom left

const player1 = firstclick

const TopRightGrab = document.querySelector(`#top-right`)
TopRightGrab.addEventListener(`click`, () =>{
    if (class === `chicken` || class === `bin`){
        alert(`You can't overwrite another option!`)
        break
    }
    else if (player === player1){
        TopRightGrab.classList(`chicken`)
}
    else if (player === player2){
        TopRightGrab.classList(`bin`)
    }
})

const TopCenterGrab = document.querySelector(`#top-center`)
TopCenterGrab.addEventListener(`click`, () =>{
    if (class === `chicken` || class === `bin`){
        alert(`You can't overwrite another option!`)
        break
    }
    else if (player === player1){
        TopCenterGrab.classList(`chicken`)
}
    else if (player === player2){
        TopCenterGrab.classList(`bin`)
    }
})