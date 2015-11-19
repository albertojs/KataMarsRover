describe("Mars Rover", function(){

	it("gets direction", function(){
		var rover = new Rover(new Point(1, 2), Direction.SOUTH);

		var direction = rover.direction;

		expect(direction).toBe('S');
	});

	it("moves forward facing north", function(){
		var rover = new Rover(new Point(1, 2), Direction.NORTH);
		var movements = ['F'];
		
		var currentPosition = rover.move(movements);

		expect(currentPosition.getX()).toBe(1);
		expect(currentPosition.getY()).toBe(3);
	});

	it("moves forward facing south", function(){
		var rover = new Rover(new Point(1, 2), Direction.SOUTH);
		var movements = ['F'];
		
		var currentPosition = rover.move(movements);

		expect(currentPosition.getX()).toBe(1);
		expect(currentPosition.getY()).toBe(1);
	});

	it("moves forward facing east", function(){
		var rover = new Rover(new Point(1, 2), Direction.EAST);
		var movements = ['F'];
		
		var currentPosition = rover.move(movements);

		expect(currentPosition.getX()).toBe(2);
		expect(currentPosition.getY()).toBe(2);
	});

	it("moves forward facing west", function(){
		var rover = new Rover(new Point(4, 2), Direction.WEST);
		var movements = ['F'];
		
		var currentPosition = rover.move(movements);

		expect(currentPosition.getX()).toBe(3);
		expect(currentPosition.getY()).toBe(2);
	});

	it("moves forward twice", function(){
		var rover = new Rover(new Point(4, 2), Direction.NORTH);
		var movements = ["F", "F"];
		
		var currentPosition = rover.move(movements);

		expect(currentPosition.getX()).toBe(4);
		expect(currentPosition.getY()).toBe(4);
	});

	it("moves backward facing north", function(){
		var rover = new Rover(new Point(1, 2), Direction.NORTH);
		var movements = ['B'];
		
		var currentPosition = rover.move(movements);

		expect(currentPosition.getX()).toBe(1);
		expect(currentPosition.getY()).toBe(1);
	});

	it("moves backward facing south", function(){
		var rover = new Rover(new Point(1, 2), Direction.SOUTH);
		var movements = ['B'];
		
		var currentPosition = rover.move(movements);

		expect(currentPosition.getX()).toBe(1);
		expect(currentPosition.getY()).toBe(3);
	});

	it("moves backward facing east", function(){
		var rover = new Rover(new Point(3, 3), Direction.EAST);
		var movements = ['B'];
		
		var currentPosition = rover.move(movements);

		expect(currentPosition.getX()).toBe(2);
		expect(currentPosition.getY()).toBe(3);
	});

	it("moves backward facing west", function(){
		var rover = new Rover(new Point(3, 3), Direction.WEST);
		var movements = ['B'];
		
		var currentPosition = rover.move(movements);

		expect(currentPosition.getX()).toBe(4);
		expect(currentPosition.getY()).toBe(3);
	});
});