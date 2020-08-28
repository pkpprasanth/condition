describe("Test Case 1", function() {
    it("Calculating increase numbers", function() {
        expect(increaseNumber(7,22)).toEqual(15);;
      });
});
describe("Test Case 2", function() {
  it("Calculating increase numbers", function() {
      expect(increaseNumber(1,10)).toEqual(9);;
    });
});
describe("Test Case 3", function() {
  it("Calculating increase numbers", function() {
      expect(increaseNumber(70,22)).toEqual(null);;
    });
});
describe("Test Case 4", function() {
  it("Calculating increase numbers", function() {
      expect(increaseNumber('R','T')).toEqual(null);;
    });
});
describe("Test Case 5", function() {
  it("Calculating increase numbers", function() {
      expect(increaseNumber(4,34)).toEqual(30);;
    });
});


