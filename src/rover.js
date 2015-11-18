function Rover(startingPoint, startingDirection)
{
	this.point = startingPoint;
	this.direction = startingDirection;
	
}

function Point(x, y)
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

var Direction =	{
					NORTH: 'N',
					SOUTH: 'S',
					EAST: 'E',
					WEST: 'W'
				};