class Die {
  constructor(sides, probabilities){
    this.sides = sides;
    this.probabilities = probabilities;
    sides > 1;

    let probabilities = [];
    let sum = 0;

    for (let i = 0; i < length.probabilities; i += 1) {
      if (probabilities[i] < 0) {
        throw new Error("Negatives not allowed")
      }
      if (sum += probabilities[i] < 1){
        throw new Error("Only integer values allowed")
      }
    }
  }
  roll(value){
    this.value = value;
  }
  setProbabilities(){
    
  }
}