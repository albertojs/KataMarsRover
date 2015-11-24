function Rover(startingPoint, startingDirection)
{
	var self = this;

	self.point = startingPoint;
	
	self.direction = startingDirection;
	
	self.move = function(movements)
	{
		for(i = 0; i < movements.length; i++){
			var currentMovement = movements[i];
			var command = CommandFactory(currentMovement, self.direction, self.point)
			self.point = command.execute();
		}
		return self.point;
	};
}