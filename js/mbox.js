
var conteiner = document.createElement('div');
conteiner.className  = "contenedor grilla";
conteiner.id = "contenedor";
conteiner.fps = 60;
conteiner.ids = 0;
conteiner.ocultar_grilla = function(){ conteiner.classList.remove("grilla");}
conteiner.mostrar_grilla = function(){ conteiner.classList.add("grilla");}
conteiner.tapiz = (numImg) => {conteiner.style.backgroundImage = "url('./tapiz/"+numImg+".png')"};
conteiner.repetir_tapiz = (repetir) => {//SI-NO-X-Y
	switch (repetir){
	  case 'NO':
		conteiner.style.backgroundRepeat = "no-repeat";
		break;
	  case 'X':
		conteiner.style.backgroundRepeat = "repeat-x";
		break;
	  case 'Y':
		conteiner.style.backgroundRepeat = "repeat-y";
		break;
	  default:
		conteiner.style.backgroundRepeat = "repeat";
	}
}
conteiner.area_de_tapiz = (ancho,alto) => {conteiner.style.backgroundSize = ancho+"% "+alto+"%";};
conteiner.color_de_contenedor = (color) => {conteiner.style.backgroundColor = color;};
conteiner.color_del_borde = (color) => {conteiner.style.borderColor = color};
conteiner.grosor_del_borde = (grosor) => {conteiner.style.borderWidth = parseInt(conteiner.clientWidth/100*grosor)+"px";}

document.body.appendChild(conteiner);


function caja(){
	var box = document.createElement('div');
	box.className  = "caja";
	box.id = conteiner.ids;++conteiner.ids;
	box.style.top = "0%";
	box.style.left = "0%";
	box.style.width = "10%";
	box.style.height = "10%";
	

	//--------Nombre----------//
	box.colocar_nombre = function(name){
		box.name = name;
		var nameSpace = document.getElementById("nameSpace" + box.id);
		if (!nameSpace){
			nameSpace = document.createElement('div');
			nameSpace.className = "name";
			nameSpace.id = "nameSpace" + box.id; 
			box.appendChild(nameSpace);
		}
		nameSpace.innerHTML = name; 
	}
	box.nombre = function(){ return box.name}
	box.quitar_nombre = function(){
		var nameSpace = document.getElementById("nameSpace" + box.id);
		box.removeChild(nameSpace);
	}
	
	//--------Valor----------//
	box.colocar_valor = function(value){
		box.value = value;
		var valueSpace = document.getElementById("valueSpace" + box.id);
		if (!valueSpace){
			valueSpace = document.createElement('div');
			valueSpace.className = "value";
			valueSpace.id = "valueSpace" + box.id; 
			box.appendChild(valueSpace);
		}
		valueSpace.innerHTML = value; 
	}
	box.valor = function(){ return box.value}
	box.quitar_valor = function(){
		var valueSpace = document.getElementById("valueSpace" + box.id);
		box.removeChild(valueSpace);
	}
	
	//--------Texto----------//
	box.colocar_texto = function(text){
		box.text = text;
		var textSpace = document.getElementById("textSpace" + box.id);
		if (!textSpace){
			textSpace = document.createElement('div');
			textSpace.className = "text"; 
			textSpace.id = "textSpace" + box.id; 
			box.appendChild(textSpace);
		}
		textSpace.innerHTML = text; 
	}
	box.agregar_texto = function(text){
		box.text += String(text);
		var textSpace = document.getElementById("textSpace" + box.id);
		textSpace? textSpace.innerHTML = box.text : box.colocar_texto(text);
	}
	box.borrar_texto = function(){
		box.text = "";
		var textSpace = document.getElementById("textSpace" + box.id);
		textSpace?textSpace.innerHTML = "" : box.colocar_texto(box.text);
	}
	
	box.texto = function(){ return box.text}
	box.quitar_texto = function(){
		var textSpace = document.getElementById("textSpace" + box.id);
		box.removeChild(textSpace);
	}
	
	//--------Objeto----------//
	box.colocar_objeto = function(objeto){
		box.object = objeto;
		var objectSpace = document.getElementById("objectSpace" + box.id);
		if (!objectSpace){
			objectSpace = document.createElement('div');
			objectSpace.className = "object";
			objectSpace.id = "objectSpace" + box.id; 
			box.appendChild(objectSpace);
		}
		objectSpace.innerHTML = "<img style='width:100%;' src='./img/"+objeto+".png'>"; 
	}
	box.objecto = function(){ return box.object}
	box.quitar_objeto = function(){
		var objectSpace = document.getElementById("objectSpace" + box.id);
		box.removeChild(objectSpace);
	}
	//-------tamaño-------------//
	box.alto = ()=> {return parseFloat(box.style.height.replace("%",""))};
	box.ancho = ()=> {return parseFloat(box.style.width.replace("%",""))};
	
	box.cambiar_area = (size) => {
		box.cambiar_alto(size);
		box.cambiar_ancho(size);
	}
	
	box.cambiar_alto = (height) => {
		box.style.height = height + "%";
	}
	
	box.cambiar_ancho = (width)=> {
		box.style.width = width + "%";
	}
	
	//-------Movimiento--------//
	box.vertical = ()=> {return parseFloat(box.style.top.replace("%",""))};
	box.horizontal = ()=> {return parseFloat(box.style.left.replace("%",""))};
	
	box.posicion = function(h,v){
		box.style.top = (90 - v) +"%";
		box.style.left = h +"%";
	} 
	box.mover_derecha = function(vel){
		var hAct = parseFloat(box.style.left.replace("%",""));
		box.style.left = Math.min(hAct + vel,100) + "%";
	}
	box.mover_izquierda = function(vel){
		var hAct = parseFloat(box.style.left.replace("%",""));
		box.style.left = Math.max(0,hAct - vel) + "%";
	}
	box.mover_arriba = function(vel){
		var vAct = parseFloat(box.style.top.replace("%",""));
		box.style.top = Math.max(0,vAct - vel) + "%";
	}
	box.mover_abajo = function(vel){
		var vAct = parseFloat(box.style.top.replace("%",""));
		box.style.top = Math.min(vAct + vel,100) + "%";
	}

	
	box.mover_a_posicion = function(h,v,vel){
		var vAct = parseFloat(box.style.top.replace("%",""));
		var hAct = parseFloat(box.style.left.replace("%",""));
		
		if ((vAct != (90 - v)) || (hAct != h)){
			box.style.top = vAct + (vel * Dist(vAct, 90 - v)) + "%";
			box.style.left = hAct + vel * Dist(hAct, h) + "%";
			box.movingTimeout = setTimeout(box.mover_a_posicion,1000/conteiner.fps,h,v,vel);				
		}	
		function Dist(act,fin){
			return Math.sign(fin - act);
		}
	}
	box.detener_movimiento = function(){clearTimeout(box.movingTimeout);}
	
	box.habilitar_arrastrar = function(){
		box.draggin = false;
		box.dragginHandle = (typeof box.dragginHandle  === 'undefined'||box.dragginHandle  === null)?true:box.dragginHandle; //La primera vez lo pone true 
		if (box.dragginHandle){	//esto es para cuyando se deshabilita no se vuelva a cargar todo
			box.addEventListener('mousedown', function mDown(){box.draggin = box.dragginHandle;}); //si handle es true el poder mover es true
			box.addEventListener('mouseup', function mUp(){box.draggin = false;});
			box.addEventListener('mousemove', function dragMove(event){
			 event.preventDefault();
				if (box.draggin) {
					let nH = 100*(event.clientX - conteiner.offsetLeft)/conteiner.clientWidth;
					let nV = 100-100*(event.clientY - conteiner.offsetTop)/conteiner.clientHeight;
					let boxAl = conteiner.clientHeight / box.clientHeight;
					let boxAn = conteiner.clientWidth / box.clientWidth;
					box.posicion(nH-boxAn/2,nV-boxAl/2);

				}
			});
		}else{
			box.dragginHandle = true;//si es false lo pone en true para reactivar;	
		}
	}
	
	box.deshabilitar_arrastrar = function(){
		box.dragginHandle = false;
	}
	
	box.gravedad = 1;
	
	box.colocar_gravedad = function(){
		var vAct = parseFloat(box.style.top.replace("%",""));
		if ((vAct < 90)){
			console.log(vAct);
			box.style.top = vAct + box.gravedad + "%";
						
		}	
		box.gravityTimeout = setTimeout(box.colocar_gravedad,1000/conteiner.fps,box.gravedad);	
	}
	
	box.pausar_gravedad = function(){
		box.gravedadAux = box.gravedad;
		box.gravedad = 0;	
	}
	
	box.reanudar_gravedad = function(){
		(box.gravedadAux)?box.gravedad = box.gravedadAux:"";
		 delete box.gravedadAux;		
	}
	
	box.quitar_gravedad = function(){clearTimeout(box.gravityTimeout);}
	
	box.rotar = (grados) => {box.style.transform = "rotate("+grados+"deg)"};
	
	//---------Acciones--------------- //
	box.accion_al_tocar = function (otraCaja,accion){
		if ((Math.abs(box.horizontal() - otraCaja.horizontal()) < 5)&&
			(Math.abs(box.vertical() - otraCaja.vertical()) < 5)){
			console.log("se estan tocando");
		}	

		setTimeout(box.accion_al_tocar,1000/conteiner.fps,otraCaja);	
	}
	
	box.accion_con_click = function(acciones){
		box.addEventListener('click', (event) => {
		try{eval(acciones)}catch(e){};
		
		});
	}
	
	box.accion_con_tecla = function(tecla, acciones){
		document.addEventListener('keydown', (event) => {
			if (event.key === tecla){
				try{eval(acciones)}catch(e){};
			}
		});
	}
	
	//-------------Tapiz-------------//

	box.tapiz = (numImg) => {box.style.backgroundImage = "url('./tapiz/"+numImg+".png')"};
	box.tapiz_propio = (url) => {box.style.backgroundImage = "url('"+url+"')"};
	box.repetir_tapiz = (repetir) => {//SI-NO-X-Y
		switch (repetir){
		  case 'NO':
			box.style.backgroundRepeat = "no-repeat";
			break;
		  case 'X':
			box.style.backgroundRepeat = "repeat-x";
			break;
		  case 'Y':
			box.style.backgroundRepeat = "repeat-y";
			break;
		  default:
			box.style.backgroundRepeat = "repeat";
		}
	}
    box.area_de_tapiz = (ancho,alto = ancho) => {box.style.backgroundSize = ancho+"% "+alto+"%";};
	box.area_de_tapiz_cubrir = () => {box.style.backgroundSize = "cover";};
	
	//------------------Estilos------------//
	box.color_de_caja = (color) => {box.style.backgroundColor = color;};
	box.color_del_borde = (color) => {box.style.borderColor = color};
	box.grosor_del_borde = (grosor) => {box.style.borderWidth = parseInt(box.clientWidth/100*grosor)+"px";}

	//-----------Sombra------------//
	/*una caja foco 
	/las otras sombras? 
	/*
	box.style.boxShadow = "none|h-shadow v-shadow blur spread color |inset|initial|inherit"*/
	//box-shadow
	//---------------Ocultar----------------//
	box.ocultar = ()=> {box.style.visibility = "hidden";};
	box.mostrar = ()=> {box.style.visibility = "visible";};
	//--------------Poner---------------//
	box.poner_sobre = (otraCaja)=> {box.style.style.zIndex = otraCaja.style.style.zIndex + 1;};
	box.poner_debajo = (otraCaja)=> {box.style.style.zIndex = otraCaja.style.style.zIndex - 1;};
	box.poner_dentro = (otraCaja)=> {otraCaja.appendChild(box); };
	
		
		
		
		
		
		
	
	
	conteiner.appendChild(box); 
	return box
}