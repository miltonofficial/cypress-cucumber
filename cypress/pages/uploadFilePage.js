/// <reference types = "cypress"/>

export class upload{

    fileBrowse =() => cy.get("input#file-upload");
    uploadButton = () => cy.get("input#file-submit");
    dragDropZone = () => cy.get("#drag-drop-upload")
    dropzoneFile = () => cy.get("div.dz-success")
    
    visitUploadPage =() => cy.visit("/upload")

    selectUploadFile(){
        const uploadFilePath = 'sample.pdf';
        return this.fileBrowse().attachFile(uploadFilePath);
    }

    clickOnUploadButton(){
        return this.uploadButton().should("be.visible").click();
    }

    uploadAfile(){
        this.selectUploadFile()
        return this.clickOnUploadButton();

    }

    uploadConfirmation(){
        return cy.get("h3").should("contain","File Uploaded!" );
    }

    dragDropFile(){
        const uploadFilePath = 'sample.pdf';
        return this.dragDropZone().attachFile(uploadFilePath, { subjectType: 'drag-n-drop' });
    }

    fileProccessed() {
        return this.dropzoneFile().should("be.visible");
    }

}

export const fileUpload = new upload();