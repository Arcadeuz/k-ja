
var arrayCajas = [];
var methCajas = arrayOfMethod(CajaExiste);

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "eclipse",
  lineWrapping: true
});
var wrap = editor.getWrapperElement();
wrap.style.height = "100%";
editor.refresh();
editor.on("change", function() { //esto tengo que coregir para que no sea cada vez que escibre
    var code = editor.getValue();
    arrayCajas = arrayOfBox(code);
	
});

editor.addOverlay({
    token: function(stream) {
        for (var i = 0; i < arrayCajas.length; i++) {
            if (stream.match(arrayCajas[i])) {
                return "string-2";
            } 
        }
        for (var i = 0; i < methCajas.length; i++) {
            if (stream.match(methCajas[i])) {
                return "string-3";
            } 
        }
        while (stream.next() != null) {
            for (var i = 0; i < arrayCajas.length; i++) {
                if (stream.match(arrayCajas[i])) {
                    return "string-2";
                } 
            }
            for (var i = 0; i < methCajas.length; i++) {
                if (stream.match(methCajas[i])) {
                    return "string-3";
                } 
            }
        }
    }
});

editor.setOption("styleSelectedText", false);
editor.setOption("theme", "default");
editor.setOption("mode", "javascript");

var string2 = editor.getWrapperElement().appendChild(document.createElement("style"));
string2.innerHTML = ".cm-string-2 { color: blue; }";

var string3 = editor.getWrapperElement().appendChild(document.createElement("style"));
string3.innerHTML = ".cm-string-3 { color: green; }";




var dontSave = false;
function addTab(name = "", code = ""){
	if (name == "") name = prompt('Ingrese el nombre del módulo')|| nameBase;
	if (code == "") code = msjBase;
	codeSource.push([name , code]);
	showTab();
}

function closeTab(i){
    if (confirm('si cierra '+codeSource[i][0]+' los cambios se perderán')){
		codeSource.splice(i, 1);
		if(selTab == i)dontSave = true;
		showTab()
		//(selTab >= i)? showTab(true) : showTab();
	}
}

function showTab(last = false){
	document.getElementById("eSelectionArea").innerHTML = "";
	if (codeSource.length > 0){
		for (let i = 0; i < codeSource.length; i++) {
			document.getElementById("eSelectionArea").innerHTML += "<div onclick='changeTab("+i+");' id='chTab"+i+"' class='editionTab'>"+codeSource[i][0]+"</div>";
			document.getElementById("eSelectionArea").innerHTML += "<div onclick='closeTab("+i+");' id='clTab"+i+"' class='closeEditionTab'>(x)</div>";
		}
		document.getElementById("eSelectionArea").innerHTML += "<div onclick='addTab();' class='addEditionTab'>+</div>";
	}else{
		alert("Se creará una nuevo mudulo");
		deleteCode();
		addTab();
	}
	changeTab(selTab);
	//last? changeTab(-1): changeTab(selTab);
}

function changeTab(i){
	saveCode();
	selTab = Math.max(0,Math.min(codeSource.length - 1,i));
	rewriteCode();
	for (let j = 0; j < codeSource.length; j++) {
		document.getElementById("chTab"+j).classList.remove("tabSelected");
		document.getElementById("clTab"+j).classList.remove("tabSelected");
	}
		document.getElementById("chTab"+selTab).classList.add("tabSelected");
		document.getElementById("clTab"+selTab).classList.add("tabSelected");
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
	dontSave = true;
	showTab();
}

function deleteCode(){
	(codeSource.length > selTab)? codeSource[selTab][1] = msjBase: editor.setValue(msjBase);
}

function saveCode(){
	if(!dontSave){
		codeSource[selTab][1] = editor.getValue()|| codeSource[selTab][1];
	}else{
		dontSave = false;
	}
	
}

function addCode(newCode){
	editor.replaceRange(newCode + "\n" ,  editor.getCursor());
	saveCode();
}

function rewriteCode(){
	editor.setValue(codeSource[selTab][1]);
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

