const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';



class Field {
    constructor(rows,cols){
        this.fieldArr = this.generateField(rows,cols);
        // this.currPos = [];
    }
    generateField(rows,cols){
        var charArr = [hat,hole,fieldCharacter,pathCharacter]
        const fieldArr =[];
        for(let i = 0; i < rows; i++){
            const row = []
            for(let j = 0; j < cols; j++){
                var chosenValIndex = Math.floor(Math.random()* charArr.length);
                var chosenVal = charArr[chosenValIndex];
                row.push(chosenVal);
                if(chosenVal === pathCharacter){
                    charArr.splice(chosenValIndex,1)
                    this.currPos =[i,j]
                    // console.log(`Current position${this.currPos}`)
                }
                else if(chosenVal === hat ){
                    charArr.splice(chosenValIndex,1)
                }

                
            }
            fieldArr.push(row);
        }
        return fieldArr;

    }

    print(){
        for(let i = 0; i < this.fieldArr.length; i++){
            console.log(this.fieldArr[i].join(""))

        }
    }
    processInput(input){
        switch (input){
            case 'u':
                this.moveUp();
                break;
            case 'd':
                this.moveDown();
                break;
            case 'r':
                this.moveRight();
                break;
            case 'l':
                
                this.moveLeft();
                break;
            default:
                console.log('Invalid input. Please enter "u" (up), "d" (down), "r" (right), or "l" (left).');
        }
    }

    moveUp(){
        if (this.currPos[0] === 0){
            this.outsideFieldError()
        }
        else{
            // console.log("Moving up")
            this.currPos[0] = this.currPos[0] -1
            this.updateFieldArr();
        }
    }

    moveDown(){
        if (this.currPos[0] == this.fieldArr.length - 1){
            this.outsideFieldError()
        }
        else{
            // console.log("Moving down")
            this.currPos[0] = this.currPos[0] +1
            this.updateFieldArr();
        }
    }

    moveRight(){
        
        if (this.currPos[1] == this.fieldArr[0].length-1){
            this.outsideFieldError()
        }
        else{
            this.currPos[1] = this.currPos[1] +1
            this.updateFieldArr();
        }

    }

    moveLeft(){
        // console.log("moving left")
        // console.log(this.currPos[1] == 0)
        if (this.currPos[1] == 0){
            this.outsideFieldError()
        }
        else{
            // console.log("inside else")
            this.currPos[1] = this.currPos[1] -1
            // console.log(this.currPos[0], this.currPos[1])
            // console.log("about to update array")
            this.updateFieldArr();
        }
            

    }
    updateFieldArr(){
        // console.log("updating array")
        var row = this.currPos[0]
        var col = this.currPos[1]
        // console.log(row,col)
        // console.log("abbout to check if hole")
        this.checkIfHole(row,col)
        // console.log("abbout to check if hat")
        this.checkIfHat(row,col)
        // console.log("abbout to update to *")
        this.fieldArr[row][col] = pathCharacter;

    }

    checkIfHole(row,col){
        // console.log(`Chicking if hole ${this.fieldArr[row][col]}`)
        if(this.fieldArr[row][col] == hole){
            this.holeError()
        }
    }

    checkIfHat(row,col){
        if(this.fieldArr[row][col] === hat){
            console.log("You win...this time!")
            process.exit(1)
        }
    }

    outsideFieldError(){
        console.log("You went outside the field and lost the game")
        process.exit(1)
    }

    holeError(){
        console.log("You stepped in a hole and lost the game")
        process.exit(1)
    }


}

module.exports = {Field, hat, hole, fieldCharacter, pathCharacter};
