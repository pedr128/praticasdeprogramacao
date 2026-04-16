let tabuleiro      /*escopo global*/
let board 
let aviso
let jogador
let linha
let coluna 

function iniciar(){
 tabuleiro = []
 board = document.getElementById('board')
 aviso = document.getElementById('aviso')
 jogador = 1

    for(let i = 0; i < 3; i++){
        tabuleiro[i] = []
        for(let j = 0; j < 3; j++){
            tabuleiro[i][j] = 0
        }
    }


 console.table(tabuleiro)
 exibir()

}
function exibir(){
    let tabela ='<table cellpadding="10" border="1">'
    
    for(let i = 0; i < 3; i++){ 
    tabela += '<tr>'   /*a soma dos simbolos += server para adicionar na linha de cima paris coisa*/
    
    for(let j = 0; j < 3; j++){
        let marcador = ''
        switch(tabuleiro[i][j]){
            case 1: marcador = 'X'; break;
            case -1:marcador = 'O';  break
            default: marcador = '-'; break
        }
    tabela += '<td>' + marcador + '</td>'
    
    }
    tabela += '</tr>'
    }
    tabela += '</table>'

    board.innerHTML = tabela

}

function jogar(){
    aviso.innerHTML = 'Jogador: ' + numerojogador() + ' é a sua vez'

    linha = document.getElementById('linha').value -1 
    coluna = document.getElementById('coluna').value -1

    if(tabuleiro[linha][coluna] == 0){
    tabuleiro[linha][coluna] = numerojogador() == 1 ? 1 : -1
    }else if(tabuleiro[linha][coluna] != 0){
        alert('Posição já ocupada, tente novamente')
        return
    }
   
    console.table(tabuleiro)
    
    jogador++
    exibir()
    checar()
}   


function checar(){
    //linhas
    for(let i = 0; i <3; i++){
        let soma = 0 
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2]
        if(soma == 3 || soma == -3){
            aviso.innerHTML = 'Jogador ' + numerojogador() + ' venceu!'
            return
        }
    }
    //colunas
   for(let i = 0; i <3; i++){
        let soma = 0 
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i]
        if(soma == 3 || soma == -3){
            aviso.innerHTML = 'Jogador ' + numerojogador() + ' venceu!'
            return
        }
    }
    //diagonal
   for(let i = 0; i <3; i++){
        let soma = 0 
        soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]
        if(soma == 3 || soma == -3){
            aviso.innerHTML = 'Jogador ' + numerojogador() + ' venceu!'
            return
        }
    }
    //diagonal inversa
  for(let i = 0; i <3; i++){
        let soma = 0 
        soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0]
        if(soma == 3 || soma == -3){
            aviso.innerHTML = 'Jogador ' + numerojogador() + ' venceu!'
            return
        }
    }

}

function numerojogador(){
    return jogador%2 + 1
}       