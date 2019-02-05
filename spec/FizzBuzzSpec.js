describe('fizzbuzz', function(){

  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

    describe('divisible by 3', function(){
      it('Checks to see if its divisble by 3', function() {
        expect(fizzbuzz.isDivisibleBythree(3)).toBe(true);
      });
    });

    describe('divisible by 5', function(){
      it('Checks to see if its divisble by 5', function() {
        expect(fizzbuzz.isDivisibleByfive(5)).toBe(true);
      });
    });

});
