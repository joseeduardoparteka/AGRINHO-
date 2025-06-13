const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vocẽ se encaixa na vida no campo ou na cidade?",
        alternativas: [
            {
                texto: "acredito que no campo",
                afirmacao: "<b>determinação</b>, vocẽ é uma pessoa que gosta de resolver os problemas por conta pŕopria."
            },
            {
                texto: "acredito que na cidade",
                afirmacao: "Você se destaca por sua <b>estabilidade</b>, gosta de estar ativo na sociedade. (RQE)"
            }
        ]
    },
    {
        enunciado: "qual vocẽ prefere?",
        alternativas: [
            {
                texto: "prefiro o silencio do campo",
                afirmacao: "é uma pessoa mais calma, se concentra mais com o silencio."
            },
            {
                texto: "prefiro a agitação da cidade",
                afirmacao: "é uma pessoa mais agitada, que gosta de estar em movimento."
            },
        ]
    },
    {
        enunciado: "vocẽ gosta de animais?",
        alternativas: [
            {
                tex
                afirmacao: "Você se destaca por sua <b>estabilidade</b>, to: "sim, gosto de todos e não tenho nojo",
                afirmacao: "uma pessoa que encara tudo e não recua diante de desafios"
            },
            {
                texto: "não muito, só algum animal doméstico",
                afirmacao: "uma pessoa que prefere buscar ajuda e informações antes de fazer qualquer coisa."
            },
        ]
    },
    {
        enunciado: "o que acha da ideia de plantar seu próprio alimento? ",
        alternativas: [
            {
                texto: "ótima ideia, faria isso na minha casa",
                afir
                afirmacao: "Você se destaca por sua <b>estabilidade</b>,vocẽ gosta de encarar os desafios pessoalmente, é uma pessoa que faz acontecer."
            },
            {
                texto: "muito trabalhoso, prefiro comprar no mercado",
                afirmacao: "vocẽ não gosta de desafios, prefere estudar e encontar um meio de deixa-los mais faceis. "
            },
        ]
    },
    {
        enunciado: "qual sua preferencia para criar crianças?",
        alternativas: [
            {
                texto: "um lugar com grama, terra, pueira e natureza",
                afirmacao: " vocẽ é uma pessoa que busca aventuras, não se importa de se sujar se for para criar laços fortes e memórias inesqueciveis "
            },
            {
                texto: "um lugar com calçada, parquinho, e sem sujeira",
                afirmacao: " vocẽ é uma pessoa que não gosta de se sujar para se aventurar, busca ser mais culta e viajar para lugares de beleza não natural"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 

                afirmacao: "Você se destaca por sua <b>estabilidade</b>, 