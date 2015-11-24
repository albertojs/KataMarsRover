function CommandFactory(movement, direction, point)
{
	if(movement == Movements.FORWARD)
		return new ForwardCommand(direction, point);
	if(movement == Movements.BACKWARD)
		return new BackwardCommand(direction, point);
}

function ForwardCommand(direction, point)
{
	this.execute = function()
	{
		if(direction == Direction.NORTH) {
			return new Point(point.getX(), point.getY() + 1);
		}
		if(direction == Direction.SOUTH) {
			return new  Point(point.getX(), point.getY() - 1);
		}
		if(direction == Direction.EAST) {
			return new  Point(point.getX() + 1, point.getY());
		}
		if(direction == Direction.WEST) {
			return new  Point(point.getX() - 1, point.getY());
		}
	};
}

function BackwardCommand(direction, point)
{
	this.execute = function()
	{
		if(direction == Direction.NORTH) {
			return new Point(point.getX(), point.getY() - 1);
		}
		if(direction == Direction.SOUTH) {
			return new Point(point.getX(), point.getY() + 1);
		}
		if(direction == Direction.EAST) {
			return new Point(point.getX() - 1, point.getY());
		}
		if(direction == Direction.WEST) {
			return new Point(point.getX() + 1, point.getY());
		}	
	}
}