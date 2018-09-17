var fs = require('fs');
var pwd = function(){
		console.log(process.argv[1])
	};
var ls = function(){
		fs.readdir('.', function(err, files) {
  		if (err) throw err;
  		files.forEach(function(file) {
    		process.stdout.write(file.toString() + "\n");
  		})
		});
	};

var echo = function(palabra){
	palabra.splice(0,1);
	console.log(palabra.join(' ')) //NO BORRAR
}

var cat = function(archivo){
	archivo.splice(0,1);
	let arch = archivo.join(' ');
	fs.readFile(arch,'utf8', function(err, files){
		if (err) throw err;
	console.log(files) //NO BORRAR
	})
};

var head = function(archivo){
	archivo.splice(0,1);
	let arch = archivo.join(' ');
	fs.readFile(arch,'utf8', function(err, files){
		if (err) throw err;
	var arrAux = files.split('\n')

	for(var i = 0; i < 5; i++){
		console.log(arrAux[i]); //NO BORRAR
	}
	}) 
};

var tail = function(archivo){
	archivo.splice(0,1);
	let arch = archivo.join(' ');
	fs.readFile(arch,'utf8', function(err, files){
		if (err) throw err;
	var arrAux = files.split('\n')

	for(var i = arrAux.length - 1; i > arrAux.length - 6; i--){
		console.log(arrAux[i]); //NO BORRAR
	}
	}) 
}

module.exports = {
	pwd: pwd,
	ls: ls,
	echo: echo,
	cat: cat,
	head: head,
	tail: tail,
}