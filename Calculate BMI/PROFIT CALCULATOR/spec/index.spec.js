describe("Test Case 1", function() {
    it("BMI Calculator", function() {
        expect(bmi(80, 1.80)).toEqual("Normal");;
      });
});
describe("Test Case 2", function() {
  it("BMI Calculator", function() {
      expect(bmi(60, 6.8)).toEqual("Underweight");;
    });
});
describe("Test Case 3", function() {
  it("BMI Calculator", function() {
      expect(bmi(90, 1)).toEqual("Obese");;
    });
});
describe("Test Case 4", function() {
  it("BMI Calculator", function() {
      expect(bmi(30, 1)).toEqual("Overweight");;
    });
});
describe("Test Case 5", function() {
  it("BMI Calculator", function() {
      expect(bmi(30, 3.4)).toEqual("Underweight");;
    });
});


