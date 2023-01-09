class ValidacoesJS {


    // constructor() {
    //     this.validacoes = [];
    // } 
    
    buscarRG = () => {
      document.getElementById("buscar").addEventListener("click", function(event){
      console.log('teste')

        //Nova variável "cep" somente com dígitos.
        var cep = $("#cadastroCEP").val().replace(/\D/g, '');
    
        //Verifica se campo cep possui valor informado.
        if (cep != "") {
    
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
    
            //Valida o formato do CEP.
            if(validacep.test(cep)) {
    
             //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/", function(dados) {
             
                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#cadastroRua").val(dados.logradouro+","+dados.complemento);
                        $("#cadastroBairro").val(dados.bairro);
                        $("#cadastroCidade").val(dados.localidade);
                        $("#cadastroEstado").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        console.log("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                console.log("Formato de CEP inválido.");
            }
            
        } //end if.
        event.preventDefault()
          });
      }

        cadastro = () => {
        
        document.getElementById("submit1").addEventListener("click", function(event){
            let pnome = document.getElementById('Pnome');
            let nome = document.getElementById('cadastroNome').value;
            let email = document.getElementById('cadastroEmail').value;
            let pemail = document.getElementById('Pemail');
            let re = /\S+@\S+\.\S+/;
            let senha = document.getElementById('cadastroSenha').value;
            let psenha = document.getElementById('Senha');
            let senha2 = document.getElementById('cadastroSenha2').value;
            let psenha2 = document.getElementById('Senha2');
            let rg = document.getElementById('cadastroRG').value;
            let pRG = document.getElementById('RG');
            
           console.log('nome:',nome)
           console.log('email:',email)
           console.log('senha:',senha)
           console.log('senha2:',senha2)
           //nome
            if (nome == "") {
             pnome.innerText = " * Campo NOME Vazio, preencha correctamente";
             pnome.style.color  = "red";
            
            } 
            if(nome.length < 3){
             pnome.innerText = " * Nome precisa ser maior que 2 caracteres";
             pnome.style.color  = "red";
            }
            //email
            if(re.test(email) === false){
                pemail.innerText = " * Campo Email Inválido, preencha correctamente";
                pemail.style.color  = "red";
            
              }
              if (email == "") {
                pemail.innerText = " * Campo Email Vazio, preencha correctamente";
                pemail.style.color  = "red";
                           
              }
              //senha
              if (senha == "") {
                psenha.innerText = " * Campo SENHA Vazio, preencha correctamente";
                psenha.style.color  = "red";
               
               } 
               if(senha.length > 1 && senha.length < 6){
                psenha.innerText = " * Senha precisa ser maior ou igual a 6 caracteres";
                psenha.style.color  = "red";
               }
               //confirm senha
               if (senha2 == "") {
                psenha2.innerText = " * Campo SENHA Vazio, preencha correctamente";
                psenha2.style.color  = "red";
               
               } 
               if(senha2 !== senha){
                psenha2.innerText = " * Senhas NÃO condizem ";
                psenha2.style.color  = "red";
               }

               //RG
               if (rg == "") {
                pRG.innerText = " * Campo RG Vazio, preencha correctamente";
                pRG.style.color  = "red";
               
               } 
               if(rg.length > 1 && rg.length < 7){
                pRG.innerText = " * RG inválido ";
                pRG.style.color  = "red";
               }

            

            event.preventDefault()
          });
       



       
    }

    login = () => {

    }

    esqueceuSenha = () => {
        
    }



}