

function addTab(name = "", code = ""){
	if (name == "") name = prompt('Ingrese el nombre del módulo')|| nameBase;
	if (code == "") code = msjBase;
	codeSource.push([name , code]);
	selTab = codeSource.length - 1;
	showTab();
}

function closeTab(i){
    if (confirm('si cierra '+codeSource[i][0]+' los cambios se perderán')){
		(selTab >= i)? selTab = Math.max(0,selTab - 1):"";
		codeSource.splice(i, 1);
		showTab();
	}
}

function showTab(){
	document.getElementById("eSelectionArea").innerHTML = "";
	if (codeSource.length > 0){
		for (let i = 0; i < codeSource.length; i++) {
			document.getElementById("eSelectionArea").innerHTML += "<div onclick='changeTab("+i+");' id='chTab"+i+"' class='editionTab'>"+codeSource[i][0]+"</div>";
			document.getElementById("eSelectionArea").innerHTML += "<div onclick='closeTab("+i+");' id='clTab"+i+"' class='closeEditionTab'>(x)</div>";
		}
		document.getElementById("eSelectionArea").innerHTML += "<div onclick='addTab();' class='addEditionTab'>+</div>";
		document.getElementById("writeCode").value = codeSource[selTab][1];
		changeTab(selTab);
	}else{
		document.getElementById("eSelectionArea").innerHTML += "<div onclick='addTab();' class='addEditionTab'>+</div>";
	}
}

function tabsFromLoad(textFile,type){
	loadSource = JSON.parse(textFile);
	if(type == loadSource.type){
		if (loadSource.type == "Proyecto"){
			tabsFromLoadProyect(loadSource.appSource);
		}else if (loadSource.type == "Modulo"){
			tabFromLoadModule(loadSource.appSource)
		}
	}else{
		alert("Archivo Incorrecto");
	}
}

function tabFromLoadModule(loadCode){
	addTab(loadCode[0],loadCode[1]);
	showTab();
}

function tabsFromLoadProyect(loadCode){
	codeSource = loadCode;
	showTab();
}

function saveCode(){
	codeSource[selTab][1] = document.getElementById("writeCode").value;
}

function addCode(newCode){
	var writeCode = document.getElementById("writeCode");
	var v= writeCode.value;
	var s= writeCode.selectionStart;
	var e= writeCode.selectionEnd;
	codeSource[selTab][1] = v.substring(0, s)+"\n"+newCode+v.substring(e);
	rewriteCode();
}

function changeTab(i){
	selTab = i;
	rewriteCode();
	for (let j = 0; j < codeSource.length; j++) {
		document.getElementById("chTab"+j).classList.remove("tabSelected");
		document.getElementById("clTab"+j).classList.remove("tabSelected");
	}
		document.getElementById("chTab"+i).classList.add("tabSelected");
		document.getElementById("clTab"+i).classList.add("tabSelected");
}

function rewriteCode(){
	document.getElementById("writeCode").value = codeSource[selTab][1];
	rewriteRitchCode();
}

function rewriteRitchCode(){
	document.getElementById("writeCodeDiv").innerHTML = textToRitch(codeSource[selTab][1]);
}

function richToText(texto){
		let erase = {"<a class='method'>":"","<a>":"","</a>":"","<p>":"","</p>":"","<div>":"","</div>":"","<br>":"","&nbsp;":""};
		for(let i in erase){
			texto = texto.split(i).join(erase[i]);
		}
	return texto
}

function textToRitch(texto){
	let methCajas = arrayOfMethod(CajaExiste);
	let arrayCajas = arrayOfBox(texto);
	let arrtexto = [];
	
	let cutters = newSearch(texto,["{"],["}"]);
	for(i=0; i<cutters.length-1;i++ ){
		arrtexto.push(texto.substring(cutters[i],cutters[i+1]));
		if (arrtexto[i][0] == "{") arrtexto[i] =  "<i class='func'>"+arrtexto[i]+"</i>";
	}
	texto = arrtexto.join("");	
	arrtexto = [];
	cutters = newSearch(texto,["/*","\""],["*/","\""]);
	for(i=0; i<cutters.length-1;i++ ){
		arrtexto.push(texto.substring(cutters[i],cutters[i+1]));
	}
	for(let i in arrtexto){
		if (arrtexto[i][0] == "\""){
			arrtexto[i] =  "<a class='text'>"+arrtexto[i]+"</a>";
		}else if (arrtexto[i][0] == "/"){
			arrtexto[i] =  "<a class='coms'>"+arrtexto[i]+"</a>";
		}else{	
			for(let j in arrayCajas){
				arrtexto[i] =  arrtexto[i].split(arrayCajas[j]).join("<c class='boxs'>"+arrayCajas[j]+"</c>");
			}
			for(let j in methCajas){
				arrtexto[i] = arrtexto[i].split("."+methCajas[j]+"(").join(".<c class='method'>"+methCajas[j]+"</c>(");
			}
		}
	}

	texto = arrtexto.join("");	
	texto = texto.split("\n").join("<br>");
	return texto
	
	
	function newSearch(str,arrStart,arrEnd){
		index = 0;
		res = [0];
		posArr0 = [];
		while (index <= str.length){
			for (let i in arrStart){
				posArr0[i] = str.indexOf(arrStart[i],index);
				(posArr0[i] == -1)? posArr0[i] = str.length:"";
			}
			j =  posArr0.indexOf(Math.min(...posArr0));
			ini = posArr0[j];
			index = posArr0[j] + arrStart[j].length;
			fin = str.indexOf(arrEnd[j],index);
			(fin == -1)? fin = str.length:fin += arrEnd[j].length;
			index = fin + 1;
			res.push(ini,fin);
		}
		return res;
	}
}

