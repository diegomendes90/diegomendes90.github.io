var img = window.document.getElementById('showimg')
var selecaoraca = window.document.getElementById('selecaoraca')
var cor = window.document.getElementById('colornamedog')
var namedog = window.document.getElementById('namedog')
var fontgoogle = window.document.getElementById('fontgoogle')
var ultimoacesso = window.document.getElementById('ultimoacesso')
var agora = new Date()

/*Pegar valores em localStorage*/
namedog.value = localStorage.getItem('namedog')
selecaoraca.value = localStorage.getItem('selecaoraca')
colornamedog.value = localStorage.getItem('colornamedog')
fontgoogle.value = localStorage.getItem('fontgoogle')
ultimoacesso.innerHTML = `Ultima consulta: ${localStorage.getItem('agora')}`

/*Funcão que altera classe das Tags
para pode estilizar conforme CSS*/
function editclassfontgoole() {
    fontgoogle.className = fontgoogle.value
    namedog.className = fontgoogle.value
}
/*Função para estilizar nome do DOG
após campo input:color ser alterado*/
function editcolornamedog() {
    namedog.style.color = cor.value
}
/*Função (principal) para capturar valores do usuario
e mostrar na tela junto com valores API*/
function gerarimgdog() {
    /*Consumo de API*/
    if (namedog.value=="" || fontgoogle.value=="vazio" || selecaoraca.value=="") {
        alert ("Nenhum campo pode ficar sem preenchimento")
    } else {
    fetch('https://dog.ceo/api/breed/'+ selecaoraca.value +'/images/random')
        .then(res => res.json())
        .then(data => {
            /*console.log (data.message)*/
            showbtnlocalstorage.innerHTML = `<input type="submit" onclick="salvarlocalstorage()" class="btn-style" id="btn-salvar" value="Armazenar em local Storage">`
            img.innerHTML = `
                <figure class="figuredog" style="width:280px;">
                <h1><figcaption class="${fontgoogle.value}" style="color:${cor.value}">${namedog.value}</figcaption></h1>
                <img src="${data.message}" style="width:280px;"></img>            
        </figure>    
        `
        })
    }
}
/*Salvar valores em localStorage*/
function salvarlocalstorage() {
    localStorage.setItem("selecaoraca", selecaoraca.value)
    localStorage.setItem("colornamedog", colornamedog.value)
    localStorage.setItem("namedog", namedog.value)
    localStorage.setItem("fontgoogle", fontgoogle.value)
    localStorage.setItem("agora", agora)
    
    alert('Informações salvas em localStorage com sucesso!')
    limpar()
}
/*Função para retornar aplicação ao 
estado inicial para novo preenchimento*/
function limpar() {
    selecaoraca.value = ""
    colornamedog.value = ''
    colornamedog.style.color = '#000000'
    namedog.value = ""
    namedog.style.color = "#000000"
    fontgoogle.value = ""
    showbtnlocalstorage.innerHTML = ""
    img.innerHTML = `<h1 style="text-align: center;">A imagem do seu novo Pet aparece aqui...</h1>`
}