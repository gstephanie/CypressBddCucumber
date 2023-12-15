## Requisitos
- [Node LTS](https://nodejs.org/pt-br/)

## 1. Execução
#### 1.1 
abra terminal com git bash e utilize o comando para executar testes: npx cypress open

## 2. Estrutura 
#### 2.1 Arquivos feature
Os arquivos feature se encontram e devem ser armazenados dentro da pasta `cypress/e2e/features`.
É nestes arquivos `exemplo.feature` que devem ser implementado a escrita de cenários de testes no 
formato de Gherkin, em português e evitando acentuação e caracteres especiais.
- Para criar cenários de testes nas features basta escrever **Cenário:** ou **Esquema de cenário:** e o título desejado
- No cucumber temos palavras-chaves básicas para definir cada step são elas:
    **Dado, Quando, E, Mas, Então**.
Exemplo de escrita:
  **Cenário**: Logar com sucesso
    **Dado** Que estou na pagina de login
    **Quando** insiro email e senha nos campos
    **E** Clico no botão de entrar
    **Então** Devo ser redirecionado para a pagina de cadastro

#### 2.2 Steps
- Os arquivos de steps `steps.js` se encontram e devem ser armazenados em `cypress/support/step_definitions`.
- Os arquivos de step definitions definem a implementação dos passos descritos nas features. Eles são escritos em JavaScript e utilizam a sintaxe do Cucumber para vincular os passos às funções. Aqui está um exemplo de um arquivo step_definitions.js correspondente ao exemplo acima:
        import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

        Given('Que estou na pagina de login', () => {
          cy.visit('/login');
        });

