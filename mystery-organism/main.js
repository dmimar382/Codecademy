// Returns a random DNA base
function returnRandBase(){
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
function mockUpStrand(){
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Function takes in a base letter and changes that letter randomly to one of the other 3 available 
function changeRandBase(baseToChange){
  const dnaBases = ['A', 'T', 'C', 'G'];
  dnaBases.splice(baseToChange,1)
  return dnaBases[Math.floor(Math.random() * 3)];

}

function mutateHelper(dna){
  var index =Math.floor(Math.random() * 15) ;
  // console.log(index)
  // console.log(dna)
  // console.log(dna[index])
  dna[index] = changeRandBase(dna[index]);
  return dna;
};



/*
  pAequorFactory() returns an object that contains the properties specimenNum and dna that correspond to 
  the parameters provided.
*/

function pAequorFactory(num, strand){
  return{
    specimenNum: num,
    dna: strand,
    mutating: function(){
      // console.log(strand)
      this.dna = mutateHelper(strand);
    },
    compareDNA: function(DNAToCompare){
      var numInCommon = 0;
      // console.log(this.dna.length)
      // console.log(DNAToCompare.dna)
      for(let i = 0; i< this.dna.length; i++){
        // console.log(this.dna[i],DNAToCompare.dna[i])
        if(this.dna[i]=== DNAToCompare.dna[i]){
          numInCommon +=1;
        }
        else{
          continue;
        }
      }
      // console.log(numInCommon)
      var percentInCommon = numInCommon / this.dna.length * 100
      console.log(`${num} and ${DNAToCompare.specimenNum} have ${percentInCommon}% DNA in common`)
    },
    willLikelySurvive: function(){
      var numCGs = 0
      // console.log(this.dna)
      // console.log(this.dna.length)
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i]==='G'){
          numCGs +=1;
        }
      }
      if(numCGs/this.dna.length >= 0.6){
        // console.log(numCGs/this.dna.length)
        return true;
      }
      else 
        return false
    }
  };
}

var survivorDNAs = []
var ID = 0;
// var numDEAD = 0;
console.log(survivorDNAs.length)

while(survivorDNAs.length != 30){
  const pObject = pAequorFactory(ID, mockUpStrand());
  ID++;
  if(pObject.willLikelySurvive()){
    survivorDNAs.push(pObject)
  }

}

console.log(survivorDNAs)