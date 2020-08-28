describe("Test Case 1", function() {
    it("Calculator", function() {
        expect(calculateTip(20, "Excellent")).toEqual(4);;
      });
});
describe("Test Case 2", function() {
  it("Calculator", function() {
      expect(calculateTip(26.95, "good")).toEqual(3);;
    });
});
describe("Test Case 3", function() {
  it("Calculator", function() {
      expect(calculateTip(2,"terrible")).toEqual(0);;
    });
});
describe("Test Case 4", function() {
  it("Calculator", function() {
      expect(calculateTip(50,"Great")).toEqual(8);;
    });
});
describe("Test Case 5", function() {
  it("Calculator", function() {
      expect(calculateTip(-5,"eat")).toEqual('Rating not recognised');;
    });
});


