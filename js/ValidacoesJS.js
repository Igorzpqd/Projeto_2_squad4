class ValidacoesJS {


    // constructor() {
    //     this.validacoes = [];
    // } 

    cadastro = () => {
        let pnome = document.getElementById('Pnome');
        let nome = document.forms["formCadastro"]["cadastroNome"].value;
        document.getElementById("submit1").addEventListener("click", function(event){
            if (nome == "") {
             pnome.innerText = " * Campo NOME Vazio";
             pnome.style.color  = "red";
            } 
            else if(nome.length < 2){
             pnome.innerText = " * Nome precisa ser maior que 2 caracteres";
             pnome.style.color  = "red";

            }

            event.preventDefault()
          });



       
    }

    login = () => {

    }

    esqueceuSenha = () => {
        
    }



}