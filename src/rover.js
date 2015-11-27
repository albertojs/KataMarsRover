function Rover(position)
{
	var self = this;	

	self.currentPosition = position;
	
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