function Rover(startingPoint, direction)
{
	this.currentPoint = startingPoint;
	
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