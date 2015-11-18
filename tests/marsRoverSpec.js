describe("Mars Rover", function(){

	it("gets X coordinate", function(){
		var rover = new Rover(1, 1, 'N');

		var coordinateX = rover.getX();

		expect(coordinateX).toBe(1);
	});


	function Rover(x, y, direction)
	{
		this.getX = function()
		{
			return x;
		};
	}
});