describe("Test Case 1", function() {
    it("Is he gonna survive", function() {
        expect(hero(10, 5)).toEqual(true);;
      });
});
describe("Test Case 2", function() {
  it("Is he gonna survive", function() {
      expect(hero(7, 4)).toEqual(false);;
    });
});
describe("Test Case 3", function() {
  it("Is he gonna survive", function() {
      expect(hero(4, 5)).toEqual(false);;
    });
});
describe("Test Case 4", function() {
  it("Is he gonna survive", function() {
      expect(hero(100, 40)).toEqual(true);;
    });
});
describe("Test Case 5", function() {
  it("Is he gonna survive", function() {
      expect(hero(1500, 751)).toEqual(false);;
    });
});


