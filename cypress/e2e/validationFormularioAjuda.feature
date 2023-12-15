# language: pt

Funcionalidade: Formulário Ajuda
Contexto: Accesar pagina de Ajuda 
Dado estou no formulário de ajuda

    Cenario: validacao dos campos          
        Então validar Name 
        E validar Email
        E validar Company
        E validar Website
        E validar Phone
        E validar Inquiry   
             

    Cenario: Enviar formulario com sucesso 
        Quando preencher todos os campos  
        E fazer o submit do formulario  
        Então a API deve retornar HTTP_CODE 200 
        E não deve haver mensagens de erro no frontend


    Cenario: Enviar formulario com erro
        Quando preencher todos os campos em formato invalido 
        E fazer o submit do formulario  
        Então a API deve retornar HTTP_CODE 412 
        E deve haver mensagens de erro no frontend
        







    



