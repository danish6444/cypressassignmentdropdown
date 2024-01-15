describe('this is our second test suit', () => {
    it.only('this is our second test case', () => {
       // cypress.viewport(1280, 720)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

        cy.get('#autocomplete').type('ame').get('.ui-menu-item').each((ele, index) => {
        //cy.log(ele.text())
        if(ele.text()==='American Samoa')
        cy.wrap(ele).click()

        })
        



    })
    })