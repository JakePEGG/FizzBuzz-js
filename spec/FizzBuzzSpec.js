describe('fizzbuzz',function(){
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

    describe('divisble by 3', function(){
      it('Checks to see if its divisble by 3', function() {
        expect(fizzbuzz.divisiblebythree(3)).toBe(true);
      });
    });



});
