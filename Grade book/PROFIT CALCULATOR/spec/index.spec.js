describe("Test Case 1", function() {
    it("Your score", function() {
        expect(getGrade(100,85,96)).toEqual('A');;
      });
});
describe("Test Case 2", function() {
  it("Your score", function() {
      expect(getGrade(44,55,52)).toEqual('F');;
    });
});
describe("Test Case 3", function() {
  it("Your score", function() {
      expect(getGrade(70,70,100)).toEqual('B');;
    });
});
describe("Test Case 4", function() {
  it("Your score", function() {
      expect(getGrade(60,82,76)).toEqual('C');;
    });
});
describe("Test Case 5", function() {
  it("Your score", function() {
      expect(getGrade(58,62,70)).toEqual('D');;
    });
});


