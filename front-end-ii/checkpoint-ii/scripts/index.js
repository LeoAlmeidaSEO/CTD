window.addEventListener('load', () => console.log('carregou index'));
const baseAPI = 'https://todo-api.ctd.academy/v1';


// Gravar conteúdo do formulario
const inputEmailRef = document.querySelector('#inputEmail');
const inputPasswordRef = document.querySelector('#inputPassword');
const loginButtonRef = document.querySelector('#loginButton');

// Status de erro do formulário
var formErrors = {
    inputEmail: true,
    inputPassword: true
}

// Checar se está tudo OK para habilitar o botão de enviar
function checkFormValidity() {  
    const formErrorsArray = Object.values(formErrors)
    const formValidity = formErrorsArray.every(item => item === false)

    // console.log(formErrors)
    // console.log(formValidity)

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
    
    // console.log(formErrors);
    checkFormValidity()

}

// Apagar os campos do formulário depois de preenchido
function resetForm() {

    inputEmailRef.value = '';
    inputPasswordRef.value = '';

}

// Realizar o login
// Gravar conteúdo no objeto
function login(event) {

    event.preventDefault()

    var userLoginData = {
        email: inputEmailRef.value,
        password: inputPasswordRef.value
    }

    chamarAPILogin(userLoginData)
    console.log(userLoginData);
    resetForm();
    
      
}

// Escutar interação do usuário para validação
inputEmailRef.addEventListener('keyup', () => validarInput(inputEmailRef))
inputEmailRef.addEventListener('blur', () => validarInput(inputEmailRef))
inputPasswordRef.addEventListener('keyup', () => validarInput(inputPasswordRef))
inputPasswordRef.addEventListener('blur', () => validarInput(inputPasswordRef))
loginButtonRef.addEventListener('click', (event) => login(event));

function chamarAPILogin(userLoginData) {

    const requestHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    var requestConfig = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(userLoginData)
    }

    fetch(`${baseAPI}/users/login`, requestConfig)
        .then(response => {
            if(response.ok) {
                response.json().then(
                    token => {
                        localStorage.setItem('tokenValidado', token.jwt)
                        window.location.href = "./tarefas.html"
                        alert('Acesso liberado')
                    }
                )
            } else {

                alert('O seu usuário ou senha está incorreta')

            }
        }
    )

}