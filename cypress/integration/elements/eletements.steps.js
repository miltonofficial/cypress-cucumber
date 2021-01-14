import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given('user is on Add/Remove Elements page', () => {
  cy.visit("/add_remove_elements/")
})
When('he clicks on \'Add Element\'', () => {
  cy.get("button").click()
})
Then('Delete button should appear', () => {
  cy.get("button.added-manually").should('be.visible')
})

Then('he click on \'Delete\' button', () => {
  cy.get("button.added-manually").should('be.visible').click()
})

And('Delete button should disappear', () => {
  cy.get("button.added-manually").should('not.be.visible')
})