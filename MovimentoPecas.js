var x,y;
var c =0;
var i; 

function possiveis_movimentos(){
    
    x = movimenta['selecionada']['x'];
    y = movimenta['selecionada']['y'];

    document.getElementById('t'+x+y).style.backgroundColor = "#3C9"; //muda cor de fundo
    possiveis[c] = "t"+x+y; c++;

    switch(peca[x][y]['peca']) {
        case 'cavalo':
                cavalo(x,y);
          break;
        case 'rei':
                rei(x,y);
          break;
        case 'torre':
                torre(x,y);
          break;
        case 'bispo':
                bispo(x,y);
          break;
        case 'rainha':
                rainha(x,y);
          break;
        case 'peao':
                peao(x,y);
          break;
        default:
          
      }
    return c;
}
function rei(x,y){
    possivel(x-1,y);
    possivel(x,y-1);
    possivel(x-1,y-1);
    possivel(x+1,y);
    possivel(x,y+1);
    possivel(x+1,y+1);
    possivel(x-1,y+1);
    possivel(x+1,y-1);
}
function rainha(x,y){
    for(i=1;possivel(x-i,y-i);i++);
    for(i=1;possivel(x+i,y+i);i++);
    for(i=1;possivel(x-i,y+i);i++);
    for(i=1;possivel(x+i,y-i);i++);
    for(i=1;possivel(x-i,y);i++);
    for(i=1;possivel(x+i,y);i++);
    for(i=1;possivel(x,y-i);i++);
    for(i=1;possivel(x,y+i);i++);
}
function torre(x,y){
    for(i=1;possivel(x-i,y);i++);
    for(i=1;possivel(x+i,y);i++);
    for(i=1;possivel(x,y-i);i++);
    for(i=1;possivel(x,y+i);i++);
}
function bispo(x,y){
    for(i=1;possivel(x-i,y-i);i++);
    for(i=1;possivel(x+i,y+i);i++);
    for(i=1;possivel(x-i,y+i);i++);
    for(i=1;possivel(x+i,y-i);i++);
}
function cavalo(x,y){
    possivel(x-1,y-2);
    possivel(x+1,y+2);
    possivel(x+1,y-2);
    possivel(x-1,y+2);
    possivel(x-2,y-1);
    possivel(x+2,y+1);
    possivel(x+2,y-1);
    possivel(x-2,y+1);
}
function peao(x,y){
    if(peca[x][y]['cor']=="branco"){

        if(!peca[x-1][y]['peca']){
            possivel(x-1,y);
        }if(y-1>0 && peca[x-1][y-1]['peca']){
            possivel(x-1,y-1);						
        }
        if(y+1<9 && peca[x-1][y+1]['peca']){
            possivel(x-1,y+1);					
        }					

        if(x==7){				
            if(!peca[x-2][y]['peca'] && !peca[x-1][y]['peca']){
                possivel(x-2,y);
            }
        }
    }
    if(peca[x][y]['cor']=="preto"){
        
        if(!peca[x+1][y]['peca']){
            possivel(x+1,y);
        }if(y-1>0 && peca[x+1][y-1]['peca']){
            possivel(x+1,y-1);						
        }
        if(y+1<9 && peca[x+1][y+1]['peca']){
            possivel(x+1,y+1);					
        }					

        if(x==2){
        
            if(!peca[x+2][y]['peca'] && !peca[x+1][y]['peca']){
                possivel(x+2,y);
            }

        }

    }
}
function possivel(px,py){
    if(px>0 && px <9 && py>0 && py <9 && peca[px][py]['cor']!= movimenta['selecionada']['cor']){
        document.getElementById('t'+(px)+(py)).style.backgroundColor = "#3C9"; //muda cor de fundo
        possiveis[c] = "t"+(px)+(py); c++;
        
        if(!peca[px][py]['peca']){
            return true;
        }
    }else{
        return false;
    }
}