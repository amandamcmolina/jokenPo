let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;

const userScore_span= document.querySelector("#userScore");
const compScore_span = document.querySelector("#compScore");

const result_p = document.querySelector("#result");

const paperButton_img= document.querySelector("#paperButton");
const rockButton_img = document.querySelector("#rockButton");
const scissorsButton_img = document.querySelector("#scissorsButton");
const resetButton = document.querySelector("#resetButton");

function jogo(clickUser){
    jogadasPossiveisComputador = ['rock', 'paper', 'scissors'];
    let n = Math.floor(Math.random()*3);
    cliqueDoComputador = jogadasPossiveisComputador[n];
    switch (clickUser + cliqueDoComputador) {
        //vitoria do usuario
        case "rockscissors":
            case "paperrock":
            case "scissorspaper":
            pontuacaoUsuario++;
            console.log("Você Ganhou! :D " + clickUser + cliqueDoComputador);
            result_p.innerHTML = "Parabéns, você venceu!";
            userScore_span.innerHTML = pontuacaoUsuario;
            break;
        //vitoria do computador
        case "rockpaper":
            case "scissorsrock":
                case "paperscissors":
            pontuacaoComputador++;
            console.log("Computador Ganhou! :( " + clickUser + cliqueDoComputador);
            result_p.innerHTML = "Que pena, o computador venceu";
            compScore_span.innerHTML = pontuacaoComputador;
            break;
        // empate
        case "rockrock":
            case "paperpaper":
                case "scissorsscissors":
            console.log("Empate!");
            result_p.innerHTML = "Empate!";
            break;
        //erro
        default: 
        console.log("Algo saiu errado, vish!");
    }
}

resetButton.onclick = ()=>{
    pontuacaoUsuario = 0;
    userScore_span.innerHTML = pontuacaoUsuario;
    pontuacaoComputador = 0;
    compScore_span.innerHTML = pontuacaoComputador;
    
}

function main(){
    paperButton_img.addEventListener("click", () => {
        jogo("paper");
        // paperButton_img.style.border = "solid green";
    });
    
    rockButton_img.addEventListener("click", () => {
        // rockButton_img.style.border = "solid green";
        jogo("rock");
    });
    
    scissorsButton_img.addEventListener("click", () => {
        // scissorsButton_img.style.border = "solid green";
        jogo("scissors");
    });
};

main();

//Limitar o placar e alterar texto
//Estilizar com vermelho, se pc ganhar
//verde, se o user ganhar
//https://jogo-jokenpo.netlify.app/



// function pedra(){
//     console.log("pedra");
// };
// // rockButton_img.onclick = pedra;
// rockButton_img.addEventListener("click", pedra);




