function CommandFactory(command, position)
{
	if(command == Commands.FORWARD)
		return new ForwardCommand(position.getDirection(), position.getPoint());
	if(command == Commands.BACKWARD)
		return new BackwardCommand(position.getDirection(), position.getPoint());
	if(command == Commands.LEFT)
		return new LeftCommand(position.getDirection(), position.getPoint());
	if(command == Commands.RIGHT)
		return new RightCommand(position.getDirection(), position.getPoint());
}

function ForwardCommand(direction, point)
{
	this.execute = function()
	{
		if(direction == Direction.NORTH) {
			return new Position(new Point(point.getX(), point.getY() + 1), direction);
		}
		if(direction == Direction.SOUTH) {
			return new Position(new Point(point.getX(), point.getY() - 1), direction);
		}
		if(direction == Direction.EAST) {
			return new Position(new Point(point.getX() + 1, point.getY()), direction);
		}
		if(direction == Direction.WEST) {
			return new Position(new Point(point.getX() - 1, point.getY()), direction);
		}
	};
}

function BackwardCommand(direction, point)
{
	this.execute = function()
	{
		if(direction == Direction.NORTH) {
			return new Position(new Point(point.getX(), point.getY() - 1), direction);
		}
		if(direction == Direction.SOUTH) {
			return new Position(new Point(point.getX(), point.getY() + 1), direction);
		}
		if(direction == Direction.EAST) {
			return new Position(new Point(point.getX() - 1, point.getY()), direction);
		}
		if(direction == Direction.WEST) {
			return new Position(new Point(point.getX() + 1, point.getY()), direction);
		}	
	}
}

function LeftCommand(direction, point)
{
	this.execute = function()
	{
		if(direction == Direction.NORTH) {
			return new Position(point, Direction.WEST);
		}
		if(direction == Direction.SOUTH) {
			return new Position(point, Direction.EAST);
		}
		if(direction == Direction.EAST) {
			return new Position(point, Direction.NORTH);
		}
		if(direction == Direction.WEST) {
			return new Position(point, Direction.SOUTH);
		}
	}
}

function RightCommand(direction, point)
{
	this.execute = function()
	{
		if(direction == Direction.NORTH) {
			return new Position(point, Direction.EAST);
		}
	}
}

var Commands = {
	FORWARD: 'F',
	BACKWARD: 'B',
	LEFT: 'L',
	RIGHT: 'R'
};