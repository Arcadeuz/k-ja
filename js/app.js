conteiner.ocultar_grilla();

//Escribe tu código aquí ó usa las botoneras para que la magia comience//
c = new Array();
b = new Array();
p = new Array();


for(i=0;i<20;++i){
	for(j=0;j<20;++j){
	   c[i+j] = new caja();
	   c[i+j].color_de_caja(GRISCLARO);
	   c[i+j].color_del_borde(NEGRO);
	   c[i+j].cambiar_area(7);
	   c[i+j].posicion((j*7),(i*7));
	}
}


for(i=0;i<5;++i){
	for(j=0;j<5;++j){
	   b[i+j] = new caja();
	   b[i+j].color_de_caja(ARENA);
	   b[i+j].tapiz_propio("./mios/barrio.png");
	   b[i+j].repetir_tapiz("NO");
	   b[i+j].area_de_tapiz(100); 
	   b[i+j].cambiar_area(14);
	   b[i+j].posicion((j*21),7+(i*21));
	   b[i+j].grosor_del_borde(0);
	}
}

for(i=0;i<4;++i){
	if (rand(5) <= 2){	
		p[i] = new caja();
		p[i].tapiz_propio("./mios/plaza.png");
		p[i].repetir_tapiz("NO");
		p[i].area_de_tapiz_cubrir(); 
		p[i].cambiar_alto((rand(3)==2)?14:35);
		p[i].cambiar_ancho((rand(3)==2)?14:35);
		p[i].posicion((rand(5)*21),7+(rand(5)*21));
		p[i].grosor_del_borde(0);
	}
}

function rand(max) {
  return Math.floor(Math.random() * max);
} 