describe('Login', () => {
    it('Login sucessful', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get("#action-canvas").click('topLeft')
    cy.get("#action-canvas").click('top')
    cy.get("#action-canvas").click('topRight')
    cy.get("#action-canvas").click('left')
    cy.get("#action-canvas").click('right')
    cy.get("#action-canvas").click('bottomLeft')
    cy.get("#action-canvas").click('bottom')
    cy.get("#action-canvas").click('bottomRight')
    cy.get("#action-canvas").click(80,75)
    cy.get("#action-canvas").click(170,70)
    cy.get("#action-canvas").click(170,70)
    cy.get(".action-labels > span:nth-of-type(3)").click()
    cy.get(".action-labels > .label").click({multiple:true}) //Selección de elementos con igual descripción
    cy.get(".action-opacity").click({force:true})



    






    }) 
})