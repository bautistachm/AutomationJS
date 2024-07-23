describe('Suite de Pruebas de Login', () => {
  it('Ingreso de Datos en My Info', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.get("input[placeholder='Search']").type('My info')
    cy.get("a[class='oxd-main-menu-item']").click()
    cy.get("input[name='firstName']").clear().type("Maryori")
    cy.get("input[name='middleName']").clear().type("Milenne")
    cy.get("input[name='lastName']").clear().type("Bautista")
  })

  it('doble click', ()=>{
    cy.visit('https://demoqa.com/buttons')
    //cy.get("button[id='doubleClickBtn']").dblclick()
    //cy.get("button[class='btn btn-primary']").dblclick()
    //cy.get(.btn.btn-primary).dblclick()
    cy.get("#doubleClickBtn").dblclick()

  })

  it('aprendiendo locator con texto',() => {
    cy.visit('https://demoqa.com/buttons')
    //cy.contains("Click Me").click()
    cy.get("button").eq(3).click()
    cy.get("")


  })

  it.only('click derecho', ()=>{
    cy.visit('https://demoqa.com/buttons')
    //cy.get("button[id='rightClickBtn']").rightclick()
    //cy.get("#rightClickBtn").rightclick()
    cy.get("button").eq(2).rightclick()
    //cy.contains("Right Click Me").rightclick()
  })

  it('bad user', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[name='username']").type('adm')
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()
  })
})