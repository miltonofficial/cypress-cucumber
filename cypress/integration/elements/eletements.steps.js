
import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import {pageElements} from '../../pages/elementPage'

Given('user is on Add/Remove Elements page', () => {
  pageElements.visitElementsPage()
})
When('he chooses the file', () => {
  pageElements.clickOnAddButton()
})

Then('Delete button should appear', () => {
  pageElements.deleteButtionIsVisisble()
})

Then('he clicks on \'Delete\' button', () => {
  pageElements.clickOnDeleteButton()
})

And('Delete button should disappear', () => {
  pageElements.deleteButtionIsNotVisisble
})

