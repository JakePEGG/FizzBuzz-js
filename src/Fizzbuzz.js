var FizzBuzz = function(){};
console.log(FizzBuzz)

  FizzBuzz.prototype.isDivisibleBythree = function(number) {
    return this._isDivisibleBy(number, 3);
  };

  FizzBuzz.prototype.isDivisibleByfive = function(number) {
      return this._isDivisibleBy(number, 5);
  };
  FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
    return (number % divisor === 0);
  };

  FizzBuzz.prototype.divisiblebyboth = function(number) {
    return (number % 5 === 0 && number % 3 === 0)
  };

  FizzBuzz.prototype.play = function(number) {
      if(this.divisibleByboth(number)) {
          return 'FizzBuzz';
      } else if (this._isDivisibleBythree(number)) {
          return 'Fizz';
      } else if (this._isDivisibleByfive(number)) {
          return 'Buzz'
      } else {
          return number;
      }

      for (var i = 1; i <= 100; i++) {
      console.log(fizzBuzz.play(i))
  }
};


// this._ "Return this to me rather than console" e.g. run the numbers and report back to my method of whether this is true.
