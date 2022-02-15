/// <reference types="Cypress"/>
// describe('Пополнение мобильного телефона', () => {

//     it('Проверка минимальной суммы', () => {
//         //test
        
//     })
// })
//it ('by id', () => {
//     cy.visit("http://facebook.com/")
//     cy.get('#email')
// });

// it ('by class', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('.DocSearch')
// });

// it ('by tag', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('nav')
// });

// it ('by tag value', () => {
//     cy.visit("http://facebook.com/")
//     cy.get('[name="pass"]')
// });

// it ('by tag', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('button[type="button"][title="close banner]')
// });

// it.only ('by contains name', () => {
//     cy.visit("https://next.privat24.ua/")
//     cy.get('*[class^="card"]')
// });

it('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/')
    cy.get('')
     
})

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1800,700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('nav').find('ul').find('li').find('a').eq(0)
     
})