function Grid(width, height)
{
	this.validatePoint = function(point)
	{
		if(point.getX() < 0 || point.getX() > width ||point.getY() < 0 || point.getY() >height)
			throw "Point is out of the Grid";
	};

	this.nextNorthPoint = function(point)
	{
		if(point.getY() < height)
			return new Point(point.getX(), point.getY() + 1);
		return new Point(point.getX(), 0);
	};

	this.nextSouthPoint = function(point)
	{
		if(point.getY() > 0)
			return new Point(point.getX(), point.getY() - 1);
		return new Point(point.getX(), height);
	};
}