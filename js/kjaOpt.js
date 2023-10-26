let CajaExiste = new Object();
	CajaExiste.Nombre = new Object();
	CajaExiste.Nombre.colocar_nombre = "string";
	CajaExiste.Nombre.nombre = "null";
	CajaExiste.Nombre.quitar_nombre = "null";
	CajaExiste.Numero = new Object();
	CajaExiste.Numero.colocar_numero = "float";
	CajaExiste.Numero.colocar_numero_real = "float";
	CajaExiste.Numero.colocar_numero_entero = "int";
	CajaExiste.Numero.colocar_numero_natural = "int";
	CajaExiste.Numero.numero = "null"; 
	CajaExiste.Numero.quitar_numero = "null";
	CajaExiste.Texto  = new Object();
	CajaExiste.Texto.colocar_texto = "string";
	CajaExiste.Texto.agregar_texto = "string";
	CajaExiste.Texto.borrar_texto = "null";
	CajaExiste.Texto.texto = "string";
	CajaExiste.Texto.quitar_texto = "null";
	CajaExiste.Reloj = new Object();
	CajaExiste.Reloj.colocar_hora = "null";
	CajaExiste.Reloj.encender_hora = "null";
	CajaExiste.Reloj.colocar_temporizador = "time";
	CajaExiste.Reloj.encender_temporizador = "null";
	CajaExiste.Reloj.pausar_temporizador = "null";
	CajaExiste.Reloj.disparo_temporizador = "action";
	CajaExiste.Reloj.segundos_temporizador = "null"
	CajaExiste.Reloj.leer_temporizador = "null";
	CajaExiste.Reloj.cambiar_segundos_temporizador = "int";
	CajaExiste.Reloj.pausar_temporizador = "null";
	CajaExiste.Reloj.colocar_alarma = "time"
	CajaExiste.Reloj.encender_alarma = "null";
	CajaExiste.Reloj.disparo_alarma = "action";
	CajaExiste.Reloj.leer_alarma = "null";
	CajaExiste.Reloj.segundos_alarma = "null"
	CajaExiste.Reloj.cambiar_alarma = "time"
	CajaExiste.Reloj.colocar_cronometro = "null";
	CajaExiste.Reloj.encender_cronometro = "null";
	CajaExiste.Reloj.segundos_cronometro = "null";
	CajaExiste.Reloj.reiniciar_cronometro = "null";
	CajaExiste.Reloj.pausar_cronometro = "null";
	CajaExiste.Reloj.pausar_reloj = "null";
	CajaExiste.Reloj.quitar_reloj  = "null";
	CajaExiste.Reloj.formato_reloj  = "string";
	CajaExiste.Datos  = new Object();
	CajaExiste.Datos.datos = "null";
	CajaExiste.Datos.colocar_datos = "null";
	CajaExiste.Datos.borrar_datos = "null";
	CajaExiste.Objecto  = new Object();
	CajaExiste.Objecto.colocar_objeto = "string";
	CajaExiste.Objecto.objecto = "null";
	CajaExiste.Objecto.quitar_objeto = "null";
	CajaExiste.Area  = new Object();
	CajaExiste.Area.alto = "null";
	CajaExiste.Area.ancho = "null";
	CajaExiste.Area.cambiar_area = "int";
	CajaExiste.Area.cambiar_lados = "int,int";
	CajaExiste.Area.cambiar_alto = "int";
	CajaExiste.Area.cambiar_ancho = "int";
	CajaExiste.Giro  = new Object();
	CajaExiste.Giro.elevacion = "null";
	CajaExiste.Giro.azimut = "null";
	CajaExiste.Giro.rotacion = "null";
	CajaExiste.Giro.cambiar_elevacion = "int";
	CajaExiste.Giro.cambiar_azimut = "int";
	CajaExiste.Giro.cambiar_elevacion = "int";
	CajaExiste.Movimiento  = new Object();
	CajaExiste.Movimiento.vertical = "null";
	CajaExiste.Movimiento.horizontal = "null";
	CajaExiste.Movimiento.posicion = "int,int";
	CajaExiste.Movimiento.centrar = "null";
	CajaExiste.Movimiento.mover_derecha = "int";
	CajaExiste.Movimiento.mover_izquierda = "int";
	CajaExiste.Movimiento.mover_arriba = "int";
	CajaExiste.Movimiento.mover_abajo = "int";
	CajaExiste.Movimiento.mover_a_posicion = "int,int,int";
	CajaExiste.Movimiento.detener_movimiento = "null";
	CajaExiste.Movimiento.habilitar_arrastrar = "null";
	CajaExiste.Movimiento.deshabilitar_arrastrar = "null";
	CajaExiste.Movimiento.gravedad = "int";
	CajaExiste.Movimiento.colocar_gravedad = "null";
	CajaExiste.Movimiento.pausar_gravedad = "null";
	CajaExiste.Movimiento.reanudar_gravedad = "null";
	CajaExiste.Movimiento.quitar_gravedad = "null";
	CajaExiste.Movimiento.rotar = "int";
	CajaExiste.Accion  = new Object();
	CajaExiste.Accion.accion_al_tocar = "box,action";
	CajaExiste.Accion.accion_con_click = "action";
	CajaExiste.Accion.accion_con_tecla = "key,action";
	CajaExiste.Editor_Tapiz = "tapestry";
	CajaExiste.Tapiz  = new Object();
	CajaExiste.Tapiz.tapiz = "string";
	CajaExiste.tapiz_propio = "string";
	CajaExiste.Tapiz.repetir_tapiz = "repetir";
    CajaExiste.Tapiz.area_de_tapiz = "float,float";
	CajaExiste.Tapiz.area_de_tapiz_cubrir = "null";
	CajaExiste.Estilo  = new Object();
	CajaExiste.Estilo.color_de_caja = "color";
	CajaExiste.Estilo.angulo_color_de_caja = "int";
	CajaExiste.Estilo.color_del_borde = "color";
	CajaExiste.Estilo.grosor_del_borde = "int";
	CajaExiste.Estilo.redondear_borde = "int";
	CajaExiste.Visibilidad  = new Object();
	CajaExiste.Visibilidad.ocultar = "null";
	CajaExiste.Visibilidad.mostrar = "null";
	CajaExiste.Poner = new Object();
	CajaExiste.Poner.poner_sobre = "box";
	CajaExiste.Poner.poner_debajo = "box";
	CajaExiste.Poner.poner_dentro = "box";
	CajaExiste.Grilla = new Object();
	CajaExiste.Grilla.mostrar_grilla = "null";
	CajaExiste.Grilla.ocultar_grilla = "null";

let Conteiner = new Object();
	Conteiner.fps = "int";
	Conteiner.ocultar_grilla = "null";
	Conteiner.mostrar_grilla = "null";
	Conteiner.color_de_contenedor = "color";
	Conteiner.color_del_borde = "color";
	Conteiner.grosor_del_borde = "float";
    Conteiner.tono = "int,int,int";
	
	
let kjaOpt = new Object();
	kjaOpt.NuevaCaja = "string";
	kjaOpt.conteiner = Conteiner;
	let oldkjaOpt = []; 
	function addCaja(cajas){
		if (oldkjaOpt.join() !== cajas.join()) {
			oldkjaOpt = cajas;
			cajas = cajas.reduce((obj, item) => {
			  obj[item] = CajaExiste;
			  return obj;
			}, {});
			cajas["NuevaCaja"] = "string";
			cajas["conteiner"] = Conteiner;
			kjaOpt = cajas;
			createSelection(kjaOpt,id = 0);
		}
	}


	
	
function createSelection(opt,id = 0){
	if(id == 0) deleteChilds(0);
	var selectList = document.createElement("select");
	selectList.id = "editionSelect"+id;
	selectList.classList.add("codeButton");
	selectList.onchange = ()=>{
			deleteChilds(id+1);
			if(selectList.value == "parent"){
				createSelection(opt[selectList.options[selectList.selectedIndex].text],id+1);
			}else{
				createElement(selectList.value,id+1);
			}
		};
	
	//Create and append the options
	for(let i in opt){
		var option = document.createElement("option");
		(typeof opt[i] === 'object' )? option.value = "parent": option.value = opt[i];
		option.text = i;
		selectList.appendChild(option);
	}
	
	var option = document.createElement("option");
	option.text = "seleccionar";
	option.hidden = true;
	option.selected = true;
	selectList.appendChild(option);
	document.getElementById("cBSpace").appendChild(selectList);
}

function createElement(elem,id){
	elem = elem.split(",");
	for(let i in elem){
		if (elem[i] != "null"){
			if (elem[i] == "string"){
				var inputOpt = document.createElement("input");
				inputOpt.type = "text";
			}else if (elem[i] == "int"){
				var inputOpt = document.createElement("input");
				inputOpt.type = "number";
			}else if(elem[i] == "float"){
				var inputOpt = document.createElement("input");
				inputOpt.type = "text";
			}else if(elem[i] == "color"){
				var inputOpt = document.createElement("select");
				for(let i in color){
					var option = document.createElement("option");
					option.value = color[i];
					option.text = i;
					option.style.background = color[i];
					inputOpt.appendChild(option);
				}
			}else if(elem[i] == "tapestry"){
				divSeedInput();
			}else if(elem[i] == "repetir"){
				opt = ["SI","NO","X","Y"];
				var inputOpt = document.createElement("select");
				for(let i in opt){
					var option = document.createElement("option");
					option.value = opt[i];
					option.text = opt[i];
					inputOpt.appendChild(option);
				}	
			}else if(elem[i] == "box"){
				var inputOpt = document.createElement("select");
				for(let i in kjaOpt){
					if (i != "NuevaCaja"){
					
						var option = document.createElement("option");
						option.value = i ;
						option.text = i;
						inputOpt.appendChild(option);
					}
				}
			}else if(elem[i] == "action"){
				var inputOpt = document.createElement("input");
				inputOpt.type = "hidden";
				inputOpt.value = "()=>{\n/*escribe aquí*/\n}";
			}else if(elem[i] == "time"){
				var inputOpt = document.createElement("input");
				inputOpt.type = "time";
				inputOpt.step = "1";
				
			}
			inputOpt.classList.add("codeButton");			
			inputOpt.id = "editionSelect"+id;
			document.getElementById("cBSpace").appendChild(inputOpt);
			++id;
		}
	}
	buttonAdd = document.createElement("button");
	buttonAdd.id = "editionSelect"+id;
	buttonAdd.innerHTML = '+';
	buttonAdd.addEventListener('click', (event) => {  addMethod()});
	document.getElementById("cBSpace").appendChild(buttonAdd);
}

function addMethod(specialInput = false){
	let newCode = "someError";
	let selection = getValue("editionSelect0");
	if (specialInput){
		for(metod of specialInput){
			addCode(selection+"."+metod);
		}
	}else{
		if (selection == "NuevaCaja"){
			let value = getValue("editionSelect1") || "caja" + Math.floor(Math.random() * (8999) + 1000);
			newCode = value +" = new caja();";
		}else if(selection == "conteiner"){
			let method = getValue("editionSelect1");
			let value = "";
			elem = Conteiner[method].split(",");
			for(let i in elem){ 
				value += (elem[i] == "string")? '"'+getValue("editionSelect"+(parseInt(i)+2))+'",' : getValue("editionSelect"+(parseInt(i)+2))+"," ;
			}
			value = value.slice(0, -1)
			newCode = "conteiner."+method+"("+value+");";
		}else{
			let value = "";
			elem = CajaExiste[getValue("editionSelect1")][getValue("editionSelect2")].split(",");
			for(let i in elem){ 
				value += ((elem[i] == "string")|| (elem[i] == "time")|| (elem[i] == "tapestry"))? '"'+getValue("editionSelect"+(parseInt(i)+3))+'",' :getValue("editionSelect"+(parseInt(i)+3))+"," ;
			}
			value = value.slice(0, -1)
			newCode = selection+"."+getValue("editionSelect2")+"("+value+");";
		}	
		addCode(newCode);
	}	
}

function getValue(id){
	let selectList = document.getElementById(id);
	let selection = "";
	if (selectList.tagName === 'SELECT') {
		selection = selectList.options[selectList.selectedIndex].text
	}else{
		selection = selectList.value;
	}
	return selection; 
}

function deleteChilds(id){
	let selectList = document.getElementById("editionSelect"+id);
	if (selectList){
		document.getElementById("cBSpace").removeChild(selectList);
		deleteChilds(++id);
	}
}

function arrayOfBox(texto){
	texto = texto.split("*/").join("*/;");
	texto = texto.split("{").join("{;");
	texto = texto.split("\n").join("\n;");
	let arrNames =   texto.split(";").map(x => x.includes("caja()")? x.split("=")[0].replace(" ",""):"").filter( (el)=> { return el != "";});
	addCaja(arrNames);
	return arrNames;
}

function arrayOfMethod(obj,arr = []){
	for(let i in obj){
		(typeof obj[i] === 'object' )? arr.concat(arrayOfMethod(obj[i],arr)): arr.push(i);
	}
	return arr;
}





//--------------------------ESTE ES EL INPUT DE IMAGENES -----------------------------------------//

	function divSeedInput(){
			let wC = 500;
			let hC = wC / 2;

			var contenedor = document.createElement('div');
			contenedor.style.width = wC+'px';
			contenedor.style.height = hC+'px';
			contenedor.style.position = 'absolute';
			contenedor.style.backgroundColor = 'white';
			contenedor.style.left = 'calc(50vw - '+wC/2+'px)';
			contenedor.style.top = 'calc(50vh - '+hC/2+'px)';
			
			var cuadradoIzquierdo = document.createElement('div');
			cuadradoIzquierdo.style.width  = wC/2+'px';
			cuadradoIzquierdo.style.height = hC+'px';
			cuadradoIzquierdo.style.position = 'absolute';
			cuadradoIzquierdo.style.left = '0px';
			cuadradoIzquierdo.style.top = '0px';
			cuadradoIzquierdo.style.border = '1px solid black';

			var cuadradoDerecho = document.createElement('div');
			cuadradoDerecho.style.width  = wC/2+'px';
			cuadradoDerecho.style.height = hC+'px';
			cuadradoDerecho.style.position = 'absolute';
			cuadradoDerecho.style.right = '0px';
			cuadradoDerecho.style.top = '0px';
			cuadradoDerecho.style.border = '1px solid black';
			cuadradoDerecho.style.backgroundSize = 100+"% "+100+"%";
			contenedor.appendChild(cuadradoIzquierdo);
			contenedor.appendChild(cuadradoDerecho);

			// Crea los inputs en el cuadrado izquierdo
			var inputs = [
			  { label: 'Patron', min: 1, max: 9 },
			  { label: 'Color_Inicial', type: 'color' },
			  { label: 'Color_Final', type: 'color' },
			  { label: 'Figura', min: 0, max: 9 },
			  { label: 'Especial', min: 0, max: 36 },
			  { label: 'Densidad', min: 1, max: 35 },
			  { label: 'Movimiento', min: 0, max: 35 },
			];

			var semillaArray = [];
			inputs.forEach(function(inputData) {
			  var inputLabel = document.createElement('label');
			  inputLabel.textContent = inputData.label;
			 // inputLabel.style.position = 'absolute';
			 // inputLabel.style.marginBottom= "10px";
			  var input = document.createElement('input');
			  input.type = inputData.type || 'range';
			  input.min = inputData.min || 0;
			  input.max = inputData.max || 100;
			  input.value = (input.type != "range")? "#"+Math.floor(Math.random() * 16777215).toString(16): Math.floor(Math.random() * (input.max - input.min));
			  input.label = inputData.label;
			  input.id = "seedInputs"+inputData.label;
			  input.style.left = '90px';
			  input.style.position = 'absolute';
			  if (input.type != "range"){input.style.height = '20px'};
			  //input.style.margin= "5px";
			  semillaArray[input.label] = input.value;
			  input.addEventListener('input', function() {
				semillaArray[input.label] = input.value;
				semilla = convert(semillaArray);
			   cuadradoDerecho.style.backgroundImage = crearTextura(semilla);
			   });
				//
			  cuadradoIzquierdo.appendChild(inputLabel);
			  cuadradoIzquierdo.appendChild(input);
			  cuadradoIzquierdo.appendChild(document.createElement('br'));
			});
			 
			 semilla = convert(semillaArray);
			 cuadradoDerecho.style.backgroundImage = crearTextura(semilla);
			 
			var fLabel = document.createElement('label');
			fLabel.textContent = "Color:";
			var finput = document.createElement('input');
			finput.type = "color";
			finput.value = "#ffffff";
			finput.style.left = '90px';
			finput.style.position = 'absolute';
			finput.style.height = '20px';
			finput.addEventListener('input', function() {
				cuadradoDerecho.style.backgroundColor = finput.value;
			});
			cuadradoIzquierdo.appendChild(fLabel);
			cuadradoIzquierdo.appendChild(finput);
			cuadradoIzquierdo.appendChild(document.createElement('br')); 

			var frLabel = document.createElement('label');
			frLabel.textContent = "Repetir:";
			opt = ["SI","NO","X","Y"];
			var frinputOpt = document.createElement("select");
			for(let i in opt){
				var option = document.createElement("option");
				option.value = opt[i];
				option.text = opt[i];
				frinputOpt.appendChild(option);
			}	
			frinputOpt.onchange = ()=>{
				switch (frinputOpt.value){
				  case 'NO':
					cuadradoDerecho.style.backgroundRepeat = "no-repeat";
					break;
				  case 'X':
					cuadradoDerecho.style.backgroundRepeat = "repeat-x";
					break;
				  case 'Y':
					cuadradoDerecho.style.backgroundRepeat = "repeat-y";
					break;
				  default:
					cuadradoDerecho.style.backgroundRepeat = "repeat";
				}
			}
			frinputOpt.style.left = '90px';
			frinputOpt.style.position = 'absolute';

			cuadradoIzquierdo.appendChild(frLabel);
			cuadradoIzquierdo.appendChild(frinputOpt);
			cuadradoIzquierdo.appendChild(document.createElement('br')); 
			
			var faLabel = document.createElement('label');
			faLabel.textContent = "Ancho:";
			var fainput = document.createElement('input');
			fainput.type = "range";
			fainput.min =  0;
			fainput.max =  100;
			fainput.value =  100;
			fainput.addEventListener('input', function() {
				if(finput.checked)  flinput.value =  fainput.value;
				cuadradoDerecho.style.backgroundSize =  fainput.value+"% "+ flinput.value+"%";
			});
			fainput.style.left = '90px';
			fainput.style.position = 'absolute';
		
			var finput = document.createElement('input');
			finput.type = "checkbox";
			finput.checked =  true;
			finput.style.right = '10px';
			finput.style.top = '170px';
			finput.style.position = 'absolute';
			
			cuadradoIzquierdo.appendChild(faLabel);
			cuadradoIzquierdo.appendChild(fainput);
			cuadradoIzquierdo.appendChild(finput);
			
			cuadradoIzquierdo.appendChild(document.createElement('br')); 
			 
			var flLabel = document.createElement('label');
			flLabel.textContent = "Largo:";
			 var flinput = document.createElement('input');
			 flinput.type = "range";
			 flinput.min =  0;
			 flinput.max =  100;
			 flinput.value =  100;
			 flinput.addEventListener('input', function() {
				if(finput.checked)  fainput.value =  flinput.value;
				cuadradoDerecho.style.backgroundSize =  fainput.value+"% "+ flinput.value+"%";
			  });
			flinput.style.left = '90px';
			flinput.style.position = 'absolute';
			 cuadradoIzquierdo.appendChild(flLabel);
			 cuadradoIzquierdo.appendChild(flinput);

			 cuadradoIzquierdo.appendChild(document.createElement('br')); 
			 
			 
			 var aceptar = document.createElement('input');
			aceptar.type = "button";
			aceptar.value =  "-ACEPTAR-";
			aceptar.addEventListener('click', function() { //BOTON DE ACEPTAR 
				addMethod([
					"tapiz('"+semilla+"');",
					"repetir_tapiz("+frinputOpt.value+");",
					"area_de_tapiz("+fainput.value+","+flinput.value+");"
				]);
			
			
				contenedor.remove();
			});
			aceptar.style.left = '20px';
			aceptar.style.position = 'absolute'; 
			
			var randomSeed = document.createElement('input');
			randomSeed.type = "button";
			randomSeed.value =  "Sorpresa!";
			randomSeed.addEventListener('click', function() {
			  inputs.forEach(function(inputData) {
				var input = document.getElementById("seedInputs"+inputData.label);
				input.value = (input.type != "range")? "#"+Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'): Math.floor(Math.random() * (input.max - input.min));
				semillaArray[inputData.label] = input.value;
				semilla = convert(semillaArray);
				cuadradoDerecho.style.backgroundImage = crearTextura(semilla);
			  });
			});
			randomSeed.style.right = '20px';
			randomSeed.style.position = 'absolute';
			cuadradoIzquierdo.appendChild(document.createElement('br'));  
			cuadradoIzquierdo.appendChild(aceptar);
			cuadradoIzquierdo.appendChild(randomSeed);
			cuadradoIzquierdo.appendChild(document.createElement('br'));  
			 
			 
			// Agrega el contenedor al documento
			document.body.appendChild(contenedor);
			
			
			function convert(sArray){
				
				string = "";
				string += sArray["Patron"];
				string += convertZZZColor(sArray["Color_Inicial"]);
				string += convertZZZColor(sArray["Color_Final"]);
				string += sArray["Figura"];
				string += convertZ(sArray["Especial"]);
				string += convertZ(sArray["Densidad"]);
				string += convertZ(sArray["Movimiento"]);
				return string;
			
				function convertZZZColor(hexColor){
					const red = convertZ(Math.floor(parseInt(hexColor.slice(1, 3), 16)/255*35));
					const green = convertZ(Math.floor(parseInt(hexColor.slice(3, 5), 16)/255*35));
					const blue =convertZ( Math.floor(parseInt(hexColor.slice(5, 7), 16)/255*35));
					return ""+red+green+blue;
				}
			function convertZ(number){
				letras = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!";
				return letras.charAt(number);
			}
		}
	}