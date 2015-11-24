function Rover(startingPoint, startingDirection)
{
	var self = this;

	self.point = startingPoint;
	
	self.direction = startingDirection;
	
	self.move = function(commands)
	{
		for(i = 0; i < commands.length; i++){
			var currentCommand = commands[i];
			var command = CommandFactory(currentCommand, self.direction, self.point)
			self.point = command.execute();
		}
		return self.point;
	};
}