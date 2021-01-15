
import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import {popups} from '../../pages/popupAlertPage'

Given('user is on JavaScript Alerts page', () => {
    popups.visitJsAlertPage()
})

When(`User clicks on {string} button`,(buttonName) => {
    popups.clickAlertButton(buttonName)
})

And('User clicks "ok" on the popup', () => {
    popups.alertPopup()
})
// step for confirm alert 
And('User clicks {string} on the confrim popup', (action) => {
    popups.confirmPopup(action)
})

Then('{string} message should appear', (successMessage) => {
    popups.actionConfirmation(successMessage)
})