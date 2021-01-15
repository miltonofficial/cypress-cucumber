export class elements{

    addButton =() => cy.get("button");
    deleteButton = () => cy.get("button.added-manually");
    
    visitElementsPage =() => cy.visit("/add_remove_elements/")
    
    
    clickOnAddButton(){
        return this.addButton().should("be.visible").click()
    }

    deleteButtionIsVisisble(){
        return this.deleteButton().should("be.visible")
    }

    deleteButtionIsNotVisisble(){
        return this.deleteButton().should("not.be.visible")
    }

    clickOnDeleteButton(){
        returnthis.deleteButton().should("be.visible").click()
    }
}

export const pageElements = new elements();