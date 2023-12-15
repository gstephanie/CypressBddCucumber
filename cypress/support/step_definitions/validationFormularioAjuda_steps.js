import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


// 1. Cenário:Preencher e enviar o campo "Name" que deve aceitar letras, espaços e números e limite máximo de 255 caracteres
 
Given("estou no formulário de ajuda", () => {
    cy.visit("https://www.pagbrasil.com/support")
})

When('preencher o campo Name com {string}', (Name) => {
    cy.get('#formName').type(Name)    
})

When('enviar o formulário', () => {
    // enviar o formulário
    cy.get('#formName').submit()
})

Then('a API deve retornar HTTP_CODE 200 {int} com JSON:', (httpCode, json) => {
    // Verificar a resposta do backend usando cy.request
    cy.request('/sua-api-endpoint') // Substitua pelo endpoint real swagger
        .its('status')
        .should('eq', httpCode)
        .its('body')
        .should('deep.equal', JSON.parse(json))
})

Then('o campo Name deve conter uma string de 255 caracteres', () => {
     //verificar o limite permitido de char 255
    cy.get('#formName').invoke('val').should('have.length', 255);
})

Then('não deve haver mensagens de erro no frontend', () => {
    // Verificar se o elemento de erro não existe no frontend
    cy.get('#Error').should('not.exist')
})

Then('deve haver mensagens de erro no frontend indicando os campos incorretos', () => {
    // Verificar se o elemento de erro existe no frontend
    cy.get('#Error').should('exist')
})


// 2. Cenario:Preencher e enviar o campo "Email" que deve aceitar a entrada de dados no formato de e-mail com limite máximo de 150 char.
     
Given("estou no formulário de ajuda", () => {
    cy.visit("https://www.pagbrasil.com/support")
})

When('preencher o campo Email com {string}', (Email) => {
    cy.get('#formEmail').type(Email) 
})
    
When('enviar o formulário', () => {
    // enviar o formulário
    cy.get('#formEmail').submit()
})

Then('a API deve retornar HTTP_CODE 200 {int} com JSON:', (httpCode, json) => {
    // Verificar a resposta do backend usando cy.request
    cy.request('/sua-api-endpoint') // Substitua pelo endpoint real swagger
        .its('status')
        .should('eq', httpCode)
        .its('body')
        .should('deep.equal', JSON.parse(json))
})

Then('o campo Email deve conter uma string de 150 caracteres', () => {
    //verificar o limite permitido de char 150  
   cy.get('#formEmail').invoke('val').should('have.length', 150);
})

Then('não deve haver mensagens de erro no frontend', () => {
    // Verificar se o elemento de erro não existe no frontend
    cy.get('#Error').should('not.exist')
})

Then('deve haver mensagens de erro no frontend indicando os campos incorretos', () => {
    // Verificar se o elemento de erro existe no frontend
    cy.get('#Error').should('exist')
})


// 3.Cenario:Preencher e enviar o  campo "Company" que deve aceitar letras, espaços e números com imite máximo de 200 char.

Given("estou no formulário de ajuda", () => {
    cy.visit("https://www.pagbrasil.com/support")
})

When('preencher o campo Email com {string}', (Company) => {
    cy.get('#formCompany').type(Company) 
})    

When('enviar o formulário', () => {
    // enviar o formulário
    cy.get('#formCompany').submit()
})

Then('a API deve retornar HTTP_CODE 200 {int} com JSON:', (httpCode, json) => {
    // Verificar a resposta do backend usando cy.request
    cy.request('/sua-api-endpoint') // Substitua pelo endpoint real swagger
        .its('status')
        .should('eq', httpCode)
        .its('body') 
        .should('deep.equal', JSON.parse(json))
})

Then('o campo Company deve conter uma string de 200 caracteres', () => {
    //verificar o limite permitido de char 200
   cy.get('#formCompany').invoke('val').should('have.length', 200);
})

Then('não deve haver mensagens de erro no frontend', () => {
    // Verificar se o elemento de erro não existe no frontend
    cy.get('#Error').should('not.exist')
})

Then('deve haver mensagens de erro no frontend indicando os campos incorretos', () => {
    // Verificar se o elemento de erro existe no frontend
    cy.get('#Error').should('exist')
})


// 4.Cenario:Preencher e enviar o  campo "Website" que deve , que deve aceitar a entrada de dados no formato de URL e limite máximo de 200 char
  
Given("estou no formulário de ajuda", () => {
    cy.visit("https://www.pagbrasil.com/support")
})

When('preencher o campo Website com {string}', (Website) => {
    cy.get('#formWebsite').type(Website)  
})

When('enviar o formulário', () => {
    // enviar o formulário
    cy.get('#formWebsite').submit()
})

Then('a API deve retornar HTTP_CODE 200 {int} com JSON:', (httpCode, json) => {
    // Verificar a resposta do backend usando cy.request
    cy.request('/sua-api-endpoint') // Substitua pelo endpoint real swagger
        .its('status')
        .should('eq', httpCode)
        .its('body')
        .should('deep.equal', JSON.parse(json))
})

Then('o campo Website deve conter uma string de 200 caracteres', () => {
     //verificar o limite permitido de char 200
    cy.get('#formWebsite').invoke('val').should('have.length', 200);
})

Then('não deve haver mensagens de erro no frontend', () => {
    // Verificar se o elemento de erro não existe no frontend
    cy.get('#Error').should('not.exist')
})

Then('deve haver mensagens de erro no frontend indicando os campos incorretos', () => {
    // Verificar se o elemento de erro existe no frontend
    cy.get('#Error').should('exist')
})
     

// 5.Cenario:Preencher e enviar o  campo "Phone" que deve , que deve aceitar a entrada de dados deve aceitar entrada de dados no padrão brasileiro de telefone com máscara com limite máximo de 15 char
     
Given("estou no formulário de ajuda", () => {
    cy.visit("https://www.pagbrasil.com/support")
})

When('preencher o campo Phone com {string}', (Phone) => {
    cy.get('#formPhone').type(Website)    

})

When('enviar o formulário', () => {
    // enviar o formulário
    cy.get('#formPhone').submit()
})

Then('a API deve retornar HTTP_CODE 200 {int} com JSON:', (httpCode, json) => {
    // Verificar a resposta do backend usando cy.request
    cy.request('/sua-api-endpoint') // Substitua pelo endpoint real swagger
        .its('status')
        .should('eq', httpCode)
        .its('body')
        .should('deep.equal', JSON.parse(json))
})

Then('o campo Phone deve conter uma string de 15 caracteres', () => {
    //verificar o limite permitido de char 15
    cy.get('#formPhone').invoke('val').should('have.length', 15);
})

Then('não deve haver mensagens de erro no frontend', () => {
    // Verificar se o elemento de erro não existe no frontend
    cy.get('#Error').should('not.exist')
})

Then('deve haver mensagens de erro no frontend indicando os campos incorretos', () => {
    // Verificar se o elemento de erro existe no frontend
    cy.get('#Error').should('exist')
})
    

// 6.Cenario:Preencher e enviar o  campo "Inquiry" que deve aceitar a entrada de dados que deve aceitar letras,espaços e números com limite máximo de 500 char
       
Given("estou no formulário de ajuda", () => {
    cy.visit("https://www.pagbrasil.com/support")
})

When('preencher o campo Website com {string}', (Phone) => {
    cy.get('#formInquiry').type(Inquiry)     
})

Then('enviar o formulário', () => {
    // enviar o formulário
    cy.get('#formInquiry').submit()
})

Then('a API deve retornar HTTP_CODE 200 {int} com JSON:', (httpCode, json) => {
    // Verificar a resposta do backend usando cy.request
    cy.request('/sua-api-endpoint') // Substitua pelo endpoint real swagger
        .its('status')
        .should('eq', httpCode)
        .its('body')
        .should('deep.equal', JSON.parse(json))
})

Then('o campo Inquiry deve conter uma string de 500 caracteres', () => {
    //verificar o limite permitido de char 500
    cy.get('#formInquiry').invoke('val').should('have.length', 500);
})

Then('não deve haver mensagens de erro no frontend', () => {
    // Verificar se o elemento de erro não existe no frontend
    cy.get('#Error').should('not.exist')
})

Then('deve haver mensagens de erro no frontend indicando os campos incorretos', () => {
    // Verificar se o elemento de erro existe no frontend
    cy.get('#Error').should('exist')
})
     


