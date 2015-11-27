function CommandFactory(command, position)
{
	if(command == Commands.FORWARD)
		return new ForwardCommand(position);
	if(command == Commands.BACKWARD)
		return new BackwardCommand(position);
	if(command == Commands.LEFT)
		return new LeftCommand(position);
	if(command == Commands.RIGHT)
		return new RightCommand(position);
}

function ForwardCommand(position)
{
	this.execute = function()
	{
		if(position.getDirection() == Direction.NORTH) {
			return new Position(new Point(position.getXCoordinate(), position.getYCoordinate() + 1), position.getDirection());
		}
		if(position.getDirection() == Direction.SOUTH) {
			return new Position(new Point(position.getXCoordinate(), position.getYCoordinate() - 1), position.getDirection());
		}
		if(position.getDirection() == Direction.EAST) {
			return new Position(new Point(position.getXCoordinate() + 1, position.getYCoordinate()), position.getDirection());
		}
		if(position.getDirection() == Direction.WEST) {
			return new Position(new Point(position.getXCoordinate() - 1, position.getYCoordinate()), position.getDirection());
		}
	};
}

function BackwardCommand(position)
{
	this.execute = function()
	{
		if(position.getDirection() == Direction.NORTH) {
			return new Position(new Point(position.getXCoordinate(), position.getYCoordinate() - 1), position.getDirection());
		}
		if(position.getDirection() == Direction.SOUTH) {
			return new Position(new Point(position.getXCoordinate(), position.getYCoordinate() + 1), position.getDirection());
		}
		if(position.getDirection() == Direction.EAST) {
			return new Position(new Point(position.getXCoordinate() - 1, position.getYCoordinate()), position.getDirection());
		}
		if(position.getDirection() == Direction.WEST) {
			return new Position(new Point(position.getXCoordinate() + 1, position.getYCoordinate()), position.getDirection());
		}	
	}
}

function LeftCommand(position)
{
	this.execute = function()
	{
		if(position.getDirection() == Direction.NORTH) {
			return new Position(position.getPoint(), Direction.WEST);
		}
		if(position.getDirection() == Direction.SOUTH) {
			return new Position(position.getPoint(), Direction.EAST);
		}
		if(position.getDirection() == Direction.EAST) {
			return new Position(position.getPoint(), Direction.NORTH);
		}
		if(position.getDirection() == Direction.WEST) {
			return new Position(position.getPoint(), Direction.SOUTH);
		}
	}
}

function RightCommand(position)
{
	this.execute = function()
	{
		if(position.getDirection() == Direction.NORTH) {
			return new Position(position.getPoint(), Direction.EAST);
		}
		if(position.getDirection() == Direction.EAST) {
			return new Position(position.getPoint(), Direction.SOUTH);
		}
		if(position.getDirection() == Direction.SOUTH) {
			return new Position(position.getPoint(), Direction.WEST);
		}
		if(position.getDirection() == Direction.WEST) {
			return new Position(position.getPoint(), Direction.NORTH);
		}
	}
}

var Commands = {
	FORWARD: 'F',
	BACKWARD: 'B',
	LEFT: 'L',
	RIGHT: 'R'
};