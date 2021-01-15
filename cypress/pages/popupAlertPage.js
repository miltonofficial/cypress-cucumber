
export class popupAlerts{


    alertButton = buttonName => cy.contains(`${buttonName}`);
    confirmation = () => cy.get("p#result");

    visitJsAlertPage = () => cy.visit("/javascript_alerts")

    clickAlertButton(buttonName){
        return this.alertButton(buttonName).should("be.visible").click();
    }

    actionConfirmation(successMessage){
        return this.confirmation().should("contain",`${successMessage}`)
    }

    confirmAlertAction(action){
        const alertText = "I am a JS Confirm"
        return this.popupAction(action, alertText);
    }
    
    alertAction(action){
        const alertText = "I am a JS Alert"
        return this.popupAction(action, alertText);
    }
    
    popupAction(action,alertText){
        
        cy.on(`window:confirm`, (message) => {
            expect(message).to.equal(`${alertText}`)
            if (action == "ok") {
                return true
            }
            else {
                return false
            }
        })
    }

}

export const popups = new popupAlerts()