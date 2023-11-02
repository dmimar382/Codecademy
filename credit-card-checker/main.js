// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
const valid6 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

/*
    validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a 
    valid credit card number and false when it is invalid. This function does NOT mutate the values of the original array.
    To find out if a credit card number is valid or not, I use the Luhn algorithm. 
*/
function validateCred(numArray){
    var sum = 0;
    var toAdd =0;
    var indexToDouble = numArray.length-2;
    for(let i = numArray.length-1; i>=0; i--){

        if(i === indexToDouble){
            toAdd = numArray[i] * 2;
            if(toAdd > 9){
                toAdd -=9;
            }
            indexToDouble -= 2;
        }
        else{
            toAdd = numArray[i];
        }
        sum += toAdd;
    }
    if(sum%10 === 0)
        return true;
    else
        return false;

}

/*
    findInvalidCards()  has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through 
    the nested array for which numbers are invalid, and return another nested array of invalid cards.
*/
function findInvalidCards(batchArr)
{
    var invalidCards = []
    // var batchIndexOfInvalidCards = []
    for(let i=0; i < batchArr.length; i++)
    {
        var validity  = validateCred(batchArr[i]);
        // console.log(validity)
        if(!validity){
            // batchIndexOfInvalidCards.push(i);
            invalidCards.push(batchArr[i]);
        }

    }
    // console.log(batchIndexOfInvalidCards)
    return invalidCards;
}

/* 
    idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies to who issued the credit cards
    with the faulty numbers.
*/
function invalidCardCompanies(invalidCards){
    var companies =[]
    for(let i =0; i<invalidCards.length; i++){
      
        switch (invalidCards[i][0]){
            case 3:
           
                if(!companies.includes('Amex')){
                    companies.push('Amex');
                    
                }
                break;
            case 4:
                if(!companies.includes('Visa')){
                    companies.push('Visa');
                    
                }
                break;
            case 5:
                if(!companies.includes('Mastercard')){
                    companies.push('Mastercard');
                    
                }
                break;
            case 6:
                if(!companies.includes('Discover')){
                    companies.push('Discover');
                   
                }
                break;
            default:
                console.log('Company not found');
                break;
        }
            
    }
    // console.log(companies)
    return companies;
}

var invalidCards = findInvalidCards(batch);
var invalidCardCompanies = invalidCardCompanies(invalidCards);
console.log(invalidCardCompanies)