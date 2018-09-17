var commands = require('./commands')
// Output un prompt
process.stdout.write('escribi algo > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var userCommand = data.toString().trim();
  var inputSplit = userCommand.split(' '); // remueve la nueva línea
  if(userCommand == 'pwd'){
  	commands[userCommand]();
  } else if (userCommand == 'ls'){
  	commands[userCommand]();
  } else if (inputSplit[0] == 'echo'){
  	commands[inputSplit[0]](inputSplit)
  	//echo.splice(0,1)
  	//console.log(echo.join(' '))
  } else if(inputSplit[0] == 'cat'){
  	commands[inputSplit[0]](inputSplit)
  } else if(inputSplit[0] == 'head'){
  	commands[inputSplit[0]](inputSplit)
  } else if(inputSplit[0] == 'tail'){
  	commands[inputSplit[0]](inputSplit)
  }
  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});