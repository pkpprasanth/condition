describe("Test Case 1", function() {
    it("find Digit", function() {
        expect(findDigit(5673, 4)).toEqual(5);;
      });
});
describe("Test Case 2", function() {
  it("find Digit", function() {
      expect(findDigit(129, 2)).toEqual(2);;
    });
});
describe("Test Case 3", function() {
  it("find Digit", function() {
      expect(findDigit(-2825, 3)).toEqual(8);;
    });
});
describe("Test Case 4", function() {
  it("find Digit", function() {
      expect(findDigit(-456, 4)).toEqual(0);;
    });
});
describe("Test Case 5", function() {
  it("find Digit", function() {
      expect(findDigit(65, 0)).toEqual(-1);;
    });
});


