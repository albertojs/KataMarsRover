function Rover(startingPoint, startingDirection)
{
	var self = this;	

	self.currentPosition = new Position(startingPoint, startingDirection)
	
	self.move = function(commands)
	{
		for(i = 0; i < commands.length; i++){
			var currentCommand = commands[i];
			var command = CommandFactory(currentCommand, self.currentPosition);
			self.currentPosition = command.execute();
		}
		return self.currentPosition;
	};
}