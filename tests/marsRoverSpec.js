describe("Mars Rover", function(){

	it("gets X coordinate", function(){
		var rover = new Rover(1, 1, 'N');

		var coordinateX = rover.getX();

		expect(coordinateX).toBe(1);
	});

	it("gets Y coordinate", function(){
		var rover = new Rover(1, 2, 'N');

		var coordinateY = rover.getY();

		expect(coordinateY).toBe(2);
	});


	function Rover(x, y, direction)
	{
		this.getX = function()
		{
			return x;
		};

		this.getY = function()
		{
			return y;
		};
	}
});