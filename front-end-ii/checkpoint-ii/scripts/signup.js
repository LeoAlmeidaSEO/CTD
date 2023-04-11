window.addEventListener('load', () => console.log('carregou cadastro'));
const baseAPI = 'https://todo-api.ctd.academy/v1';

// Gravar conteúdo do formulario
const inputNomeRef = document.querySelector('#inputNome');
const inputSobrenomeRef = document.querySelector('#inputSobrenome');
const inputEmailRef = document.querySelector('#inputEmail');
const inputSenhaRef = document.querySelector('#inputSenha');
const inputRepetirSenhaRef = document.querySelector('#inputRepetirSenha');
const loginButtonRef = document.querySelector('#loginButton');

// Status de erro do formulário
var formErrors = {

    inputNome: true,
    inputSobrenome: true,
    inputEmail: true,
    inputSenha: true,
    inputRepetirSenha: true
    
}

// Checar se está tudo OK para habilitar o botão de enviar
function checkFormValidity() {

    const formErrorsArray = Object.values(formErrors)
    const formValidity = formErrorsArray.every(item => item === false)

    loginButtonRef.disabled = !formValidity

}

// Validação dos inputs
// Acrescentar ou remover css de error
function validarInput(inputRef) {
    
    const inputValidado = inputRef.checkValidity()
    const campo = inputRef.parentElement

    if(inputValidado) {

        campo.classList.remove('error')
        
    } else {

        campo.classList.add('error')

    }

    formErrors[inputRef.id] = !inputValidado
    
    checkFormValidity()

}

// Apagar os campos do formulário depois de preenchido
function resetForm() {

    inputNomeRef.value = '';
    inputSobrenomeRef.value = '';
    inputEmailRef.value = '';
    inputSenhaRef.value = '';
    inputRepetirSenhaRef.value = '';

}

// Realizar o login
// Gravar conteúdo no objeto
function login(event) {

    event.preventDefault()

    var userData = {
        firstName: inputNomeRef.value,
        lastName: inputSobrenomeRef.value,
        email: inputEmailRef.value,
        password: inputSenhaRef.value
    }

    console.log(userData);
    chamarAPI(userData);
    resetForm();   
      
}

//API
//JWT teste ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxlb0B0ZXN0ZSIsImlkIjo5ODksImlhdCI6MTY4MDY2MTM5NH0.hCfA0awYogWDbI5KLzuR2RgpultVfZRTHdiFkwTIVzE")

function chamarAPI(userData) {

    const requestHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    var requestConfig = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(userData)
    }

    fetch(`${baseAPI}/users`, requestConfig)
        .then(response => {

            if(response.ok) {

                alert('Você foi cadastrado com sucesso')
                window.location.href = './tarefas.html';

            } else {

                alert('O usuário ja foi cadastrado')

            }
        }
    )

}

// Escutar interação do usuário para validação
inputNomeRef.addEventListener('keyup', () => validarInput(inputNomeRef))
inputSobrenomeRef.addEventListener('keyup', () => validarInput(inputSobrenomeRef))
inputEmailRef.addEventListener('keyup', () => validarInput(inputEmailRef))
inputSenhaRef.addEventListener('keyup', () => validarInput(inputSenhaRef))
inputRepetirSenhaRef.addEventListener('keyup', () => validarInput(inputRepetirSenhaRef))
loginButtonRef.addEventListener('click', (event) => login(event));