const form = document.getElementById("form");
const mensagem = document.getElementById("mensagem");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const idade = document.getElementById("idade");
const redeTrabalho = document.getElementById("redeTrabalho");
const idEscola = document.getElementById("escola");
const diretorEscola = document.getElementById("diretorEscola");
const segmentoAtuacao = document.getElementById("segmentoAtuacao");
const cargo = document.getElementById("cargo");

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(checkInputs());
    if (checkInputs()) {
       e.target.submit();
       
    }
 })

function checkInputs() {
    const nomeValue = nome.value;
    const emailValue = email.value;
    const idadeValue = idade.value;
    const redeTrabalhoValue = redeTrabalho.value;
    const idEscolaValue = idEscola.value;
    const diretorEscolaValue = diretorEscola.value;
    const segmentoAtuacaoValue = segmentoAtuacao.value;
    const cargoValue = cargo.value;

    let status = true;

    if (nomeValue === '') {
        setErrorFor(nome, "O nome precisa ser informado");
        status = false;
    } else if (nomeValue.length < 5){ 
        setErrorFor(nome, "O nome precisa conter no mínimo 5 caracteres");
        status = false;
    } 
    else {
        setSuccessFor(nome)        
    }

    if (emailValue === '') {
        setErrorFor(email, "O email precisa ser informado");
        status = false;
    } else if (!checkEmail(emailValue)){ 
        setErrorFor(email, "Informe um email válido");
        status = false;
    } 
    else {
        setSuccessFor(email)        
    }

    if (idadeValue === '') {
        setErrorFor(idade, "A idade precisa ser informada");
        status = false;
        } else if (idadeValue.length < 2){ 
            setErrorFor(idade, "A idade precisa conter no mínimo 2 caracteres");           
            status = false;
        } else {
            setSuccessFor(idade)        
    }

    if (redeTrabalhoValue === '') {
        setErrorFor(redeTrabalho, "A rede em que trabalha precisa ser informada");
        status = false;
    } else {
        setSuccessFor(redeTrabalho)        
    }
    
    if (idEscolaValue != diretorEscolaValue) {
        status = false;
        setErrorForSubmit()
    } else {
        setSuccessForSubmit()      
        setSuccessFor(idEscola)  
        setSuccessFor(diretorEscola)  
    }
    
    if (segmentoAtuacaoValue === '') {
        setErrorFor(segmentoAtuacao, "O segmento de atuação precisa ser informado");
        status = false;
    } else {
        setSuccessFor(segmentoAtuacao)        
    }
    
    if (cargoValue === '') {
        setErrorFor(cargo, "O cargo precisa ser informado");
        status = false;
    } else {
        setSuccessFor(cargo)        
    }

    const formConstrols = form.querySelectorAll('.form-control')
    const formIsValid = [...formConstrols].every( (formControl) => {
        return (formControl.className === "form-control success");
    });
    return status;
  
}



function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form-control error";
}

function setErrorForSubmit() {
    mensagem.className = "form-status error";
}

function setSuccessForSubmit() {
    mensagem.className = "form-status success";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  async function salvaCandidato() {
    try {
        const cadastro = {
            nome: nome.value,
            email: email.value,
            idade: idade.value,
            redeTrabalho: redeTrabalho.value,
            escola: idEscola.value,
            segmentoAtuacao: segmentoAtuacao.value,
            cargo: cargo.value
        }
        console.log(cadastro);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/formulario", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(cadastro));
                   

        // showEscolas(data);

    } catch (error) {
        console.error(error);
    }
}
// Focar no preenchimento do form e gravar em banco.
// Validar se escola e diretor são correspondentes.
// Gravar infos no banco.
// Exportação Mensal - informar a qtde de registros e ordenado pela data de inscrição (mais antigos tem prioridade) não pegar os que já tem.
// Info se o interessado já tem acesso e se já foi exportado antes.
// Evitar duplicidade de cadastro. (utilizar o email) - determinar prazo de 12 meses para novo cadastro.
// Cadastro de Escola e Diretor.