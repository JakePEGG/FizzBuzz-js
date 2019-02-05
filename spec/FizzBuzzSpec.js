describe('fizzbuzz',function(){
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

    describe('divisble by 3', function(){
      it('Checks to see if it generates fizz', function() {
        expect(fizzbuzz.divisiblebythree(3)).toBe(true);
      });
    });



});
