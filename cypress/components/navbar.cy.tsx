import Navbar from "@/components/navbar"


describe('Home Page Component', () => {
    it('render compoent correctly', () => {
        cy.mount(<Navbar />)
        cy.get('a[href="/"]').should("exist")
        cy.get('img').should("exist")
    })
})