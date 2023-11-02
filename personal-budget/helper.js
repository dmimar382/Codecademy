// function deleteEnvelope(name){
//     for(let i =0; i<envelopes.length;i++){
//         if(envelopes[i].name === name){
//             envelopes.splice(envelopes[i],1)
//             console.log(envelopes)
//             return envelopes;
//         }
//     }
// }

// function updateSpendAmount(name, amount){
//     // console.log(envelopes)
//     for(let i =0; i<envelopes.length;i++){
//         if(envelopes[i].name === name){
//             currentBalance = envelopes[i].balance 
//             if(currentBalance < amount){
//                 return -1;
//             }
//             else{
//                 envelopes[i].balance -= amount;
//                 // console.log(envelopes[i])
//                 return envelopes;
//             }  
//         }
//     }
// }

let IDCounter = 5;
function generateUniqueID() {
    IDCounter++; // Increment the counter
    return IDCounter; // Return a unique ID based on the counter
  }


module.exports = {
    generateUniqueID,
    // deleteEnvelope,
    // updateSpendAmount
}