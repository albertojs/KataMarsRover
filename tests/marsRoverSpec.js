describe("Mars Rover", function(){

	it("gets direction", function(){
		var rover = new Rover(new Point(1, 2), Direction.SOUTH);

		var currentPosition = rover.currentPosition;

		expect(currentPosition.getDirection()).toBe('S');
	});

	describe("moves forward", function(){

		it("facing north", function(){
		var rover = new Rover(new Point(1, 2), Direction.NORTH);
		var movements = ['F'];

		var currentPosition = rover.move(movements);

		expect(currentPosition.getXCoordinate()).toBe(1);
		expect(currentPosition.getYCoordinate()).toBe(3);
		});

		it("facing south", function(){
			var rover = new Rover(new Point(1, 2), Direction.SOUTH);
			var movements = ['F'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(1);
			expect(currentPosition.getYCoordinate()).toBe(1);
		});

		it("facing east", function(){
			var rover = new Rover(new Point(1, 2), Direction.EAST);
			var movements = ['F'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(2);
			expect(currentPosition.getYCoordinate()).toBe(2);
		});

		it("facing west", function(){
			var rover = new Rover(new Point(4, 2), Direction.WEST);
			var movements = ['F'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(3);
			expect(currentPosition.getYCoordinate()).toBe(2);
		});

		it("twice", function(){
			var rover = new Rover(new Point(4, 2), Direction.NORTH);
			var movements = ["F", "F"];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(4);
			expect(currentPosition.getYCoordinate()).toBe(4);
		});
	});

	describe("moves backward", function(){

		it("facing north", function(){
			var rover = new Rover(new Point(1, 2), Direction.NORTH);
			var movements = ['B'];
		
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(1);
			expect(currentPosition.getYCoordinate()).toBe(1);
		});

		it("facing south", function(){
			var rover = new Rover(new Point(1, 2), Direction.SOUTH);
			var movements = ['B'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(1);
			expect(currentPosition.getYCoordinate()).toBe(3);
		});

		it("facing east", function(){
			var rover = new Rover(new Point(3, 3), Direction.EAST);
			var movements = ['B'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(2);
			expect(currentPosition.getYCoordinate()).toBe(3);
		});

		it("facing west", function(){
			var rover = new Rover(new Point(3, 3), Direction.WEST);
			var movements = ['B'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(4);
			expect(currentPosition.getYCoordinate()).toBe(3);
		});

		it("twice", function(){
			var rover = new Rover(new Point(3, 3), Direction.NORTH);
			var movements = ['B', 'B'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(3);
			expect(currentPosition.getYCoordinate()).toBe(1);
		});

	});

	describe("turns left", function(){
		
		it("facing north", function(){
			var rover = new Rover(new Point(1, 2), Direction.NORTH);
			var movements = ['L'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.WEST);
		});

		it("facing west", function(){
			var rover = new Rover(new Point(1, 2), Direction.WEST);
			var movements = ['L'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.SOUTH);
		});

		it("facing south", function(){
			var rover = new Rover(new Point(1, 2), Direction.SOUTH);
			var movements = ['L'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.EAST);
		});

		it("facing east", function(){
			var rover = new Rover(new Point(1, 2), Direction.EAST);
			var movements = ['L'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.NORTH);
		});

		it("twice facing east", function(){
			var rover = new Rover(new Point(1, 2), Direction.EAST);
			var movements = ['L','L'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.WEST);
		});
	});

	describe("turns right", function(){

		it("facing north", function(){
			var rover = new Rover(new Point(1, 2), Direction.NORTH);
			var movements = ['R'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.EAST);
		});

		it("facing east", function(){
			var rover = new Rover(new Point(1, 2), Direction.EAST);
			var movements = ['R'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.SOUTH);
		});

		it("facing south", function(){
			var rover = new Rover(new Point(1, 2), Direction.SOUTH);
			var movements = ['R'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.WEST);
		});

		it("facing west", function(){
			var rover = new Rover(new Point(1, 2), Direction.WEST);
			var movements = ['R'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.NORTH);
		});
	});
});