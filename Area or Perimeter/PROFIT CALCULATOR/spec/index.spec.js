describe("Test Case 1", function() {
    it("Area or Perimeter", function() {
        expect(areaOrPerimeter(4,4)).toEqual(16);;
      });
});
describe("Test Case 2", function() {
  it("Area or Perimeter", function() {
      expect(areaOrPerimeter(6 , 10)).toEqual(32);;
    });
});
describe("Test Case 3", function() {
  it("Area or Perimeter", function() {
      expect(areaOrPerimeter(5,44)).toEqual(98);;
    });
});
describe("Test Case 4", function() {
  it("Area or Perimeter", function() {
      expect(areaOrPerimeter(21,44)).toEqual(130);;
    });
});
describe("Test Case 5", function() {
  it("Area or Perimeter", function() {
      expect(areaOrPerimeter(-21,44)).toEqual(46);;
    });
});


