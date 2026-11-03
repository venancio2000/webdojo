describe('consultoria de Formulario', () => {
    it("Deve solicitar consultoria individual", () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
})

})