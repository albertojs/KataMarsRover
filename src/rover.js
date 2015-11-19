function Rover(startingPoint, startingDirection)
{
	var self = this;

	self.point = startingPoint;
	
	self.direction = startingDirection;
	
	self.move = function(movements)
	{
		for(i = 0; i < movements.length; i++){
			var currentMovement = movements[i];
			if(currentMovement == Movements.FORWARD)
				self.point = moveForward();
		}
		return self.point;
	};

	function moveForward(){
		if(self.direction == Direction.NORTH) {
			return new Point(self.point.getX(), self.point.getY() + 1);
		}
		if(self.direction == Direction.SOUTH) {
			return new  Point(self.point.getX(), self.point.getY() - 1);
		}
		if(self.direction == Direction.EAST) {
			return new  Point(self.point.getX() + 1, self.point.getY());
		}
		if(self.direction == Direction.WEST) {
			return new  Point(self.point.getX() - 1, self.point.getY());
		}
	};
}