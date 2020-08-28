describe("Test Case 1", function() {
    it("otherAngle Calculator", function() {
        expect(otherAngle(30, 60)).toEqual(90);;
      });
});
describe("Test Case 2", function() {
  it("otherAngle Calculator", function() {
      expect(otherAngle(60,60)).toEqual(60);;
    });
});
describe("Test Case 3", function() {
  it("otherAngle Calculator", function() {
      expect(otherAngle(90, 97)).toEqual(0);;
    });
});
describe("Test Case 4", function() {
  it("otherAngle Calculator", function() {
      expect(otherAngle(30, -1)).toEqual(0);;
    });
});
describe("Test Case 5", function() {
  it("otherAngle Calculator", function() {
      expect(otherAngle(10,20)).toEqual(150);;
    });
});


