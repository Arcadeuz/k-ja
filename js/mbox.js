var fondo = document.body;
fondo.style.overflow = 'hidden';
fondo.style.marginLeft= "0px";
fondo.style.marginTop = "0px";
fondo.style.height = "100vh";
fondo.style.width = "100vw";
var conteiner = new caja();
/*
var UC = Math.min(window.innerWidth, window.innerHeight)/10000*98;
var conteiner = document.createElement('div');
conteiner.style.width = 100*UC +"px";
conteiner.style.height = 100*UC +"px";
conteiner.style.position = 'relative';
conteiner.style.border = '1px solid black';
conteiner.style.marginLeft = (window.innerWidth - 100*UC)/3 +"px";
conteiner.style.marginTop = (window.innerHeight - 100*UC)/3 +"px";*/
conteiner.id = "contenedor";
conteiner.relacion(0);
conteiner.cambiar_lados(99,99);
conteiner.resize();
conteiner.centrar();

conteiner.style.overflow = 'hidden';
//conteiner.className  = "contenedor grilla";
conteiner.ids = 1;

conteiner.fps = 60;
conteiner.color_del_borde("black");
//conteiner.grosor_del_borde(1);

//conteiner.style.perspective = 100*UC +"px";


conteiner.mostrar_grilla = function(){
	conteiner.grid = document.getElementById("conteinerGrid");
	if (!conteiner.grid){
		conteiner.grid = document.createElement('div');
		conteiner.grid.className = "grilla";
		conteiner.grid.id = "conteinerGrid"; 
		conteiner.appendChild(conteiner.grid);
	}
	conteiner.grid.style.backgroundImage = generarGrilla(); 
}
conteiner.ocultar_grilla = function(){
	conteiner.removeChild(conteiner.grid);
	conteiner.grid = null;
}


conteiner.color_de_contenedor = (color) => {conteiner.style.backgroundColor = color;};
conteiner.color_del_borde = (color) => {conteiner.style.borderColor = color};
conteiner.grosor_del_borde = (grosor) => {conteiner.style.borderWidth = parseInt(conteiner.clientWidth/100*grosor)+"px";}





conteiner.mostrar_error = function(textError){
	conteiner.textError = textError;
	var errorTextSpace = document.getElementById("errorTextSpace");
	if (!errorTextSpace){
		errorTextSpace = document.createElement('div');
		errorTextSpace.className = "text"; 
		errorTextSpace.id = "errorTextSpace"; 
		box.appendChild(errorTextSpace);
	}
	errorTextSpace.innerHTML = textError; 
}

conteiner.tono = function (frequency = 440, duration = 0.5, repeat = 1, interval = 0) {
  // Creamos el contexto de audio
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  // Creamos el oscilador
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;

  // Creamos el nodo de ganancia y lo conectamos al oscilador
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // Iniciamos el oscilador y lo detenemos después del tiempo especificado
  oscillator.start();
  gainNode.gain.setValueAtTime(1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  oscillator.stop(audioContext.currentTime + duration);

  // Repetimos el sonido si es necesario
  if (repeat > 1) {
    setTimeout(() => {
      conteiner.tono (frequency, duration, repeat - 1);
    }, duration + interval * 1000);
  }
}

conteiner.mostrar_error = function(){ return conteiner.textError}
document.body.appendChild(conteiner);


function caja(){
	var box = document.createElement('div');
	box.className  = "caja";
	if(conteiner){
		box.id = conteiner.ids;
		++conteiner.ids;
	}else{
		box.id = 0;
	}
	box.style.perspective = '100vh';

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
	
	//*****Espacio de texto*****//
	
	function textSpace(){
		var textSpace = document.getElementById("textSpace" + box.id);
		if(!textSpace){
			textSpace = document.createElement('div');
			textSpace.id = "textSpace" + box.id; 
			textSpace.texto = (texto,className)=>{
				textSpace.innerHTML = texto;
				textSpace.className = className; 
			}
			box.appendChild(textSpace);
		}
		return textSpace;
	} 
	
	function expo(num, digits) {
	  let exp = num.toExponential(0);
	  let parts = exp.split("e");
	  let mantissa = parseFloat(parts[0]).toFixed(0);
	  let exponent = parseInt(parts[1]);
	  return mantissa + "e" + exponent;
	}
	
	//--------textSpace--------//
	box.textSpace_prop = () => {
		if (box.textSpace){	
			switch (box.textSpace.className) {
			case "clock":
				box.textSpace.style.fontSize = Math.min( box.textSpace.offsetHeight*0.90, (3/ box.fClock.length)  * box.textSpace.offsetWidth *0.15 )+ "px";
				break;
			case "text":
				box.textSpace.style.fontSize = box.textSpace.offsetHeight / 100 * box.text_unity + "px";
				break;
			case "value":
				box.textSpace.style.fontSize = box.textSpace.offsetHeight *0.65 + "px";
				let digitosMaximos = Math.round((box.size[1] / box.size[0]) * 1.8);
				let digitosEnteros = Math.floor(box.text).toString().length; 
				let valor = (digitosMaximos < digitosEnteros)? "FR":  parseFloat(box.text.toFixed(Math.max(0,digitosMaximos-digitosEnteros-1))); 
				box.textSpace.texto(valor,"value");
				break;	
			default:
			}
		}
	}
	
	
	//--------Nuemero----------// 
	
	box.colocar_numero = function(value){
		box.text = parseFloat(value);
		if (!box.textSpace)	box.textSpace = textSpace();
		box.textSpace.texto(value,"value");
		box.textSpace_prop();
	}
	box.colocar_numero_real = function(value){
		box.colocar_numero(value);
	}
	box.colocar_numero_entero = function(value){
		box.colocar_numero(Math.round(value),0);
	}

	box.colocar_numero_natural = function(value){
		box.colocar_numero(Math.max(0,Math.round(value)),0);
	}		
	
	
	box.valor_proporcion = function(){
		box.textSpace.style.fontSize = box.textSpace.offsetHeight + "px";
	}
	box.numero = ()=> { return box.text.parseFloat(x)}
	box.quitar_numero = function(){
		box.removeChild(box.textSpace);
	}
	
	//--------Texto----------//
	box.text_unity = 25;
	box.colocar_texto = function(texto){
		box.text = String(texto);
		if (!box.textSpace)	box.textSpace = textSpace();
		box.textSpace.texto(texto,"text");
		box.textSpace_prop();
	}
	box.texto_proporcion = (unidad) =>{ 
		box.text_unity = unidad;
		box.textSpace_prop();
	}
	
	box.agregar_texto = function(text){
		box.colocar_texto(box.text + String(text));
	}
	box.borrar_texto = function(){
		 box.colocar_texto("");
	}
	
	box.texto = function(){ return box.text}
	box.quitar_texto = function(){
		var textSpace = document.getElementById("textSpace" + box.id);
		box.removeChild(box.textSpace);
	}
	
	//--------------Reloj---------------//	

	box.colocar_hora = function(){
		box.fClock = "hms";
		box.text = todaySeg();
		if (!box.textSpace)	box.textSpace = textSpace();
		box.textSpace.texto(seg2Hour(box.text, box.fClock),"clock");
		box.textSpace_prop();
	}

	box.encender_hora = function(){	
		box.text = todaySeg();
		if (box.textSpace){
			box.textSpace.texto(seg2Hour(box.text, box.fClock),"clock");
			box.timeTimeout = setTimeout(box.encender_reloj,1000);	
		}
	}
	
	//--------------Temporizador---------------//	
	box.disparo_temporizador = function(accion){
		box.dTimer = accion;
	};
	
	box.colocar_temporizador = function(tiempo){
		box.fClock = "hms";
		box.text = hour2Seg(tiempo);
		if (!box.textSpace)	box.textSpace = textSpace();
		box.textSpace.texto(seg2Hour(box.text,box.fClock),"clock");
		box.textSpace_prop();
	}

	box.encender_temporizador = function(){	
		if (box.textSpace){
			--box.text;
			box.textSpace.texto(seg2Hour(box.text,box.fClock),"clock");
			if(box.text > 0){
				box.timeTimeout = setTimeout(box.encender_temporizador,1000);
			}else{
				box.dTimer();
			}	
		}
	}
	box.segundos_temporizador = function(){ return box.text;}
	box.leer_temporizador = function(){ return seg2Hour(box.text);}
	box.cambiar_segundos_temporizador = function(tiempo){ box.text = hour2Seg(tiempo);}
	box.pausar_temporizador = function(){clearTimeout(box.timeTimeout);}
	//--------------Alarma---------------//	
	box.disparo_alarma = function(accion){
		box.dAlarm = accion
	};
	
	box.colocar_alarma = function(tiempo){
		box.fClock = "hms";
		box.text = hour2Seg(tiempo);
		if (box.text < todaySeg()) box.text += hour2Seg("24");
		if (!box.textSpace)	box.textSpace = textSpace();
		box.textSpace.texto(seg2Hour(box.text - todaySeg(),box.fClock),"clock");
		box.textSpace_prop();
	}
	
	box.encender_alarma = function(){	
		if (box.textSpace){
			let segs = box.text - todaySeg();
			box.textSpace.texto(seg2Hour(segs,box.fClock),"clock");
			if(segs > 0){
				box.timeTimeout = setTimeout(box.encender_alarma,1000);
			}else{
				box.dAlarm();
			}	
		}
	}
	
	box.leer_alarma = function(){ return seg2Hour(box.text);}
	box.segundos_alarma = function(){ return box.text - todaySeg();}
	box.cambiar_alarma = function(tiempo){ box.text = hour2Seg(tiempo);}

	//--------------Cronometro---------------//	
	box.colocar_cronometro = function(){
		box.fClock = "hms";
		box.text = 0;
		if (!box.textSpace)	box.textSpace = textSpace();
		box.textSpace.texto(seg2Hour(box.text,box.fClock),"clock");
		box.textSpace_prop();
	}
	
	box.encender_cronometro = function(){	
		if (box.textSpace){
			++box.text;
			box.textSpace.texto(seg2Hour(box.text,box.fClock),"clock");
			box.timeTimeout = setTimeout(box.encender_cronometro,1000);	
		}
	}
	
	box.segundos_cronometro = function(){ return box.text;}
	box.reiniciar_cronometro = function(){ box.text = 0;}
	box.pausar_cronometro = function(){clearTimeout(box.timeTimeout);}
	
	//----Estandar para tiempo -----//
	box.pausar_reloj = function(){clearTimeout(box.timeTimeout);}
	
	box.quitar_reloj = function(){
		clearTimeout(box.timerTimeout);
		box.removeChild(box.textSpace);
	}
	box.formato_reloj = (formato) => {
		box.fClock = formato;
		box.textSpace_prop();
	}
	
	//-------Datos------//
	box.datos = function(){ return box.data}
	
	box.colocar_datos = function(data){
		box.data = data;
	}

	box.borrar_datos = function(){
		box.data = null;
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
	box.size = [0,0,1]; //alto,ancho,ratio
	box.sRatio = 0;
	
	box.relacion = (ratio = 0)=>{//0 -> 1:1 , 1 -> width, 2 -> height, 3 -> min  
		box.sRatio = ratio;
		box.resize();	
	}
	
	box.alto = ()=> {return box.size[0]};
	box.ancho = ()=> {return box.size[1]};
	
	box.cambiar_area = (lado2) => {
		let lado = Math.floor(Math.sqrt(lado2))
		box.cambiar_alto(lado);
		box.cambiar_ancho(lado);
	}
	
	box.cambiar_lados = (height, width = height ) => {
		box.cambiar_alto(height);
		box.cambiar_ancho(width);
	}
	
	box.cambiar_alto = (height) => {
		box.size[0] = height ;
		box.calcRatio();
		box.style.height = (((box.size[2] < 1 && box.sRatio == 3)|| box.sRatio == 1)?height * box.size[2]:height)+ "%";
		box.posicion_vertical(box.vertical());
		box.textSpace_prop();
	}
	
	box.cambiar_ancho = (width)=> {
		box.size[1] = width ;
		box.calcRatio();
		box.style.width = (((box.size[2] > 1 && box.sRatio == 3)||box.sRatio == 2)? width / box.size[2]:width)  + "%";
		box.textSpace_prop();
	}
	box.calcRatio = ()=>{
		if(box.parentNode) box.size[2] = box.parentNode.offsetWidth / box.parentNode.offsetHeight;	
	}
	
	box.resize = () =>{
		box.cambiar_alto(box.size[0]);
		box.cambiar_ancho(box.size[1]);
	}
	
	box.addEventListener('resize', () => {
	   console.log("por resize");
	   box.resize();
	});
	//-------------girar-------------------//
	box.angles = [0,0,0];
	box.elevacion = ()=> {return box.angles[0]};
	box.azimut = ()=> {return box.angles[1]};
	box.rotacion = ()=> {return box.angles[2]};
	

	box.cambiar_elevacion = (elevacion)=> {
		box.angles[0] = elevacion;
		box.style.transform += "rotateX("+elevacion+"deg)";
	}
	
	box.cambiar_azimut = (azimut) => {
		box.angles[1] = azimut;
		box.style.transform += "rotateY("+azimut+"deg)";
	}
	
	
	box.cambiar_rotacion = (elevacion)=> {
		box.angles[2] = elevacion;
		box.style.transform += "rotateX("+elevacion+"deg)";
	}
	
	
	//-------Movimiento--------//
	box.position = [0,0];
	
	box.horizontal = ()=> {return box.position[0]};
	box.vertical = ()=> {return box.position[1]};
	box.posicion_horizontal = (h) => {
		box.position[0] = h;
		box.style.left = h + "%";
	}
	
	box.posicion_vertical = (v) => {
		box.position[1] = v;
		box.style.top = (100 - v) - box.size[0] +"%";
	}
	
	box.centrar = ()=>{
			box.posicion( (100 - parseFloat(box.style.width.slice(0, -1)))/2,
					  (parseFloat(100 - box.style.height.slice(0, -1)))/2);
	}
	
	box.posicion = function(h,v){
		box.posicion_horizontal(h);
		box.posicion_vertical(v);
	} 
	box.mover_derecha = function(vel){
		box.posicion_horizontal(Math.min(box.horizontal()+ vel)); 
	}
	box.mover_izquierda = function(vel){
		box.posicion_horizontal(Math.max(box.horizontal()- vel)); 
	}
	box.mover_arriba = function(vel){

		box.posicion_vertical(Math.min(box.vertical()+ vel)); 
	}
	box.mover_abajo = function(vel){
		box.posicion_vertical(Math.max(box.vertical() - vel)); 
	}

	
	box.mover_a_posicion = function(h,v,vel){	
		if ((vAct != (90 - v)) || (hAct != h)){
			(Math.abs(box.horizontal() - h) < vel)? box.posicion_horizontal(h):  box.posicion_horizontal(box.horizontal() + vel * Dist(box.horizontal(),h));
			(Math.abs(box.vertical() - v) < vel)? box.posicion_vertical(v): box.posicion_vertical(box.vertical() + vel * Dist(box.vertical(),v));
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
		(box.vertical() >= 0)? box.mover_abajo(box.gravedad):box.posicion_vertical(0);
		box.gravityTimeout = setTimeout(box.colocar_gravedad,1000/conteiner.fps);	
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
	
	//---------Acciones--------------- //
	box.accion_al_tocar = function (otraCaja,acciones){
		if ((Math.abs(box.horizontal() - otraCaja.horizontal()) < 5)&&
			(Math.abs(box.vertical() - otraCaja.vertical()) < 5)){
			console.log("se estan tocando");
		}	

		setTimeout(box.accion_al_tocar,1000/conteiner.fps,otraCaja);	
	}
	
	box.accion_en_tiempo = function (ms,acciones){
		acciones();	
		setTimeout(box.accion_en_tiempo,ms,acciones);	
	}
	
	box.accion_con_click = function(acciones){
		box.addEventListener('click', (event) => {
			acciones();
		});
	}
	
	/*/
	box.accion_con_click = function(...acciones){
		box.addEventListener('click', (event) => {
			acciones(...args);
		});
	}*/
	
	box.accion_con_tecla = function(tecla, acciones){
		document.addEventListener('keydown', (event) => {
			if (event.key === tecla){
				acciones();
			}
		});
	}
	
	//-------------Tapiz-------------//

	box.tapiz = function(numImg){
		box.tapestry = document.getElementById("tapestrySpace" + box.id);
		if (!box.tapestry){
			box.tapestry = document.createElement('div');
			box.tapestry.className = "tapestry";
			box.tapestry.id = "tapestrySpace" + box.id; 
			box.appendChild(box.tapestry);
		}
		box.tapestry.style.backgroundImage = crearTextura(numImg); 
	}
	box.quitar_tapiz = function(){
		box.removeChild(box.tapestry);
		box.tapestry = null;
	}
	box.tapiz_propio = (url) => {
		box.style.backgroundImage = "url('"+url+"')"
		box.tapestry = document.getElementById("tapestrySpace" + box.id);
		if (!box.tapestry){
			box.tapestry = document.createElement('div');
			box.tapestry.className = "tapestry";
			box.tapestry.id = "tapestrySpace" + box.id; 
			box.appendChild(box.tapestry);
		}
		box.tapestry.style.backgroundImage = "url('"+url+"')"; 
	};
	
	box.repetir_tapiz = (repetir) => {//SI-NO-X-Y
		switch (repetir){
		  case 'NO':
			box.tapestry.style.backgroundRepeat = "no-repeat";
			break;
		  case 'X':
			box.tapestry.style.backgroundRepeat = "repeat-x";
			break;
		  case 'Y':
			box.tapestry.style.backgroundRepeat = "repeat-y";
			break;
		  default:
			box.tapestry.style.backgroundRepeat = "repeat";
		}
	}
    box.area_de_tapiz = (ancho,alto = ancho) => {box.tapestry.style.backgroundSize = ancho+"% "+alto+"%";};
	box.area_de_tapiz_cubrir = () => {box.tapestry.style.backgroundSize = "cover";};

/*
	box.tapiz = (numImg) => {box.style.backgroundImage = crearTextura(numImg)};
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
	box.area_de_tapiz_cubrir = () => {box.style.backgroundSize = "cover";};*/
	
	//------------------Estilos------------//
	box.color_de_caja = (...color) => {
		box.boxColors = color;
    	(color.length === 1)?  box.style.backgroundColor = color[0] :  box.style.backgroundImage = `linear-gradient(0deg, ${color.join(', ')})`;
    };
	
	box.angulo_color_de_caja = (ang) => {
	  let color = box.boxColors;
	  (color.length === 1) ? box.style.backgroundColor = color[0] : box.style.backgroundImage = `linear-gradient(${ang}deg, ${color.join(', ')})`;
	};
	
	box.color_del_borde = (color) => {box.style.borderColor = color};
	box.grosor_del_borde = (grosor) => {box.style.borderWidth = parseInt(box.clientWidth/100*grosor)+"px";}
	
	box.redondear_borde = (...args)=>{box.style.borderRadius = args.map(arg => isNaN(arg) ? 0 : arg).join("% ") + "%";}

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
	box.poner_dentro = (otraCaja)=> {
		box.relacion(0);
		otraCaja.appendChild(box); 
		box.resize();
	};
    //---------------Propiedades------------------//
	box.copiar_propiedades = (otraCaja)=> {box = otraCaja.cloneNode(true);};

	//------------grilla---------------//
	box.mostrar_grilla = function(){
		box.grid = document.getElementById("boxGrid"+ box.id);
		if (!box.grid){
			box.grid = document.createElement('div');
			box.grid.className = "grilla";
			box.grid.id = "boxGrid"+ box.id; 
			box.appendChild(box.grid);
		}
		box.grid.style.backgroundImage = generarGrilla(); 
	}
	box.ocultar_grilla = function(){
		box.removeChild(box.grid);
		box.grid = null;
	}

//--------------Seleccion de hijos-------------------//

  // Método "todos" para modificar un método específico en algunos hijos
    box.todos = function (filterFunc, methodName, ...args) {
    var children = box.children;
    for (var i = 0; i < children.length; i++) {
      if (filterFunc(children[i])) {
        if (typeof children[i][methodName] === "function") {
          children[i][methodName](...args);
        }
      }
    }
  };	
  
  box.todos = function (filterFunc, methodName, ...args) {
    var children = box.children;
    for (var i = 0; i < children.length; i++) {
      if (filterFunc(children[i])) {
        if (typeof children[i][methodName] === "function") {
          children[i][methodName](...args);
        }
      }
    }
  };	
		
//--------------Fin---------------//	
	
	box.posicion(30,30);
	box.relacion(3);
	box.cambiar_area(100);
	(conteiner)?conteiner.appendChild(box):document.body.appendChild(box);
		
	return box
	
//------------------Funciones adicionales Utiles ----------------------//
	function dateSegNow(){
		return Math.floor(Date.now() / 1000);
	}
	
	function todaySeg() {
		  const ahora = new Date();
		  const medianoche = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
		  const segundosDesdeMedianoche = Math.floor((ahora.getTime() - medianoche.getTime()) / 1000);
		  return segundosDesdeMedianoche;
	}
	
	function hour2Seg(hora) {
		const tiempo = hora.split(":");
		const horasEnSegundos = (tiempo[0])? parseInt(tiempo[0]) * 3600:0;
		const minutosEnSegundos = (tiempo[1])? parseInt(tiempo[1]) * 60:0;
		const segundos = (tiempo[2])? parseInt(tiempo[2]):0;
		const tiempoTotalEnSegundos = horasEnSegundos + minutosEnSegundos + segundos;
		return tiempoTotalEnSegundos;
	}

	function seg2Hour(segundos, formato = "hms") {
		const horas = Math.floor(segundos / 3600);
		const minutos = Math.floor((segundos - horas * 3600) / 60);
		const segundosRestantes = segundos - horas * 3600 - minutos * 60;
		const cadenaDeTiempo = ((formato.includes("h")) ? `${horas.toString().padStart(2, "0")}:`  : "" )+
					   ((formato.includes("m")) ? `${minutos.toString().padStart(2, "0")}:` : "") +
					   ((formato.includes("s")) ? `${segundosRestantes.toString().padStart(2, "0")}` : "");
	  return cadenaDeTiempo;
	}
	
	function formatHour(date, formato = "hms") {

		const cadenaDeTiempo = ((formato.includes("h")) ? `date.getHours().toString().padStart(2, "0") + ":"`  : "" )+
					   ((formato.includes("m")) ? `date.getMinutes().toString().padStart(2, "0") + ":"` : "") +
					   ((formato.includes("s")) ? `date.getSeconds().toString().padStart(2, "0")` : "");
		return cadenaDeTiempo;
	}
	
	function nowHour(segundos, formato = "hms") {
		const fecha = new Date(segundos * 1000);
		const horas = fecha.getHours().toString().padStart(2, "0");
		const minutos = fecha.getMinutes().toString().padStart(2, "0");
		const segundosRestantes = fecha.getSeconds().toString().padStart(2, "0");
		const cadenaDeTiempo = ((formato.includes("h")) ? `${horas}:` : "" )+
						   ((formato.includes("m")) ? `${minutos}:` : "") +
						   ((formato.includes("s")) ? `${segundosRestantes}` : "");

	  return cadenaDeTiempo;
	}
}
/*
function pila(){
	new 
	
}*/

/*
function resizeChilds(div){
	cajas = div.querySelectorAll('.caja');
	if (cajas.length != 0){
		cajas.forEach((caja) => {
			caja.changeSize(div.clientHeight);
		});
	}
	
}

padre.addEventListener('resize', () => {
  const nuevoAncho = padre.clientWidth;
  const nuevoAlto = padre.clientHeight;
  cajas = padre.querySelectorAll('.caja');
  cajas.forEach((caja) => {
    caja.style.width = `${nuevoAncho}px`;
    caja.style.height = `${nuevoAlto}px`;
  });
});

*/