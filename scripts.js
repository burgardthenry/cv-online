
let contato = document.querySelector('.contato')
let sobre = document.querySelector('.sobre-mim')
let formacao = document.querySelector('.formacao')
let portfolio = document.querySelector('.portfolio')
let inicio = document.querySelector('.inicio')

const formulario = document.querySelector('.formulario')
const mascara = document.querySelector('.mascara')

let container = document.querySelector('.container')
let informacoes = document.querySelector('.container .corpo')
let divImagem = document.querySelector('.container .div-img')

contato.onclick = () => mostrar('contato')
sobre.onclick = () => trocaInfo('sobre')
formacao.onclick = () => trocaInfo('formacao')
portfolio.onclick = () => trocaInfo('portfolio')
inicio.onclick = () => trocaInfo('inicio')

mascara.onclick = () => esconder('esconder')

function trocaInfo(type) {

    if (type === 'sobre') {
        informacoes.innerHTML = `

         <div class="texto-sobre">

            <h1 class="h1">Olá, eu sou o Henry!</h1>
            <h2>Analista e Desenvolvedor de Sistemas</h2>

            <p class="p">
                Olá! Me chamo Henry Freitas Burgardt, tenho 26 anos nascido em 02/10/1998 na cidade de Itaqui/RS,
                estudei no
                Colégio Estadual São Patrício do fundamental ao ensino médio, aos 18 anos me alistei no serviço militar
                obrigatório e servindo os 8 anos como militar temporário atuando na área administrativa no setor de
                licitações, porém sempre fui apaixonado por tecnologia e pensava em um dia fazer a transição de carreira
                para alguma área que envolvesse a programação, então ao fim do período de serviço militar, resolvi
                seguir o
                caminho para a profissão que sempre esperei trabalhar. foi então que comecei a faculdade em 2022 na área
                de
                Tecnologia da Informação.
            </p>

        </div>

        <div class="div-img">

            <img class="minha-foto" src="../assets/miha foto.jpeg" alt="logo-site">

        </div>
        
        `
    }

    if (type === 'formacao') {
        informacoes.innerHTML = `

        <div class="div-texto">

        <h1 class = "h1">Formação Educacional</h1>
        <p class = "p">
            Curso de Sistema Integrado de Administração Financeira do Governo Federal; <br>
            Curso de Inglês Básico e Avançado; <br>
            Curso de Aquisições, Licitações e Contratos; <br>
            Curso de Estrutura de Dados: Cursando.

        </p>

        <div>

            <div class="div-foto">
                <img src="./assets/study.png" alt="icone" class="icone">
            </div>
     

        `

    }

    if (type === 'portfolio') {
        informacoes.innerHTML = `

        <body class = "caixa-trabalho">

        <div class ="corpo2">

        
        <div class="caixa">

        <h1 class = "titulo-trabalhos">Portfólio de Trabalhos</h1>

        <a href=""> <img src="./assets/products.png" alt="icone"> </a>
        <a href=""> <img src="./assets/products.png" alt="icone"> </a>
        <a href=""> <img src="./assets/products.png" alt="icone"> </a>
        <a href=""> <img src="./assets/products.png" alt="icone"> </a>
        <a href=""> <img src="./assets/products.png" alt="icone"> </a>
        <a href=""> <img src="./assets/products.png" alt="icone"> </a>

        </div>

        </div>
        

        </body>

        `
    }

    if (type === 'inicio') {
        informacoes.innerHTML = `
    

        <div class="div-titulo">

            <h1 class="h1"><span>H</span>enry <span>F</span>reitas <span>B</span>urgardt</h1>
            <h2>Analista e Desenvolvedor de Sistemas</h2>

            <p class="p">
                Olá, que bom ter você aqui! Seja bem vindo!
            </p>

            <button class="botao">Entre em contato!</button>

        </div>

        <div class="div-img">

            <img class="logo" src="./assets/logo-site.png" alt="logo-site">

        </div>

        `
    }
    

}

function mostrar(type) {

    if (type === 'contato') {
        formulario.style.left = "50%"
        formulario.style.transform = "translateX(-50%)"
        mascara.style.visibility = "visible"
    }

}
function esconder(type) {
    if (type === 'esconder') {

        formulario.style.left = "-440px"
        formulario.style.transform = "translateX(0%)"
        mascara.style.visibility = "hidden"
    }
}
