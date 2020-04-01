function cria_array(){
    var x,y;
    
    peca = new Array();
    
    for(x=1;x<=8;x++){
        
        peca[x] = new Array();
        
        for(y=1;y<=8;y++){
        
            peca[x][y] = new Array();
            peca[x][y]['peca'] = false; 		//defino como falso para as que não começam com peça ficarem nulas
            peca[x][y]['cor'] = false;			//defino como falso para as que não começam com peça ficarem nulas
         
        }
    }
    return peca;
}


function array_movimento(){
    movimenta = new Array();
	
	movimenta['selecionada'] = new Array();
	movimenta['selecionada']['x'] =0;
	movimenta['selecionada']['y'] =0;
	movimenta['selecionada']['peca']="0";
	movimenta['selecionada']['cor']="0";
	
	movimenta['destino'] = new Array();
	movimenta['destino']['x'] =0;
	movimenta['destino']['y'] =0; 
	movimenta['destino']['peca'] ="0";
    movimenta['destino']['cor']="0";
    
    return movimenta;
}