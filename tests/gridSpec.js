describe("Grid", function(){
	
	it("throws exception when a point is out of the grid", function(){
		var grid = new Grid(5, 5);

		var validatePoint = function(){
			grid.validatePoint(new Point(6, 2))
		};

		expect(validatePoint).toThrow();
	});
});