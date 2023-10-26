 
 function crearTextura(semilla) {
		//semilla = "1000ZZZ31"
		semilla = semilla.toString();
		let patron = parseInt(semilla.charAt(0) || 1);
		let colorA = (semilla.charAt(1) || "0") + (semilla.charAt(2) || "0") + (semilla.charAt(3) || "0");
		let colorB = (semilla.charAt(4) || "0") + (semilla.charAt(5) || "0") + (semilla.charAt(6) || "0");
		let figura = parseInt(semilla.charAt(7) || 1);
		let especial = semilla.charAt(8) || 5;
		let densidad =  parseInt(semilla.charAt(9) || 1,36);
		let desorden = parseInt(semilla.charAt(10) || 0,36);
        // Crear un elemento canvas
        const canvas = document.createElement("canvas");
        // Establecer el ancho y alto del canvas
        canvas.width = 600;
        canvas.height = 600;
        // Obtener el contexto de dibujo 2D del canvas
        const ctx = canvas.getContext("2d");
        // Elegir el patrón
		var valoresK = [];
		switch (patron){
			case 1:
				valoresK = [1, 3, 5, 7, 9, 10, 12, 14, 16, 18, 21, 23, 25, 27, 29, 30, 32, 34, 36, 38, 41, 43, 45, 47, 49,
							50, 52, 54, 56, 58, 61, 63, 65, 67, 69, 70, 72, 74, 76, 78, 81, 83, 85, 87, 89, 90, 92, 94, 96, 98];
				break;
			case 2:
				valoresK =  [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
							60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89];
				break;
			case 3:
				valoresK =	[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58,
							60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98];
				break;
			case 4:
				valoresK =	[ 4,13,15,22,26,31,34,37,40,43,45,48,51,54,57,62,66,73,75,84,69,78,87,96,7,18,29,70,81,92,1,10,99];
			break;
			case 5:
				valoresK =	[10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20,21,22,23,24,25,26,27,28,29,30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
							60,61,62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,80,81,82,83,84,85,86,87,88,89];
			break;
			case 6:
				valoresK =	[1,11,21,31,61,71,81,91,2,12,22,32,62,72,82,92,3,13,23,33,63,73,83,93,4,14,24,34,64,74,84,94,16,26,36,46,56,66,76,
							86,17,27,37,47,57,67,77,87,18,28,38,48,58,68,78,88,19,29,39,49,59,69,79,89];
			break;
			case 7:
				valoresK =	[0,40,50,90,1,11,81,91,12,22,72,82,23,33,63,73,34,44,54,64,5,45,55,95,6,16,86,96,17,27,77,87,28,38,68,78,39,49,59,69];
			break;
			case 8:
				valoresK =	[40,41,52,53,64,74,85,95,5,15,26,37,48,49,10,70,11,71,2,82,92,8,88,98,19,79];
			break;			
 			
			case 9:
			
			for (let i = 0; i < 100; i++) {
			  valoresK.push(i);
			}
			break;	


			
			default:
				valoresK = [];
		}
		var i = 0;
		let color;
		for (let d = 0; d < densidad; d++){
			valoresK.forEach(k => {
				color = numToColor(colorA,colorB);
				x = Math.floor(k / 10) - random(-desorden/10,desorden/10);
				y = k % 10 - random(-desorden/10,desorden/10); //aca k%10 era j
				if ((x < 0 || x > 9) && (y < 0 || y > 9)) x = Math.floor(k / 10); //las esquinas requerían demasiado codigo
				crearFigura(figura,x,y,color,especial)
			});
		}
	
		const newCanvas = document.createElement("canvas");
		newCanvas.width = 500;
		newCanvas.height = 500;
		const newCtx = newCanvas.getContext("2d");

		// Dibujar la región recortada en el nuevo canvas
		//ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
		newCtx.drawImage(canvas, 50, 50, 500, 500, 0, 0, 500, 500);//el centro
		newCtx.drawImage(canvas, 550, 50, 50, 500, 0, 0, 50, 500);
		newCtx.drawImage(canvas, 0, 50, 50, 500, 450, 0, 50, 500);
		newCtx.drawImage(canvas, 50, 0, 500, 50, 0, 450, 500, 50);
		newCtx.drawImage(canvas, 50, 550, 500, 50, 0, 0, 500, 50);
		
		
		// Obtener la imagen del nuevo canvas
		
		const dataURL = newCanvas.toDataURL("image/png");
		//const dataURL = canvas.toDataURL("image/png");

        // Establecer la representación en base64 como background-image del div
        const tablero = document.getElementById("tablero");
		return `url(${dataURL})`;
		
			
		function random(min, max) {
			if (min > max){
				var aux = min;
				min = max;
				max = aux;
			} 
			return Math.random() * (max - min) + min;
		}
		
		function numerarfigura(k,x,y){
			ctx.fillStyle = '#fff';
			ctx.font = '20px Arial';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(k, x * 50 + 25+50, y * 50 + 25+50);
		}
		
		function numToColor(num1,num2 = "000") {
			const r = random(Math.floor(parseInt(num1[0],36) * 255 / 36),Math.floor(parseInt(num2[0],36) * 255 / 36));
			const g = random(Math.floor(parseInt(num1[1],36) * 255 / 36),Math.floor(parseInt(num2[1],36) * 255 / 36));
			const b = random(Math.floor(parseInt(num1[2],36) * 255 / 36),Math.floor(parseInt(num2[2],36) * 255 / 36));
			return `rgb(${r}, ${g}, ${b})`;
		}
		
		function getComplementaryColor(rgbColor) {
		  var colors = rgbColor.slice(rgbColor.indexOf('(') + 1, rgbColor.indexOf(')')).split(',');
		  var r = parseInt(colors[0]);
		  var g = parseInt(colors[1]);
		  var b = parseInt(colors[2]);

		  r = (255 - r);
		  g = (255 - g);
		  b = (255 - b);

		  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
		}
		
								  
		function crearFigura(tipo,x,y,color,especial){
			base = 50;
			ctx.fillStyle = color;
			if (tipo == 1){//Rectangulo
				especial = (especial == "!")? Math.floor(random(0,35)):parseInt(especial, 36);
				largo =  0;
				ancho =  0;
				(especial <= 18)?ancho =  especial:largo =  especial-18;
				ctx.fillRect(x * 50 + base, y * 50 + base, 50 - ancho * 2 , 50 - largo * 2);
			}else if(tipo == 2){//circulo
				radius = (especial == "!")? Math.floor(random(1,18)): Math.floor(parseInt(especial, 36)/2) + 1;
				ctx.beginPath();
				ctx.arc(x * 50 + 25 + base, y * 50 + 25 + base, 25 * radius/10, 0, 2 * Math.PI);
				ctx.fill();
			} else if (tipo === 3){//reloj de arena
				especial = (especial == "!")? Math.floor(random(0,4)):  Math.floor(parseInt(especial, 36) / 35 * 4);
				if (especial == 0){// asi:|
					ctx.beginPath();
					ctx.moveTo(x * 50 + base, y * 50 + base);
					ctx.lineTo(x * 50 + 50 +  base, y * 50 + base);
					ctx.lineTo(x * 50 + 25 +  base, y * 50 + 25 + base);
					ctx.closePath();
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + 25 + base);
					ctx.lineTo(x * 50 + 50 +  base, y * 50 + 50  + base);
					ctx.lineTo(x * 50 + 0 +  base, y * 50 + 50 + base);
					ctx.closePath();
					ctx.fill();
				}else if(especial == 1){//asi:--
					ctx.beginPath();
					ctx.moveTo(x * 50 + base, y * 50 + base);
					ctx.lineTo(x * 50 + 25 +  base, y * 50 + 25 + base);
					ctx.lineTo(x * 50 + base, y * 50 + 50 + base);
					ctx.closePath();
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(x * 50 + 50 + base, y * 50 + 0 + base);
					ctx.lineTo(x * 50 + 25 +  base, y * 50 + 25  + base);
					ctx.lineTo(x * 50 + 50 +  base, y * 50 + 50 + base);
					ctx.closePath();
					ctx.fill();
				}else if(especial == 2){//asi:/
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + base);
					ctx.lineTo(x * 50 +  base, y * 50 + 25 + base);
					ctx.lineTo(x * 50 + 25 +  base, y * 50 + 25 + base);
					ctx.closePath();
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + 25 + base);
					ctx.lineTo(x * 50 + 25 + base, y * 50 + 50 + base);
					ctx.lineTo(x * 50 + 50 + base, y * 50 + 25 + base);
					ctx.closePath();
					ctx.fill();

				}else if(especial == 3){//asi: 
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + base);
					ctx.lineTo(x * 50 + 25 + base, y * 50 + 25 + base);
					ctx.lineTo(x * 50 + 50 +  base, y * 50 + 25 + base);
					ctx.closePath();
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + 25 + base);
					ctx.lineTo(x * 50 + 25 + base, y * 50 + 50 + base);
					ctx.lineTo(x * 50 + 0 + base, y * 50 + 25 + base);
					ctx.closePath();
					ctx.fill();
				}
			} else if (tipo === 4) { // FiguraLados
				const sides = (especial == "!")? Math.floor(random(3,9)): 3 + Math.floor(parseInt(especial, 36) / 35 * 6);
				const radius = 25;
				const x0 = x * 50 + radius + base;
				const y0 = y * 50 + radius + base;
				ctx.beginPath();
				ctx.moveTo(x0 + radius, y0);
				for (let i = 1; i < sides; i++) {
				  const angle = (2 * Math.PI * i) / sides;
				  const xi = x0 + radius * Math.cos(angle);
				  const yi = y0 + radius * Math.sin(angle);
				  ctx.lineTo(xi, yi);
				}
				ctx.closePath();
				ctx.fill();
			} else if (tipo === 5) { // cartas
				especial = (especial == "!")? Math.floor(random(0,4)):  Math.floor(parseInt(especial, 36) / 35 * 4);
				if (especial == 0){// corazón
					ctx.beginPath();
					ctx.arc(x * 50 + 20 + base, y * 50 + 20 + base, 15, 0, 2 * Math.PI);
					ctx.arc(x * 50 + 35 + base, y * 50 + 20 + base, 15, 0, 2 * Math.PI);
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(x * 50 + 5 +  base, y * 50 + 25 + base);
					ctx.lineTo(x * 50 + 50 + base, y * 50 + 25 + base);
					ctx.lineTo(x * 50 + 27 + base, y * 50 + 50 + base);
					ctx.closePath();
					ctx.fill();
				}else if (especial == 1){ //diamante
					ctx.beginPath();
					ctx.moveTo(x * 50 +  base, y * 50 + 15 + base);
					ctx.lineTo(x * 50 + 10 + base, y * 50  + base);
					ctx.lineTo(x * 50 + 40 + base, y * 50  + base);
					ctx.lineTo(x * 50 + 50 + base, y * 50 + 15 + base);
					ctx.closePath();
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(x * 50 +  base, y * 50 + 15 + base);
					ctx.lineTo(x * 50 + 50 + base, y * 50 + 15 + base);
					ctx.lineTo(x * 50 + 25 + base, y * 50 + 50 + base);
					ctx.closePath();
					ctx.fill();
				}else if (especial == 2){//trebol	
					ctx.beginPath();
					ctx.arc(x * 50 + 12 + base, y * 50 + 27 + base, 12, 0, 2 * Math.PI);
					ctx.arc(x * 50 + 38 + base, y * 50 + 27 + base, 12, 0, 2 * Math.PI);
					ctx.fill();
					ctx.beginPath();
					ctx.arc(x * 50+25 + base, y * 50 + 13 + base, 12, 0, 2 * Math.PI);
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(x * 50 + 15 + base, y * 50 + 50 + base);
					ctx.lineTo(x * 50 + 35 + base, y * 50 + 50 + base);
					ctx.lineTo(x * 50 + 25 + base, y * 50 + 20 + base);
					ctx.closePath();
					ctx.fill();
				}else{//pica	
					ctx.beginPath();
					ctx.arc(x * 50 + 12 + base, y * 50 + 29 + base, 12, 0, 2 * Math.PI);
					ctx.arc(x * 50 + 38 + base, y * 50 + 29 + base, 12, 0, 2 * Math.PI);
					ctx.fill();
					
					ctx.beginPath();
					ctx.moveTo(x * 50 + base, y * 50 + 25 + base);
					ctx.lineTo(x * 50 + 50 + base, y * 50 + 25 + base);
					ctx.lineTo(x * 50 + 25 + base, y * 50  + base);
					ctx.closePath();
					ctx.fill();
					
					ctx.beginPath();
					ctx.moveTo(x * 50 + 15 + base, y * 50 + 50 + base);
					ctx.lineTo(x * 50 + 35 + base, y * 50 + 50 + base);
					ctx.lineTo(x * 50 + 25 + base, y * 50 + 20 + base);
					ctx.closePath();
					ctx.fill();
				}
			} else if (tipo === 6) { // Cruz
				var grosor = (especial == "!")? Math.floor(random(0,36)):  Math.floor(parseInt(especial, 36));
				ctx.fillRect(x * 50 + base,  y * 50 + 20 + base- grosor/2, 50, 10 + grosor);
				ctx.fillRect(x * 50 + 20 + base - grosor/2, y * 50 + base , 10  + grosor, 50);
				
			} else if (tipo === 7) { // arboles
				especial = (especial == "!")? Math.floor(random(0,6)):  Math.floor(parseInt(especial, 36)/35*6);
				if (especial == 0){// Pino
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + base);
					ctx.lineTo(x * 50 + 10 + base, y * 50 + 40 + base);
					ctx.lineTo(x * 50 + 40 + base, y * 50 + 40 + base);
					ctx.closePath();
					ctx.fill();
				}else if(especial == 1){// Pino de 2 pisos
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + base);
					ctx.lineTo(x * 50 + 10 + base, y * 50 + 40 + base);
					ctx.lineTo(x * 50 + 40 + base, y * 50 + 40 + base);
					ctx.closePath();
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + base);
					ctx.lineTo(x * 50 + 10 + base, y * 50 + 20 + base);
					ctx.lineTo(x * 50 + 40 + base, y * 50 + 20 + base);
					ctx.closePath();
					ctx.fill();
				}else if(especial == 2){// Pino de 3 pisos
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + base);
					ctx.lineTo(x * 50 + 10 + base, y * 50 + 45 + base);
					ctx.lineTo(x * 50 + 40 + base, y * 50 + 45 + base);
					ctx.closePath();
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + base);
					ctx.lineTo(x * 50 + 10 + base, y * 50 + 30 + base);
					ctx.lineTo(x * 50 + 40 + base, y * 50 + 30 + base);
					ctx.closePath();
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(x * 50 + 25 + base, y * 50 + base);
					ctx.lineTo(x * 50 + 10 + base, y * 50 + 15 + base);
					ctx.lineTo(x * 50 + 40 + base, y * 50 + 15 + base);
					ctx.closePath();
					ctx.fill();	
				}else if(especial == 3){ //árbol redondo
					ctx.beginPath();
					ctx.arc(x * 50 + 25 + base, y * 50 + 25 + base, 20, 0, 2 * Math.PI);
					ctx.fill();
				}else if(especial == 4){ //árbol 2 redondo	
					ctx.beginPath();
					ctx.arc(x * 50 + 20 + base, y * 50 + 22 + base, 20, 0, 2 * Math.PI);
					ctx.arc(x * 50 + 35 + base, y * 50 + 27 + base, 15, 0, 2 * Math.PI);
					ctx.fill();
				}else{ //árbol 3 redondo	
					ctx.beginPath();
					ctx.arc(x * 50 + 15 + base, y * 50 + 27 + base, 15, 0, 2 * Math.PI);
					ctx.arc(x * 50 + 35 + base, y * 50 + 27 + base, 15, 0, 2 * Math.PI);
					ctx.fill();
					ctx.arc(x * 50 + 25 + base, y * 50 + 15 + base, 15, 0, 2 * Math.PI);
					ctx.fill();	
				}		
			
				ctx.fillStyle = "brown";
				ctx.fillRect(x * 50 + 22 + base, y * 50 + 40 + base, 6, 10);
			} else if (tipo === 8) { // Clima
				especial = (especial == "!")? Math.floor(random(0,4)):  Math.floor(parseInt(especial, 36) / 35 * 4);
				if (especial == 0){// NUBE
					ctx.beginPath();
					ctx.arc(x * 50 + 20 + base, y * 50 + 20 + base, 20, 0, Math.PI * 2);
					ctx.arc(x * 50 + 40 + base, y * 50 + 20 + base, 20, 0, Math.PI * 2);
					ctx.arc(x * 50 + 30 + base, y * 50 + 30 + base, 20, 0, Math.PI * 2);
					ctx.arc(x * 50 + 10 + base, y * 50 + 30 + base, 20, 0, Math.PI * 2);
					ctx.closePath();
					ctx.fill();
				}else if(especial == 1){ //luna
					ctx.beginPath();
					ctx.arc(x * 50 + 25 + base, y * 50 + 25 + base, 25, 0.3*Math.PI, 1.5 * Math.PI);
					ctx.fill();
				}else if(especial == 2){ //sol
					ctx.beginPath();
					ctx.arc(x * 50 + 25 + base, y * 50 + 25 + base, 15, 0, 2 * Math.PI,true);
					ctx.fill();
			
					for (let i = 0; i < 8; i++) {
						const angle = (2 * Math.PI * i) / 8;
						const xi = x + 0.5 + 4 * Math.cos(angle)/10;
						const yi = y + 0.5 + 4 * Math.sin(angle)/10;
						ctx.beginPath();
						ctx.arc(xi * 50 + base, yi * 50 + base, 3, 0, Math.PI * 2);
						ctx.closePath();
						ctx.fill();
					}
				}else{ //nube con sol
					ctx.beginPath();
					ctx.arc(x * 50 + 25 + base, y * 50 + 25 + base, 20, 0, 2 * Math.PI,true);
					ctx.fill();
					ctx.fillStyle =  getComplementaryColor(color) ;
					ctx.beginPath();
					ctx.arc(x * 50 + 20 + base, y * 50 + 35 + base, 15, 0, Math.PI * 2);
					ctx.arc(x * 50 + 35 + base, y * 50 + 35 + base, 15, 0, Math.PI * 2);
					ctx.arc(x * 50 + 30 + base, y * 50 + 40 + base, 10, 0, Math.PI * 2);
					ctx.arc(x * 50 + 10 + base, y * 50 + 40 + base, 10, 0, Math.PI * 2);
					ctx.closePath();
					ctx.fill();
				}
			} else if (tipo === 9) { // Flor
				const sides = (especial == "!")? Math.floor(random(1,8)):  1 + Math.floor(parseInt(especial, 36)/4);
				const radius = 2; // radio del círculo
				
				for (let i = 0; i < sides; i++) {
					const angle = (2 * Math.PI * i) / sides;
					const xi = x +0.5+ radius * Math.cos(angle)/10;
					const yi = y +0.4+ radius * Math.sin(angle)/10;
					ctx.beginPath();
					ctx.arc(xi * 50 + base, yi * 50 + base, 10, 0, Math.PI * 2);
					ctx.closePath();
					ctx.fill();
				}
			
				ctx.beginPath();
				ctx.arc(x * 50 + base + 25, y * 50 + base + 20, 7, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fillStyle =  getComplementaryColor(color) ;
				ctx.fill();
				
			} else if (tipo === 0) {
				especial = (especial == "!")? String.fromCharCode(48+Math.floor(random(0,42))): especial;
				ctx.font = '50px Arial';
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillText(especial, x * 50 + 25+50, y * 50 + 25+50);
			}
		}
}

function convertToRoman(num) {
  const ROMAN_NUMERALS = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let result = '';

  ROMAN_NUMERALS.forEach(function (numeral) {
    while (num >= numeral.value) {
      result += numeral.symbol;
      num -= numeral.value;
    }
  });
}

function generarGrilla() {
  // Crear un elemento canvas
  const canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;

  // Obtener el contexto de dibujo 2D del canvas
  const ctx = canvas.getContext("2d");

  // Dibujar la grilla
  for (let i = 0; i <= 100; i += 10) {
    // Dibujar líneas horizontales
    ctx.beginPath();
    ctx.moveTo(0, i*5);
    ctx.lineTo(500, i*5);
    ctx.stroke();

    // Dibujar líneas verticales
    ctx.beginPath();
    ctx.moveTo(i*5, 0);
    ctx.lineTo(i*5, 500);
    ctx.stroke();

    // Agregar números horizontales
    if (i > 0) {
      ctx.fillText(i , i*5 - 20, 495);
    }

    // Agregar números verticales
    if (i < 100) {
      ctx.fillText(100-i, 5, i*5 + 12);
    }
  }

  // Convertir el canvas a una imagen PNG
  const dataURL = canvas.toDataURL("image/png");
  return `url(${dataURL})`;
}

