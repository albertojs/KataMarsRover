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

	it("moves forward facing west", function(){
		var rover = new Rover(new Point(4, 2), Direction.WEST);
		var moves = ['F'];
		
		var currentPosition = rover.move(moves);

		expect(currentPosition.getX()).toBe(3);
		expect(currentPosition.getY()).toBe(2);
	});

	it("moves forward twice", function(){
		var rover = new Rover(new Point(4, 2), Direction.NORTH);
		var moves = ["F", "F"];
		
		var currentPosition = rover.move(moves);

		expect(currentPosition.getX()).toBe(4);
		expect(currentPosition.getY()).toBe(4);
	});
});