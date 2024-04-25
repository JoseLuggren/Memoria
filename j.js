var muestra = ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"];
var cuenta = 0;
var dato = ["x","x","x"];
var pocicion = "x";
var encontrados = ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"];
var estado = "false";
var cuenta_pares=0;


function ver(id)
{

	if (estado == "true")
	{	
		if (cuenta == 0)
		{
			
			let seleccionado_1 = document.getElementById(id);
			seleccionado_1.innerHTML = muestra [id];
			dato[cuenta] = muestra [id];
			seleccionado_1.style.backgroundColor = "red";
			pocicion = id;
				
		};

		if (cuenta > 0 && cuenta < 3)
		{
			
			let seleccionado_2 = document.getElementById(id);
			seleccionado_2.innerHTML = muestra [id];
			dato[cuenta] = muestra [id];
			seleccionado_2.style.backgroundColor = "#5F732F";
		    if( dato[0] == dato[cuenta] && id != pocicion )
		    {
		    	dato = ["x","x","x"];
				seleccionado_2.style.backgroundColor = "yellow";
				let seleccionado_primero = document.getElementById(pocicion);
				seleccionado_primero.style.backgroundColor = "yellow";
				seleccionado_2.disabled = true; 
				seleccionado_primero.disabled = true; 
				seleccionado_2.className = 'encontrado';
				seleccionado_primero.className = 'encontrado';
				cuenta = 4;
				cuenta_pares++;
				let par = document.getElementById('pares');
				par.innerHTML = "Pares encontrados:";
				let n_par = document.getElementById('numero_de_pares');
				n_par.innerHTML = cuenta_pares;
		    };
		    if (id == pocicion)
		    {
		    	cuenta = 4;
		    }
			
		};

		cuenta++;
		
		if (cuenta > 3 )
		{		
			let elementos = document.getElementsByClassName('elemento');
	        for( let f=0; f<elementos.length; f++ )
	        {
	            elementos[f].innerHTML = "";
	            elementos[f].style.backgroundColor = "#1B2E40";
	        }
	        cuenta = 0;
	        dato = ["x","x","x"];
			pocicion = ["x","x","x"];
		};


		if ( cuenta_pares == 8 )
		{
			cuenta_pares = 0;
			let par = document.getElementById('pares');
			par.innerHTML = "";
			let n_par = document.getElementById('numero_de_pares');
			n_par.innerHTML = "";
			let encontrados = document.getElementsByClassName('encontrado');
	   		for(let f=0 ; f < encontrados.length; f++)
		    {
		    	
		        encontrados[f].className = 'elemento';
		    };

		};



	}	
}



function nuevo_juego()
{

    estado = "true";
    cuenta_pares = 0;
    let par = document.getElementById('pares');
	par.innerHTML = "Pares encontrados:";
	let n_par = document.getElementById('numero_de_pares');
	n_par.innerHTML = cuenta_pares;


	let elementos = document.getElementsByClassName('elemento');
    for(let ff=0 ; ff<elementos.length; ff++)
    {
	    let encontrados = document.getElementsByClassName('encontrado');
	    for(let f=0 ; f < encontrados.length; f++)
		    {
		    	
		        encontrados[f].className = 'elemento';
		    };
    	
        elementos[ff].innerHTML = "";
        elementos[ff].style.backgroundColor = "#1B2E40";
        elementos[ff].disabled = false;
    };

    cuenta = 0;

	let pares = ["a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h"];
	let generado = ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"];

	let valor = 0;
	let i = 0;
	let conv = 0;


	while( i < 16)
	{
		valor = Math.floor(Math.random() * 16);
		if ( generado [ valor ] == "x")
		{
			generado [ valor ] = i;
			muestra [i] = pares [valor];
			i++;
		}	

	};

}

