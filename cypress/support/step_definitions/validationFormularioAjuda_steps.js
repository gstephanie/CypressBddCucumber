import {When, Then } from "@badeball/cypress-cucumber-preprocessor"

// 1. Cenario: validacao dos campos  
Then('validar Name', () => {
    const allowedCharactersRegex = /^[a-zA-Z0-9\s]+$/
    cy.get('#Name').type('abc123')    
    cy.get('#Name').should('have.value', 'abc123')    
    cy.get('#Name').type('!@#$%&*')    
    cy.get('#Name').invoke('val').then((value) => {
        const isValid = allowedCharactersRegex.test(value)
        expect(isValid).to.be.false 
    })
    cy.get("#Name").should("have.attr", "maxlength", String(255));
})

When('validar Email,', () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
    cy.get('#Email').type('meuteste@gmail.com')   
    cy.get('#Email').invoke('val')
      .then((value) => {
        expect(emailRegex.test(value)).to.be.true 
      })  
    cy.get('#Email').type('email_invalido')   
    cy.get('#Email').invoke('val').then((value) => {
        expect(emailRegex.test(value)).to.be.false 
      })
    cy.get("#Email").should("have.attr", "maxlength", String(150));
})

When('validar Company', () => {
    const allowedCharactersRegex = /^[a-zA-Z0-9\s]+$/
    cy.get('#Company').type('abc123')    
    cy.get('#Company').should('have.value', 'abc123')    
    cy.get('#Company').type('!@#$%&*')    
    cy.get('#Company').invoke('val').then((value) => {
        const isValid = allowedCharactersRegex.test(value)
        expect(isValid).to.be.false 
    })
    cy.get("#Company").should("have.attr", "maxlength", String(200));
})

When('validar Website', () => {
 const urlRegex = /^(http|https):\/\/[^\s$.?#].[^\s]*$/;
  cy.get('#Website').type('https://www.pagbrasil.com')  
  cy.get('#Website').invoke('val').then((value) => {
      expect(urlRegex.test(value)).to.be.true 
  })
  cy.get('#Website').type('url_inválida')
  cy.get('#Website').invoke('val').then((value) => {
      expect(urlRegex.test(value)).to.be.false 
  })
  cy.get("#Website").should("have.attr", "maxlength", String(200));
})

When('validar Phone', () => {
    const phoneRegex = /^([1-9]{2}) 9?[6-9]{1}[0-9]{3}-[0-9]{4}$/ // Expressão regular para validar telefone com máscara
  cy.get('#Phone').type('(12) 93456-7890')
  cy.get('#Phone').invoke('val').then((value) => {
      const phone = value.replace(/\D/g, '') 
      expect(phoneRegex.test(phone)).to.be.true
    })
  cy.get('#Phone').type('1234567890')
  cy.get('#Phone').invoke('val').then((value) => {
      const phone = value.replace(/\D/g, '') 
      expect(phoneRegex.test(phone)).to.be.false 
    })
    cy.get("#Phone").should("have.attr", "maxlength", String(15));
})

Then('validar Inquiry', () => {
    const allowedCharactersRegex = /^[a-zA-Z0-9\s]+$/
    cy.get('#Inquiry').type('abc123')    
    cy.get('#Inquiry').should('have.value', 'abc123')    
    cy.get('#Inquiry').type('!@#$%&*')    
    cy.get('#Inquiry').invoke('val').then((value) => {
        const isValid = allowedCharactersRegex.test(value)
        expect(isValid).to.be.false 
    })
    cy.get("#Inquiry").should("have.attr", "maxlength", String(500));
})

//2. Cenario: Enviar formulario com sucesso 
When('preencher todos os campos', () => {    
    cy.get("#Name").type("Stephane Malo");
    cy.get("#Email").type("meuteste@gmail.com");
    cy.get("#Company").type("PgBrasil");
    cy.get("#Website").type("https://www.pagbrasil.com");
    cy.get("#Phone").type("(11) 11111-1111");
    cy.get("#Inquiry").type("Estou realizando um teste neste input, deve aceitar meus char com sucesso");    
})

Then('fazer o submit do formulario', () => {
    // enviar o formulário
    cy.get("button").click()
})

Then('a API deve retornar HTTP_CODE 200', () => {
    // Verificar a resposta do backend usando cy.intercept

    cy.intercept("POST", "*").as("post");    
    cy.wait("@post").then((intercept) => {        
        const { statusCode, body } = intercept.response;
        expect(statusCode).to.eq(200);
        expect(body.sucesso).to.be.true;
      });
})

Then('não deve haver mensagens de erro no frontend', () => {
    // Verificar se o elemento de erro não existe no frontend
    cy.get('#Error').should('not.exist')
})


//3. Cenario: Enviar formulario com erro 
When('preencher todos os campos em formato invalido', () => {
    
    cy.get("#Name").type("Stephane Malo");
    cy.get("#Email").type("meuteste@gmail.com");
    cy.get("#Company").type("PgBrasil");
    cy.get("#Website").type("https://www.pagbrasil.com");
    cy.get("#Phone").type("(11) 11111"); // Enviando Telefone invalido 
    cy.get("#Inquiry").type("Estou realizando um teste neste input, deve aceitar meus char com sucesso");    
})

Then('a API deve retornar HTTP_CODE 412', () => {
    // Verificar a resposta do backend usando cy.intercept
    cy.intercept("POST", "*").as("post");
    
    cy.wait("@post").then((intercept) => {
        const { statusCode, body } = intercept.response;
        expect(statusCode).to.eq(412);
        expect(body.sucesso).to.be.false;
        expect(body.erro).to.eq("Campo Phone inválido");
         
      });
})

Then('deve haver mensagens de erro no frontend', () => {
    // Verificar se o elemento de erro existe no frontend   
    const error = cy.get("#Error");
    expect(error).to.exist;
    error.should("have.text", "Campo Phone inválido");
})


     

