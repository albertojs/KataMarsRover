describe("Mars Rover", function(){

	it("gets direction", function(){
		var rover = new Rover(new Point(1, 2), Direction.SOUTH);

		var direction = rover.direction;

		expect(direction).toBe('S');
	});

	it
});

describe("Point", function(){

	it("gets X coordinate", function(){
		var point = new Point(1, 1);

		var coordinateX = point.getX();

		expect(coordinateX).toBe(1);
	});

	it("gets Y coordinate", function(){
		var point = new Point(1, 2);

		var coordinateY = point.getY();

		expect(coordinateY).toBe(2);
	});
});