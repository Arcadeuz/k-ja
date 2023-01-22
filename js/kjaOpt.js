

let CajaExiste = new Object();
	CajaExiste.Nombre = new Object();
	CajaExiste.Nombre.colocar_nombre = "string";
	CajaExiste.Nombre.nombre = "null";
	CajaExiste.Nombre.quitar_nombre = "null";
	CajaExiste.Valor = new Object();
	CajaExiste.Valor.colocar_valor = "int";
	CajaExiste.Valor.valor = "null"; 
	CajaExiste.Valor.quitar_valor = "null";
	CajaExiste.Texto  = new Object();
	CajaExiste.Texto.colocar_texto = "string";
	CajaExiste.Texto.agregar_texto = "string";
	CajaExiste.Texto.borrar_texto = "null";
	CajaExiste.Texto.texto = "string";
	CajaExiste.Texto.quitar_texto = "null";
	CajaExiste.Objecto  = new Object();
	CajaExiste.Objecto.colocar_objeto = "string";
	CajaExiste.Objecto.objecto = "null";
	CajaExiste.Objecto.quitar_objeto = "null";
	CajaExiste.Area  = new Object();
	CajaExiste.Area.alto = "null";
	CajaExiste.Area.ancho = "null";
	CajaExiste.Area.cambiar_area = "int";
	CajaExiste.Area.cambiar_alto = "int";
	CajaExiste.Area.cambiar_ancho = "int";
	CajaExiste.Movimiento  = new Object();
	CajaExiste.Movimiento.vertical = "null";
	CajaExiste.Movimiento.horizontal = "null";
	CajaExiste.Movimiento.posicion = "int,int";
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
	CajaExiste.Accion.accion_al_tocar = "box,func";
	CajaExiste.Accion.accion_con_click = "func";
	CajaExiste.Accion.accion_con_tecla = "key,func";
	CajaExiste.Tapiz  = new Object();
	CajaExiste.Tapiz.tapiz = "tapestry";
	CajaExiste.tapiz_propio = "string";
	CajaExiste.Tapiz.repetir_tapiz = "repetir";
    CajaExiste.Tapiz.area_de_tapiz = "float,float";
	CajaExiste.Tapiz.area_de_tapiz_cubrir = "null";
	CajaExiste.Estilo  = new Object();
	CajaExiste.Estilo.color_de_caja = "color";
	CajaExiste.Estilo.color_del_borde = "color";
	CajaExiste.Estilo.grosor_del_borde = "int";
	CajaExiste.Visibilidad  = new Object();
	CajaExiste.Visibilidad.ocultar = "null";
	CajaExiste.Visibilidad.mostrar = "null";
	CajaExiste.Poner = new Object();
	CajaExiste.Poner.poner_sobre = "box";
	CajaExiste.Poner.poner_debajo = "box";
	CajaExiste.Poner.poner_dentro = "box";
	


let conteiner = new Object();
	conteiner.fps = "int";
	conteiner.ocultar_grilla = "null";
	conteiner.mostrar_grilla = "null";
	conteiner.tapiz = "tapestry";
	conteiner.repetir_tapiz = "repetir";
	conteiner.area_de_tapiz = "float,float";
	conteiner.color_de_contenedor = "color";
	conteiner.color_del_borde = "color";
	conteiner.grosor_del_borde = "float";

let kjaOpt = new Object();
	kjaOpt.NuevaCaja = "string";
	kjaOpt.Conteiner = conteiner;
	function addCaja(name){
		if(!kjaOpt[name]){ 
			kjaOpt[name] = CajaExiste;
			createSelection(kjaOpt,id = 0);
		}	
	}

	
	
function createSelection(opt,id = 0){
	if(id == 0) deleteChilds(0);
	var selectList = document.createElement("select");
	selectList.id = "editionSelect"+id;
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
				var inputOpt = document.createElement("select");
				for(let i = 1; i <= 25; i++){
					var option = document.createElement("option");
					option.value = i;
					option.text = i;
					option.style.backgroundImage = "url(./tapiz/"+i+".png)";
					inputOpt.appendChild(option);
				}
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
						if (i == "Conteiner") i = "conteiner";
						var option = document.createElement("option");
						option.value = i ;
						option.text = i;
						inputOpt.appendChild(option);
					}
				}
			}	
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

function addMethod(){
	let newCode = "someError";
	let selection = getValue("editionSelect0");
	if (selection == "NuevaCaja"){
		let value = getValue("editionSelect1") || "caja" + Math.floor(Math.random() * (8999) + 1000);
		newCode = value +" = new caja();";
	}else if(selection == "Conteiner"){
		let method = getValue("editionSelect1");
		let value = "";
		elem = conteiner[method].split(",");
		for(let i in elem){ 
			value += (elem[i] == "string")? '"'+getValue("editionSelect"+(parseInt(i)+2))+'",' : getValue("editionSelect"+(parseInt(i)+2))+"," ;
		}
		value = value.slice(0, -1)
		newCode = "conteiner."+method+"("+value+");";
	}else{
		let value = "";
		elem = CajaExiste[getValue("editionSelect1")][getValue("editionSelect2")].split(",");
		for(let i in elem){ 
			value += (elem[i] == "string")? '"'+getValue("editionSelect"+(parseInt(i)+3))+'",' :getValue("editionSelect"+(parseInt(i)+3))+"," ;
		}
		value = value.slice(0, -1)
		newCode = selection+"."+getValue("editionSelect2")+"("+value+");";
	}	
	
	addCode(newCode);
	
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
	arrNames.map(x => addCaja(x.trim()));
	return arrNames;
}

function arrayOfMethod(obj,arr = []){
	for(let i in obj){
		(typeof obj[i] === 'object' )? arr.concat(arrayOfMethod(obj[i],arr)): arr.push(i);
	}
	return arr;
}
