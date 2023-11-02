/* This is a message generator program. Every time a user runs a program, 
they should get a new, randomized output. The project generates an inspirational 
message. To make your program truly random, the message that it outputs 
is be made up of at least three different pieces of data. Every time a user 
runs a program, they get a new, randomized output. */

function selection(options){
    var verb = Math.floor(Math.random() * options.length);
    return options[verb];
}

function partOne(){
    var options = ["believe","achieve","succeed","inspire","dream","transform","overcome","thrive","empower","conquer","aspire","excel"];
    return selection(options);
}



function partTwo(){
    var options = ["emerge","endure","lead","create","motivate","surpass","persevere"]
    return selection(options);

}

function partThree(){
    var options = ["grow","innovate","inspire","rise","challenge","transform","triump","pioneer","elevate","envision","fulfill","embrace"]
    return selection(options);
}


function generateRandomMessage(){
    var finalMessage = "";
    finalMessage = `If you ${partOne()} then you will ${partTwo()} and ${partThree()}.`;
    return finalMessage;
}


function main(){
    return console.log(generateRandomMessage());
}


main();
