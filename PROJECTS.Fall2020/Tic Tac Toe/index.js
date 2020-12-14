/*------constants------*/
//any app related constant variables



/*------app state variable------*/
//modified after user actions on page

let board;
let turn = "X";

/*------cached element references------*/
//connect javascript to different html elements on our html page
const squares = Array.from(document.querySelectorAll('#board div'))



/*------event listeners------*/
//functions that happen after user actions on web

handleTurn = () => {
    //find the index of or the element where we clicked

    //update our board to X or O based on who's turn it was 

    //determine if someone has won the game or not

    console.log(event) 
    console.log("clicked!")
    
}
addEventListener
document.getElementById('board').addEventListener('click', handleTurn)


/*------functions------*/
//general functions to build and play game


//initialize a new game
init = () => {
    board = ["", "", "", "", "", "", "", "", ""]

    render()
}

render = () => {
    //updates our game board each turn
    //or after every user action on page

    board.forEach((mark, index) => {
        squares[index].textContent = mark
    })
    //for each method to iterate through our array
}

init ()