const userTitleRef = document.querySelector("#userTitle")
const userUrlRef = document.querySelector("#userUrlImage")
const userDescriptionRef = document.querySelector("#userDescription")
const registerButtonRef = document.querySelector("#registerButton")

console.log(userTitleRef)
console.log(userUrlRef)
console.log(userDescriptionRef)
console.log(registerButtonRef)


var userDate = {
  title: '',
  description: '',
  urlImagem: ''
};

function validarTitle(titulo) {
    userDate.title = titulo;
}

function validarDescription(descricao) {
    userDate.description = descricao;
}

function validarUrl(urlImage) {
    userDate.urlImagem = urlImage;
}

userTitleRef.addEventListener("keyup", (event) => 
    // console.log('title-habilitada')
    validarTitle(event.target.value)
);

userDescriptionRef.addEventListener("keyup", (event) =>
    console.log('description-habilitada')
//   validarDescription(event.target.value)
);

userUrlRef.addEventListener("keyup", (event) =>
    console.log('url-habilitada')
    // validarUrl(event.target.value)
);

registerButtonRef.addEventListener("click", (event) => 
    console.log('botao-habilitado')
    // cadastrar(event)
);



// function validarEmail(email) {

//   if(email===""){
//  loginButtonREf.ariaDisabled = true;
   
//   } else {
//     userDate.email = email
//     loginButtonREf.ariaDisabled = false;
//   }
  
//   userDate.email = email;
//   //console.log(email); 
//   // console.log(userEmailRef.value)
// }

// function login(event) {
//   event.preventDeFault();
//   console.log(userDate);
// }






// for (let felino of felinos) {
//   containertRef.innerHTML += `
//       <div class="item">
//           <img src="${felino.imagem}"/>
//           <h2>${felino.titulo}</h2>
//           <p>${felino.descricao}
//           </p>
//       </div>`;
// }
