describe("Test Case 1", function() {
    it("finalGrade Calculator", function() {
        expect(finalGrade(100, 12)).toEqual(100);;
      });
});
describe("Test Case 2", function() {
  it("finalGrade Calculator", function() {
      expect(finalGrade(85, 5)).toEqual(90);;
    });
});
describe("Test Case 3", function() {
  it("finalGrade Calculator", function() {
      expect(finalGrade(30,1)).toEqual(0);;
    });
});
describe("Test Case 4", function() {
  it("finalGrade Calculator", function() {
      expect(finalGrade(74,5)).toEqual(75);;
    });
});
describe("Test Case 5", function() {
  it("finalGrade Calculator", function() {
      expect(finalGrade(77,7)).toEqual(90);;
    });
});


