const baseAPI = 'https://todo-api.ctd.academy/v1';
const tokenValidado = localStorage.getItem('tokenValidado')

// Gravar conteúdo do formulario
const finalizarSessaoRef = document.querySelector('#finalizarSessao');
const novaTarefaRef = document.querySelector('#novaTarefa');
const buttonNovaTarefaRef = document.querySelector('#buttonNovaTarefa');
const tarefasPendentesRef = document.querySelector('#tarefasPendentes');
const tarefasTerminadasRef = document.querySelector('#tarefasTerminadas');
const nomeUsuarioRef = document.querySelector('#nomeUsuario');

// Array vazio para realizar o split de tarefas (jogar para pendente e terminada)
var tarefasPendentes  = [];
var tarefasTerminadas = [];

// Headers padrão para as chamadas de API
const requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': tokenValidado
}

// Remover usuário e apagar o localStorage
function logout() {

    window.location.href = './index.html'
    localStorage.clear()
    
}

// Chamar os dados de cadastro do usuário + dupla validação caso o status retorne 401 
function getUserData() {

    var requestConfig = {
        method: 'GET',
        headers: requestHeaders
    }

    fetch(`${baseAPI}/users/getMe`, requestConfig)
        .then(
            response => {

                if (response.ok) {
                    response.json().then(
                        data => {
                            nomeDinamico(data)
                            getTasks()
                        }
                    )
                } else {
                    
                    if(response.status === 401) {
                        logout()
                    }
                }
                
            }
        )

}

function nomeDinamico(data) {

    nomeUsuarioRef.innerHTML = `${data.firstName} ${data.lastName} `;

}

// Validar o jwt do usuário
function checkToken() {

    if(tokenValidado === null) {
        logout()
    } else {
        getUserData()
    }

}

checkToken()

// Criar tarefa
function createTask(taskData) {

    var requestConfig = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(taskData)
    }

    fetch(`${baseAPI}/tasks`, requestConfig).then(
        response => {
            if(response.ok) {
                response.json().then(
                    data => {
                        getTasks();
                    }
                )
            }
        }
    )

}

// Chamar tarefas do usuário
function getTasks() {

    var requestConfig = {
        method: 'GET',
        headers: requestHeaders
    }

    fetch(`${baseAPI}/tasks`, requestConfig).then(
        response => {
            if(response.ok) {
                response.json().then(
                        tasks => {
                            resetSplit()
                            splitTarefas(tasks);
                        }
                    )
                }
            }
        )

}

function resetSplit() {

    tarefasPendentes  = [];
    tarefasTerminadas = [];

}

// Dividir array entre tarefas para alterar e tarefas terminadas
function splitTarefas(tasks) {
   
    tasks.map(
        task => {
    
            if(task.completed) {

                tarefasTerminadas.push(task)

            } else {

                tarefasPendentes.push(task)

            }
        }
    )

    inserirTarefasHTML();

}

// Alterar tarefa
function putTasks(tarefaAlterar) {
    
    const dataTarefa = {
        description: tarefaAlterar.description.value,
        completed: true
    }
    
    var requestConfig = {
        method: 'PUT',
        headers: requestHeaders,
        body: JSON.stringify(dataTarefa)
    }

    fetch(`${baseAPI}/tasks/${tarefaAlterar.id}`, requestConfig).then(
        response => {
            if(response.ok) {
                response.json().then(
                        tasks => {
                            getTasks()
                        }
                    )
                }
            }
        )

}

// Excluir tarefa
function deleteTasks(tarefaDeletar) {
      
    var requestConfig = {
        method: 'DELETE',
        headers: requestHeaders,
    }

    fetch(`${baseAPI}/tasks/${tarefaDeletar.id}`, requestConfig).then(
        response => {
            if(response.ok) {
                response.json().then(
                        tasks => {
                            console.log(tasks);
                            getTasks()
                        }
                    )
                }
            }
        )

}

// Resultado split para excluir
function excluirTarefa(tarefaTerminada) {

    let tarefaDeletar = tarefaTerminada;
    deleteTasks(tarefaDeletar);
    alert('Tarefa excluida');

}

// Resultado split para alterar
function terminarTarefa(tarefaPendente) {
 
    let tarefaAlterar = tarefaPendente;
    putTasks(tarefaAlterar);

}

// Ouvir os botões das tarefas e separar por pendente e terminada
function addEventListenersToButtons() {

    const itemsPendentes = Array.from(tarefasPendentesRef.children)

    itemsPendentes.map(
        (item, index) => {

            const buttonRef = item.children[0];
            const arrayAtualPendente = tarefasPendentes[index]

            buttonRef.addEventListener('click', () => terminarTarefa(arrayAtualPendente, index));

        }
    )

    const itemsTerminados = Array.from(tarefasTerminadasRef.children)

    itemsTerminados.map(
        (item, index) => {

            const buttonRef = item.children[0];
            const arrayAtualTerminada = tarefasTerminadas[index]

            buttonRef.addEventListener('click', () => excluirTarefa(arrayAtualTerminada, index));

        }
    )

}

// Criar HTML
function inserirTarefasHTML() {
    
    tarefasPendentesRef.innerHTML = '';
    tarefasTerminadasRef.innerHTML = '';

    tarefasPendentes.map(
        tarefa => {

            const transformarData = new Date(tarefa.createdAt)
            const dataFormatada = new Intl.DateTimeFormat('pt-BR').format(transformarData)
            
            tarefasPendentesRef.innerHTML += `
            <li class="tarefa">
                <div class="not-done"></div>
                <div class="descricao">
                    <p class="nome">${tarefa.description}</p>
                    <p class="timestamp">Criada em: ${dataFormatada}</p>
                </div>
            </li>
            `;
        }
    )

    tarefasTerminadas.map(
        tarefa => {

            const transformarData = new Date(tarefa.createdAt)
            const dataFormatada = new Intl.DateTimeFormat('pt-BR').format(transformarData)

            tarefasTerminadasRef.innerHTML += `
            <li class="tarefa">
                <div class="not-done"></div>
                <div class="descricao">
                    <p class="nome">${tarefa.description}</p>
                    <p class="timestamp">Criada em: ${dataFormatada}</p>
                </div>
            </li>
            `; 
        }
    )

    addEventListenersToButtons()

}

function resetTarefa() {
    novaTarefaRef.value = '';
}

// Status de erro do formulário
var formErrors = {
    novaTarefa: true,   
}

// Checar se está tudo OK para habilitar o botão de enviar
function checkFormValidity() {

    const formErrorsArray = Object.values(formErrors)
    const formValidity = formErrorsArray.every(item => item === false)

    buttonNovaTarefaRef.disabled = !formValidity

}

function validarNovaTarefa(inputNovaTarefaRef) {

    const inputValidado = inputNovaTarefaRef.checkValidity()
    const form = inputNovaTarefaRef.parentElement
    
    if(inputValidado) {

        form.classList.remove('error')
        
    } else {

        form.classList.add('error')

    }

    formErrors[inputNovaTarefaRef.id] = !inputValidado
    
    checkFormValidity()

}

function addNovaTarefa(event) {
    
    event.preventDefault()

    const taskData = {
        description: novaTarefaRef.value,
        completed: false
    }
    
    createTask(taskData);
    resetTarefa();
    buttonNovaTarefaRef.setAttribute("disabled", "disabled");

}

novaTarefaRef.addEventListener('keyup', () => validarNovaTarefa(novaTarefaRef));
buttonNovaTarefaRef.addEventListener('click', (event) => addNovaTarefa(event));
finalizarSessaoRef.addEventListener('click', () => logout());