class Die {
  constructor(sides, probabilities){
    this.sides = sides;
    this.probabilities = probabilities;
    sides > 1;

    var sum = 0;

    if (arguments.length== 2){
      this.probabilities = arguments[1];
      for (let i = 0; i < probabilities.length; i += 1) {
        if (probabilities[i] < 0) {
          throw new Error("Negatives probabilities not allowed").message;
        }
        
        if (isNaN(probabilities[i]) == true){
          throw new Error("Only integer values allowed").message;
        }
      }
    }
}
  roll(){
    return (this.value = Math.floor(Math.random() * this.sides));
  }
  setProbabilities(probabilities){
    this.probabilities = probabilities
  }
}

class DiceFactory extends Die{
  constructor(dice){
    this.dice = dice
    if (probabilities.length == 2){
      
    }
  }
  makeDie(){
    return(this.dice)
  }
}

// let die6 = new Die(6)
// die6.roll()

// let die20 = new Die(20)
// die20.roll()

// console.log(die6.value) // this would print a number between 1 and 6 inclusive
// console.log(die20.value) 
let dieDodgy6 = new Die(6,[1,1,1,1,1,2])
dieDodgy6.roll();

console.log(dieDodgy6.value) 
