context('Task List', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('Click on the task name should delete the task', () => {
        const typedInput = "Do homework";
        cy.get('.todo__form__input')
            .type(typedInput)
            .type('{enter}')

        cy.get('.todo__form__input')
            .should('have.value', '')
            
        cy.get('.todo__list')
        .should('have.length', 1)
        .and('contain', typedInput)

        cy.get('.todo__list li')
        .click()

        cy.get('.todo__list')
        .should('not.contain',typedInput)
    })
})