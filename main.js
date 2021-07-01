// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (id, dnaArray) => {
  let pAequor = {
    specimenNum: id,
    dna: dnaArray,

    // this method will change a random base to another random base
    mutate() {
      // make a copy of the array
      let newDNA = dnaArray.slice();
      // picks a random base
      let newDnaStrand = newDNA[Math.floor(Math.random() * 15)];
      // randomizes a new base
      let newBase = returnRandBase();
      // gets the position of the base we picked to change in our DNA Array
      let dnaPosition = newDNA.indexOf(newDnaStrand);
      // changes the chosen base to the new random base
      this.dna[dnaPosition] = newBase;
      return this.dna;
    },

    // Compares the DNA of of the current pAequor with the passed in pAequor
    compareDNA(organism) {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === organism.dna[i]) {
          count++;
        }
      }
      console.log(count);
      let percent = Math.floor((count / 15) * 100);
      console.log(
        `Specimen #${this.specimenNum} and Specimen #${organism.specimenNum} have %${percent} DNA in common.`
      );
    },

    willLikelySurvive() {
      let count = 0;

      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === "C" || this.dna[i] == "G") {
          count++;
        }
      }

      let survival = Math.floor((count / 15) * 100);

      console.log(`There are ${count} G's and C's`);
      console.log(`The survival rate is %${survival}`);
      if (survival >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };

  return pAequor;
};

// Loop to create 30 organisms (pAequors)
let pAequorArray = [];

for (let x = 0; x < 30; x++) {
  let n = x + 1;
  pAequorArray[x] = pAequorFactory(n, mockUpStrand());
  console.log(pAequorArray[x]);
  if (pAequorArray[x].willLikelySurvive()) {
    console.log("This little guy will definitely survive");
  } else {
    console.log("He dead");
  }
}
