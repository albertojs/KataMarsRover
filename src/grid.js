function Grid(width, height)
{
	this.validatePoint = function(point)
	{
		if(point.getX() < 0 || point.getX() > width ||point.getY() < 0 || point.getY() >height)
			throw "Point is out of the Grid";
	};

	this.nextNorthPoint = function(point)
	{
		return new Point(point.getX(), point.getY() + 1);
	};
}