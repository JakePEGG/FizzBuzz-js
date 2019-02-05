var FizzBuzz = function(){

  FizzBuzz.prototype.isDivisibleBythree = function(number) {
    return this._isDivisibleBy(number, 3);
  };

  FizzBuzz.prototype.isDivisibleByfive = function(number) {
      return this._isDivisibleBy(number, 5);
  };
  FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
    return (number % divisor === 0);
  };
};


// this._ "Return this to me rather than console" e.g. run the numbers and report back to my method of whether this is true.
