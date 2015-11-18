describe("Mars Rover", function(){

	it("gets direction", function(){
		var rover = new Rover(new Point(1, 2), Direction.SOUTH);

		var direction = rover.direction;

		expect(direction).toBe('S');
	});

	it
});