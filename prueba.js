(función(){
	var input = window.prompt ("Ingrese tamaño de tabla");
	if (input == null) {
		alerta ("Debe ingresar un numero entero");
		regreso;
	}

	var table_size = parseInt (entrada);
	var table = document.createElement ("table");
	document.body.appendChild (tabla);

	table.setAttribute ("border", "1");

	para (var i = 0; i <table_size; i ++) {
		var new_tr = document.createElement ("tr");
		para (j = 0; j <tamaño de tabla; j ++) {
			var contenido = 0;
		    if (i == 0 || i == table_size-1 || j == 0 || j == table_size-1) {
		    	contenido = 1;
		    }

			var new_td = document.createElement ("td");
			new_td.innerHTML = '<span style = "font-family: arial; color: red;" onclick = "celda_click (this)"> '+ contenido +' </span> ';
			new_tr.appendChild (new_td);
		}
		table.appendChild (new_tr);
	}
}) ();