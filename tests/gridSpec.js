describe("Grid", function(){
	var grid;
	beforeEach(function(){
		grid = new Grid(5, 4);
	});

	it("throws exception when a point is out of the grid", function(){

		var validatePoint = function(){
			grid.validatePoint(new Point(6, 2))
		};

		expect(validatePoint).toThrow();
	});

	it("generates next north point", function(){
		var nextPoint = grid.nextNorthPoint(new Point(2, 3));

		expect(nextPoint.getX()).toBe(2);
		expect(nextPoint.getY()).toBe(4);
	});
});