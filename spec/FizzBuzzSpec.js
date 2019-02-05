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

    describe('divisible by 4', function(){
      it('Checks to see if its divisble by 4', function() {
        expect(fizzbuzz.isDivisibleBythree(4)).toBe(false);
      });
    });

    describe('divisble by 6', function(){
      it('checks to test whether its divisble by 6', function(){
        expect(fizzbuzz.isDivisibleByfive(6)).toBe(false);
      });
    });

    describe('divisble by both', function(){
      it("check whether its divisble by both 3&5", function(){
        expect(fizzbuzz.divisiblebyboth(15)).toBe(true);
      });
    });

    describe('divisble by 16?', function() {
      it("check to see whether to see if it understands fizzbuzz", function(){
        expect(fizzbuzz.divisiblebyboth(16)).toBe(false);
      });
    });

});
