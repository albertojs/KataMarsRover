describe("Mars Rover", function(){

	it("gets X coordinate", function(){
		var rover = new Rover(new Point(1, 1), 'N');

		var coordinateX = rover.currentPoint.getX();

		expect(coordinateX).toBe(1);
	});

	it("gets Y coordinate", function(){
		var rover = new Rover(new Point(1, 2), 'N');

		var coordinateY = rover.currentPoint.getY();

		expect(coordinateY).toBe(2);
	});
});