//if id has class == alert `you cannot click here` (this is top in read order)
//event listener, on click if player-1 = true, append chicken class, if player-2 = true, append bin class



//if id topleft && top center && top right = class chicken === winner, player 1
//same logic for center left, middle, center right
//top left, center left, bottom left
//top right, center right, bottom right
//top center, middle, bottom center
//top left, middle, bottom right
//top right, middle, bottom left

// const player1 = firstclick


//Selector Logic - Apply Bin or Chicken class on DivClick
const TopRightGrab = document.querySelector(`#top-right`)
console.log(TopRightGrab.className)
TopRightGrab.addEventListener(`click`, () =>{
    if (TopRightGrab.className){
        alert(`You can't overwrite another option!`)
        return
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
    if (TopCenterGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (player === player1){
        TopCenterGrab.classList(`chicken`)
}
    else if (player === player2){
        TopCenterGrab.classList(`bin`)
    }
})

const TopLeftGrab = document.querySelector(`#top-left`)
TopLeftGrab.addEventListener(`click`, () =>{
    if (TopLeftGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (player === player1){
        TopLeftGrab.classList(`chicken`)
}
    else if (player === player2){
        TopLeftGrab.classList(`bin`)
    }
})

const CenterLeftGrab = document.querySelector(`#center-left`)
CenterLeftGrab.addEventListener(`click`, () =>{
    if (CenterLeftGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (player === player1){
        CenterLeftGrab.classList(`chicken`)
}
    else if (player === player2){
        CenterLeftGrab.classList(`bin`)
    }
})

const CenterRightGrab = document.querySelector(`#center-right`)
CenterRightGrab.addEventListener(`click`, () =>{
    if (CenterRightGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (player === player1){
        CenterRightGrab.classList(`chicken`)
}
    else if (player === player2){
        CenterRightGrab.classList(`bin`)
    }
})

const middleGrab = document.querySelector(`#middle`)
middleGrab.addEventListener(`click`, () =>{
    if (middleGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (player === player1){
        middleGrab.classList(`chicken`)
}
    else if (player === player2){
        middleGrab.classList(`bin`)
    }
})

const BottomLeftGrab = document.querySelector(`#bottom-left`)
BottomLeftGrab.addEventListener(`click`, () =>{
    if (BottomLeftGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (player === player1){
        BottomLeftGrab.classList(`chicken`)
}
    else if (player === player2){
        BottomLeftGrab.classList(`bin`)
    }
})

const BottomRightGrab = document.querySelector(`#bottom-right`)
BottomRightGrab.addEventListener(`click`, () =>{
    if (BottomRightGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (player === player1){
        BottomRightGrab.classList(`chicken`)
}
    else if (player === player2){
        BottomRightGrab.classList(`bin`)
    }
})

const BottomCenterGrab = document.querySelector(`#bottom-center`)
BottomCenterGrab.addEventListener(`click`, () =>{
    if (BottomCenterGrab.className) {
        alert(`You can't overwrite another option!`)
        return
    }
    else if (player === player1){
        BottomCenterGrab.classList(`chicken`)
}
    else if (player === player2){
        BottomCenterGrab.classList(`bin`)
    }
})

//End of Selector Logic