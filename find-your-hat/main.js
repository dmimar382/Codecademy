const readline = require('readline');
const {Field, hat, hole, fieldCharacter, pathCharacter} = require( './fieldClass');

let testField;
// ([
//     [pathCharacter, fieldCharacter, hole, hole, fieldCharacter, hole, fieldCharacter],
//     [fieldCharacter, hole, fieldCharacter, hole, fieldCharacter,  fieldCharacter, fieldCharacter],
//     [fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter],
//     [fieldCharacter,  fieldCharacter, fieldCharacter,  fieldCharacter, fieldCharacter,  fieldCharacter, fieldCharacter],
//     [fieldCharacter, hole, fieldCharacter, hole, fieldCharacter,  hat, fieldCharacter],
//     [fieldCharacter,  fieldCharacter, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter]
// ])


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(callback) {
    rl.question('Which way? ', (userInput) => {
        if(isValidInput(userInput)){
            callback(userInput);
        }
        else{
            console.log('Invalid input. Please enter "u" (up), "d" (down), "r" (right), or "l" (left).');
            getUserInput(callback); // Ask for input again
        }     
    });
  }

function isValidInput(input) {
    return ['u', 'd', 'r', 'l'].includes(input.toLowerCase());
}

function getInputAndUpdateField() {
    getUserInput((input) => {
        testField.processInput(input);
        testField.print();
        getInputAndUpdateField();
    });
}

function getUserFieldDimensions(callback){
    rl.question('Input the number of rows and columns for the field seperated by a space ', (userInput) =>{
        const [rows, cols] = userInput.split(' ').map(Number);
        if(isValidDimensions(rows,cols)){
            
            callback(rows,cols)
        }
        else{
            console.log("Please input two numbers seperated by a space")
            getUserFieldDimensions(callback)
        }
    })
}
function isValidDimensions(rows,cols){
  
    // console.log(rows, cols)
    return !isNaN(rows) && !isNaN(cols) && rows > 0 && cols > 0;

}

function getFieldDimensions(){
    getUserFieldDimensions((rows,cols) => {
        // console.log(`got this${rows},${cols}`)
        testField = new Field(rows,cols);
        testField.print();
        // testField.generateField(rows,cols);
        getInputAndUpdateField();
    })
}

function playGame(){
    console.log("Welcome to the game!")
    getFieldDimensions();
    // console.log("generated array")
    // testField.print();
    // getInputAndUpdateField();
}

playGame();
    