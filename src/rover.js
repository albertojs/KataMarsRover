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
		if(moves[0] == 'F' && self.direction == Direction.SOUTH) {
			self.point = new Point(self.point.getX(), self.point.getY() - 1);
			return self.point;
		}
		if(moves[0] == 'F' && self.direction == Direction.EAST) {
			self.point = new Point(self.point.getX() + 1, self.point.getY());
			return self.point;
		}
	};
}