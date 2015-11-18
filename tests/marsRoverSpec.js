describe("Mars Rover", function(){

	it("gets X coordinate", function(){
		var rover = new Rover(new Point(1, 1), 'N');

		var coordinateX = rover.point.getX();

		expect(coordinateX).toBe(1);
	});

	it("gets Y coordinate", function(){
		var rover = new Rover(new Point(1, 2), 'N');

		var coordinateY = rover.point.getY();

		expect(coordinateY).toBe(2);
	});

	it("gets direction", function(){
		var rover = new Rover(new Point(1, 2), 'S');

		var direction = rover.direction;

		expect(direction).toBe('S');
	});
});