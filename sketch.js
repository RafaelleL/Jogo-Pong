// colisao da biblioteca p5.collide2d.js
let colidiu = false;

//variáveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2; 

//velocidade bolinha
let velXBolinha = 6;
let velYBolinha = 6;

//variaveis raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 13;
let raqueteAltura = 100;

//variaveis raquete oponente
let xRaqueteOponente = 583;
let yRaqueteOponente = 150;
let velYRaqueteOponente;


//variaveis do placar
let pontosMeus=0;
let pontosOponente=0;

let chanceErro = 0.05; 

//propriedades iniciais do ambiente
function setup() {
  createCanvas(600, 400); //largura x altura 
 
}

function draw() {
  
  background(0); 
  
  mostrarBolinha();
  movimentoBolinha();
  
  //se esta colidindo, vá pro outro lado
  verificaColisaoBorda();
  
  //criação das raquetes
    mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  mostraRaquete(xRaquete,yRaquete);
  
  //movimenta minha raquete
  movimentoRaquete();
  
  //movimenta raquete do oponente
  movimentaRaqueteOponente();

  
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  
  incluirPlacar();
  marcarPontos();
  
  
}

//criando bolinha
function mostrarBolinha (){

  circle(xBolinha,yBolinha,diametro); 
  
}

//movimentação da bolinha
function movimentoBolinha(){
  xBolinha += velXBolinha;
  yBolinha += velYBolinha; //horizontal
}


//colisao da bola com a borda
function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velXBolinha *= -1;
  }
    
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velYBolinha *= -1;
  }
  
}

//Criação das raquetes
function mostraRaquete (x , y){

  rect(x, y,raqueteComprimento,raqueteAltura);
  
}


//movimentação raquetes
function movimentoRaquete(){
if (keyIsDown(UP_ARROW) && yRaquete >= 0){
    yRaquete += -10;
}

if (keyIsDown(DOWN_ARROW) && yRaquete <= (400 - raqueteAltura)){
  yRaquete += 10;
 }
}

//Função de movimentar a raquete do oponente, com a chance de erro
function movimentaRaqueteOponente(){
  
  velYRaqueteOponente = velYBolinha;
  
   if (xBolinha > width / 2 && velXBolinha > 0) {
     
    // com chance de erro definida por chanceErro, a raquete do oponente irá para cima ou para baixo em vez de seguir a bola
     
    if (random() < chanceErro) {
      velYRaqueteOponente *= -1;
    }
  }
  yRaqueteOponente += velYRaqueteOponente;
}

//Colisão bolinha raquete
function colisaoRaqueteBiblioteca(x, y){
  
  colidiu = 
     collideRectCircle(x, y , raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  
  if (colidiu) {
    velXBolinha *= -1;
  }
}

//Funçoes do placar
function incluirPlacar(){
  fill(255);
  text(pontosMeus, 200, 26);
  text(pontosOponente, 400, 26);
  
  
}

function marcarPontos(){
  if(xBolinha<10){
    pontosMeus+=1;
  }
  if(xBolinha>590){
    pontosOponente+=1;
  }
}









                                        

  
  

  



  

  
  
