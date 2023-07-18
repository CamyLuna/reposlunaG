//linea 1
function X(){
	// Obtener el elemento canvas y su contexto
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	// Definir el vector
	var vector =[-400, 400]; // Vector [x1, y1]
	
	// Calcular la escala del gráfico
	var escala = 50; // Cada unidad del vector representa 50 píxeles en el 		canvas
	
	// Calcular las coordenadas finales del vector
	var x1 = vector[0] * escala + canvas.width / 2;
	var y1 = -vector[1] * escala + canvas.height / 2;
	
	// Dibujar el vector en el canvas
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(x1, y1);
	ctx.strokeStyle = "red";
	ctx.lineWidth = 2;
	ctx.stroke();
	
	//Distancia entre los puntos
	var start = [0, 0];
 	var end = [-400, 400];
 	var distance = Math.sqrt(Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2));
 	var coordinates = document.getElementById("var vector");
 	coordinates.textContent = "La distancia del punto 1 es: " + distance;
}

//borrar
function borrarLineas(){
	//Obtener el elemento canvas y su contexto
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	//Limpiar el canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, 0);
	ctx.stroke();
}