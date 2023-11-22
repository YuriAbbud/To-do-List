var conteudo = document.querySelector('.content-items')

var taskButton = document.getElementById('contentTasks')
var calendarButton = document.getElementById('contentCalendar')
var todayButton = document.getElementById('contentToday')

taskButton.addEventListener('click', definirConteudoTarefas)
calendarButton.addEventListener('click', definirConteudoCalendario)
todayButton.addEventListener('click', definirConteudoHoje)

var conteudoDefinido;

function definirConteudoTarefas() {
    conteudoDefinido = 'tarefas';
    mostrarConteudo();
}
function definirConteudoCalendario() {
    conteudoDefinido = 'calendario';
    mostrarConteudo();
}
function definirConteudoHoje() {
    conteudoDefinido = 'hoje';
    mostrarConteudo();
}

function mostrarConteudo() {
    switch (conteudoDefinido) {
        case 'tarefas':
            //
        break;
        case 'calendario':
            //
        break;
        case 'hoje':
            //
        break;
        default:
            break;
    }
}
