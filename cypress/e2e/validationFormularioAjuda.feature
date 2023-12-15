# language: pt

Funcionalidade: Formulário Ajuda
Contexto: Accesar pagina de Ajuda 
Dado estou no formulário de ajuda

    Cenário:Preencher e enviar o campo "Name" que deve aceitar letras, espaços e números e limite máximo de 255 caracteres
           
        Quando  preencher o campo Name com "John Doe 123"
        E O campo Name deve aceitar o limite máximo de 255 caracteres 
        Então a API deve retornar HTTP_CODE 200 
        E não deve haver mensagens de erro no frontend
        E Verificar se o elemento de erro existe no frontend

            
    Cenario:Preencher e enviar o campo "Email" que deve aceitar a entrada de dados no formato de e-mail com limite máximo de 150 char.      
        
        Quando preencher o campo Email com "usuario@example.com"  
        E O campo Email deve aceitar o limite máximo de 150 caracteres      
        Então a API deve retornar HTTP_CODE 200 
        E não deve haver mensagens de erro no frontend
        E Verificar se o elemento de erro existe no frontend


    Cenario:Preencher e enviar o  campo "Company" que deve aceitar letras, espaços e números com imite máximo de 200 char.
                   
        Quando preencher o campo Company com "12345678901234567890123456789012aAU456789  0123456789012345678901234567890123456789012345678901234567890123467890123456 789012345XYZ 67890123456789012345678901234567QA890123456789012345678901234567890"        
        E O campo Company deve aceitar o limite máximo de 200 caracteres
        Então a API deve retornar HTTP_CODE 200 
        E não deve haver mensagens de erro no frontend
        E Verificar se o elemento de erro existe no frontend


    Cenario:Preencher e enviar o  campo "Website" que deve , que deve aceitar a entrada de dados no formato de URL e limite máximo de 200 char
           
        Quando preencher o campo Website com "http://www.ejemplo.com"
        E O campo Website deve aceitar o limite máximo de 200 caracteres           
        Então a API deve retornar HTTP_CODE 200 
        E não deve haver mensagens de erro no frontend
        E Verificar se o elemento de erro existe no frontend


     Cenario:Preencher e enviar o  campo "Inquiry" que deve aceitar a entrada de dados que deve aceitar letras,espaços e números com limite máximo de 500 char
       
        Quando preencher o campo Inquiry com "Texto de teste 123" 
        E O campo Inquiry deve aceitar o limite máximo de 500 caracteres    
        Então a API deve retornar HTTP_CODE 200 
        E não deve haver mensagens de erro no frontend
        E Verificar se o elemento de erro existe no frontend




    



