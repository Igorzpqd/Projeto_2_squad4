class ValidacoesJS {


    // constructor() {
    //     this.validacoes = [];
    // } 

    validateForm = () =>{
        let pnome = document.getElementById('Pnome');
        let nome = document.forms["formCadastro"]["cadastroNome"].value;
        if (nome == "" && nome.length < 2) {
            
           
            let pname = pnome.innerText = "teste";
            console.log(pname)
            

         
          
          
        }
    }



}