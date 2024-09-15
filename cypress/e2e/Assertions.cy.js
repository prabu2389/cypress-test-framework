
describe("Assertions Demo", ()=>{
    it("Implicit Assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //implicit Assertions should and
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orange')

        /*cy.url().should('include', 'orangehrm')
        .should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should('contain', 'orange') */

        cy.url().should('include', 'orange')
        .and('not.eq', 'https://opensoure-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','orangehm')

        cy.title().should('include','Orange')

        cy.get('.orangehrm-login-branding > img').should('exist') //logo exists and visible
        .and('be.visible')

        //capture all the links from website

        cy.xpath("//a").should('have.length','5') //no of links

        cy.get("input[placeholder='Username']").type("Admin").should('have.value', 'Admin')  //Enter text Admin

        // cy.get("input[placeholder='Username']").should('have.value','Admin') //Verify entered text

    })

    it("Explicit Assertions", ()=> {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()


        let expName = "manda user";

        cy.get("p[class='oxd-userdropdown-name']").then( (x)=>{

            let actName = x.text()

            expect(actName).to.equal(expName)
        })
    })
})