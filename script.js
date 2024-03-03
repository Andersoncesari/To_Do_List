const button = document.querySelector('.button-add') //queryselector serve para pegar um elemento no HTML
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-task')

let listadeitens = []

function adicionarvalor() {
    listadeitens.push({
        tarefa: input.value,
        concluido: false
    })

    input.value = ''

    mostrartarefas()
}

function mostrartarefas() {
    let novali = ''

    listadeitens.forEach((item , index) => {
        novali = novali + `
    
    <li class="task ${item.concluido && "done"}">
        <img  src="./img/checked.png" alt="icone de checked" onclick= "concluirtarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="icone da lixeira" onclick= "deletaritem(${index})">
    </li>
    `
    })

    listacompleta.innerHTML = novali

    localStorage.setItem('lista' , JSON.stringify(listadeitens))
}

function concluirtarefa(index){
    listadeitens[index].concluido = !listadeitens[index].concluido

    mostrartarefas()
}

function deletaritem(index){
    listadeitens.splice(index , 1)
    mostrartarefas()
    
}

function recarregartarefas(){
        const localstorage = localStorage.getItem('lista')
        listadeitens = JSON.parse (localstorage)
        mostrartarefas()
        console.log(localstorage)
}










recarregartarefas()
button.addEventListener('click', adicionarvalor)//addEventListener vai avisar quando houver um evento