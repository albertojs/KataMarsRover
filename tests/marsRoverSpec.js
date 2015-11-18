describe("Mars Rover", function(){

	it("gets direction", function(){
		var rover = new Rover(new Point(1, 2), Direction.SOUTH);

		var direction = rover.direction;

		expect(direction).toBe('S');
	});

	it("moves forward facing north", function(){
		var rover = new Rover(new Point(1, 2), Direction.NORTH);
		var moves = ['F'];
		
		var currentPosition = rover.move(moves);

		expect(currentPosition.getX()).toBe(1);
		expect(currentPosition.getY()).toBe(3);
	});

	it("moves forward facing south", function(){
		var rover = new Rover(new Point(1, 2), Direction.SOUTH);
		var moves = ['F'];
		
		var currentPosition = rover.move(moves);

		expect(currentPosition.getX()).toBe(1);
		expect(currentPosition.getY()).toBe(1);
	});

	it("moves forward facing east", function(){
		var rover = new Rover(new Point(1, 2), Direction.EAST);
		var moves = ['F'];
		
		var currentPosition = rover.move(moves);

		expect(currentPosition.getX()).toBe(2);
		expect(currentPosition.getY()).toBe(2);
	});
});