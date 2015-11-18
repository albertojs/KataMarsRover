function Rover(startingPoint, startingDirection)
{
	var self = this;

	self.point = startingPoint;
	
	self.direction = startingDirection;
	
	self.move = function(moves)
	{
		if(moves[0] == 'F' && self.direction == Direction.NORTH) {
			self.point = new Point(self.point.getX(), self.point.getY() + 1);
			return self.point;
		}
	};
}