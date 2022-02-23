describe('Input Form', () => { 
    beforeEach(() => {
        cy.visit("/")
    })

    it('focuses input on load', () => {
    })

    it('accepts input', () => {
        const typedInput = "Do homework"
        cy.get('.todo__form__input')
            .type("Do homework")
            .should('have.value', typedInput)
    })

    it('has submit button', () => {
        cy.get('.todo__form__submit')
    })
 })

 context('Form submission',()=>{
    it('adds a new todo on submit', () => {
        const typedInput = "Do homework";
        cy.get('.todo__form__input')
            .type(typedInput)
            .type('{enter}')

        cy.get('.todo__form__input')
            .should('have.value', '')
            
        cy.get('.todo__list')
        .should('have.length', 1)
        .and('contain', typedInput)
    })
 })