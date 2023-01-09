class ValidacoesJS {
  


    // constructor() {
    //     this.validacoes = [];
    // } 
    
    buscarRG = () => {
      document.getElementById("buscar").addEventListener("click", function(event){
        let pcep = document.getElementById('CEP');
      console.log('teste')

        //Nova letiável "cep" somente com dígitos.
        let cep = $("#cadastroCEP").val().replace(/\D/g, '');
    
        //Verifica se campo cep possui valor informado.
        if (cep != "") {
    
            //Expressão regular para validar o CEP.
            let validacep = /^[0-9]{8}$/;
    
            //Valida o formato do CEP.
            if(validacep.test(cep)) {
    
             //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/", function(dados) {
             
                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#cadastroRua").val(dados.logradouro);
                        $("#cadastroBairro").val(dados.bairro);
                        $("#cadastroCidade").val(dados.localidade);
                        $("#cadastroEstado").val(dados.uf);
                        $("#cadastroComplemento").val(dados.complemento);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        pcep.innerHTML = "CEP não encontrado";
                        pcep.style.color = "red";
                    }
                });
            } //end if.
            else {
              pcep.innerHTML = "CEP Inválido";
              pcep.style.color = "red";
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
            let cep = document.getElementById('cadastroCEP').value;
            let pcep = document.getElementById('CEP');
            let estado = document.getElementById('cadastroEstado').value;
            let pEstado = document.getElementById('Estado');
            let cidade = document.getElementById('cadastroCidade').value;
            let pCidade = document.getElementById('Cidade');
            let bairro = document.getElementById('cadastroBairro').value;
            let pBairro = document.getElementById('Bairro');
            let rua = document.getElementById('cadastroRua').value;
            let pRua = document.getElementById('Numero');
            let complemento = document.getElementById('cadastroComplemento').value;
            let pcomplemento = document.getElementById('Complemento');
           
            
           console.log('nome:',nome)
           console.log('email:',email)
           console.log('senha:',senha)
           console.log('senha2:',senha2)

             if (nome === "") {
              pnome.innerText = " * Campo NOME Vazio, preencha correctamente";
              pnome.style.color  = "red";
              
             } else{
              pnome.innerText = ""
             }
             if(nome.length  > 1 && nome.length < 3){
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
                else{
                  psenha.innerText = ""
                 }
                
                if(senha.length <1 || senha.length < 6){
                 psenha.innerText = " * Senha precisa ser maior ou igual a 6 caracteres";
                 psenha.style.color  = "red";
                 
                }
                //confirm senha
                if (senha2 == "") {
                 psenha2.innerText = " * Campo SENHA Vazio, preencha correctamente";
                 psenha2.style.color  = "red";
                } 
                else{
                  psenha2.innerText = ""
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
                else{
                  pRG.innerText = ""
                 }
                if(rg.length > 1 && rg.length < 7){
                 pRG.innerText = " * RG inválido ";
                 pRG.style.color  = "red";
                 
                }
                //cep
                if (cep == "") {
                 pcep.innerText = " * Campo CEP Vazio, preencha correctamente";
                 pcep.style.color  = "red";
                }  else{
                  pcep.innerText = ""
                 }
                
                if (estado == "") {
                 pEstado.innerText = " * Campo ESTADO Vazio, preencha correctamente";
                 pEstado.style.color  = "red";
                } 
                else{
                  pEstado.innerText = ""
                 }
                if (cidade == "") {
                 pCidade.innerText = " * Campo CIDADE Vazio, preencha correctamente";
                 pCidade.style.color  = "red";
                
                } else{
                  pCidade.innerText = ""
                 }
                
                if (bairro == "") {
                 pBairro.innerText = " * Campo BAIRRO Vazio, preencha correctamente";
                 pBairro.style.color  = "red";
                }
                else{
                  pBairro.innerText = ""
                 } 
                if (rua == "") {
                 pRua.innerText = " * Campo RUA, preencha correctamente";
                 pRua.style.color  = "red";
                }
                else{
                  pRua.innerText = ""
                 } 
                if (complemento == "") {
                 pcomplemento.innerText = " * Campo COMPLEMENTO Vazio, preencha correctamente";
                 pcomplemento.style.color  = "red";
                }else{
                  pcomplemento.innerText = ""
                  Swal.fire({
                    type: 'success',
                    title: 'Excelente',
                    text: 'Cadastro realizado com sucesso',
                    showConfirmButton: false,
                    timer: 2000
                  })
                //swal("Excelente!", "Cadastro realizado com sucesso", "success");
                let url = "planos.html";
                setTimeout(function(){
                    location = url;
                },2000)
                }
          
           //nome
           

               
 
           
           
           
            event.preventDefault()
          });
          
       



       
    }
    
    envioEmail = () =>{
      
      document.getElementById("enviar").addEventListener("click", function(event){
        let email = document.getElementById("emailRec").value
        let pemail = document.getElementById("pemail")
        if(email == ""){
          pemail.innerText = " * Campo Email Vazio";
          pemail.style.color  = "red";
        }else{
          Email.send({
            Host: "smtp.gmail.com",
            Username: `${email}`,
            Password: "Enter your password",
            To: email,
            From: "daniella.silqueiroz@gmail.com",
            Subject: "Sending Email using javascript",
            Body: "Well that was easy!!",
            Attachments: [
              {
                name: "File_Name_with_Extension",
                path: "Full Path of the file"
              }]
            })
            .then(function () {
              window.location.href = "mensagemEmail.html";
            });
          }
          
            event.preventDefault()
          });

    }

    login = () => {
      document.getElementById("entrar").addEventListener("click", function(event){
        let emailTeste = "teste@gmail.com";
        let senhaTeste = "123456";
        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;
        let pemail = document.getElementById("pemail");
        let psenha = document.getElementById("psenha");

        //email
       if(email == ""){
          pemail.innerHTML ="Email  Vazio"
          pemail.style.color  = "red";
        }else if(email != emailTeste ){
          pemail.innerHTML ="Usuário inválido"
          pemail.style.color  = "red";
        }
        else{
          pemail.innerHTML =""
        }
        //senha
        if(senha == "" ){
          psenha.innerHTML ="Senha Vazia"
          psenha.style.color  = "red";
        }else if(senha !== senhaTeste ){
          psenha.innerHTML ="Senha inválida"
          psenha.style.color  = "red";
        }
        else{
          psenha.innerHTML =""
        }
        if(email == emailTeste &&senha == senhaTeste){
          Swal.fire({
            type: 'success',
            title: 'logando..',
            text: 'Redirecionando...',
            showConfirmButton: false,
            timer: 3000
          })
        //swal("Excelente!", "Cadastro realizado com sucesso", "success");
        let url = "premium.html";
        setTimeout(function(){
            location = url;
        },3000)

        }
       
        event.preventDefault()
      });
    }



}