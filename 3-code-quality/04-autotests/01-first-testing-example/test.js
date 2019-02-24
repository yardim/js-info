describe('pow', function () {
  describe('creates 3\'d degree of n', function () {
    function makeTest(x) {
      var expected = x * x * x;

      it('should return 3\'d degree of ' + x + ': ' + expected, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe('checks if n regular number', function() {
    it('should return NaN if n <= 0', function() {
      assert(isNaN(pow(3, -1)), 'pow(3, -1) not NaN');
    });

    it('should return NaN if n is a fraction', function() {
      assert(isNaN(pow(3, 1.5)), 'pow(3, 1.5) not NaN');
    });
  });

  describe('checks values for 0 degree', function() {
    function makeTest(x) {
      it('should return 1 if n === 0', function () {
        assert.strictEqual(pow(x, 0), 1);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

    it('should return NaN with x === 0 and n === 0', function() {
      assert.equal(isNaN(pow(0, 0)), true);
    });
  });
});
