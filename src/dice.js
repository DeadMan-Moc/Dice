class Die {
  constructor(sides, probabilities){
    this.sides = sides;
    this.probabilities = probabilities;
    sides > 1;
  }
  roll(value){
    this.value = value;
  }
}