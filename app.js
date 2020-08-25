let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;

const userScore_span= document.querySelector("#userScore");
const compScore_span = document.querySelector("#compScore");

const result_p = document.querySelector("#result");

const paperButton_img= document.querySelector("#paperButton");
const rockButton_img = document.querySelector("#rockButton");
const scissorsButton_img = document.querySelector("#scissorsButton");

function jogo(clickUser){
    jogadasPossiveisComputador = ['rock', 'paper', 'scissors'];
    let n = Math.floor(Math.random()*3);
    cliqueDoComputador = jogadasPossiveisComputador[n];
    switch (clickUser + cliqueDoComputador) {
        //vitoria do usuario
        case "rockscissors":
            case "paperrock":
                case "scissorspaper":
            console.log("Você Ganhou! :D " + clickUser + cliqueDoComputador);

            break;
        //vitoria do computador
        case "rockpaper":
            case "scissorsrock":
                case "paperscissors":
            console.log("Computador Ganhou! :( " + clickUser + cliqueDoComputador);

            break;
        // empate
        case "rockrock":
            case "paperpaper":
                case "scissorsscissors":
            console.log("Empate!");
            break;
        //erro
        default: 
        console.log("Algo saiu errado, vish!");
    }
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



// function pedra(){
//     console.log("pedra");
// };
// // rockButton_img.onclick = pedra;
// rockButton_img.addEventListener("click", pedra);




