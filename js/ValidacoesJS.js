class Validacoes {


    constructor() {
        this.validacoes = [];
    }

    validateForm = () =>{
        let nome = document.forms["formCadastro"]["nome"].value;
        if (nome == "") {
          console.log('nome vazio');
          return false;
        }
    }



}