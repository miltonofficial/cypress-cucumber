export class elements{
    
    visitElementsPage(){
        cy.visit("/add_remove_elements/")
    }

    addButton =() => cy.get("button");
    deleteButton = () => cy.get("button.added-manually");
    
    clickOnAddButton(){
        this.addButton().should("be.visible").click()
    }

    deleteButtionIsVisisble(){
        this.deleteButton().should("be.visible")
    }

    deleteButtionIsNotVisisble(){
        this.deleteButton().should("not.be.visible")
    }

    clickOnDeleteButton(){
        this.deleteButton().should("be.visible").click()
    }

}

export const pageElements = new elements();