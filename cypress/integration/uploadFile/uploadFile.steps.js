import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import {fileUpload} from '../../pages/uploadFilePage'

Given('user is on File Uploader page', () => {
    fileUpload.visitUploadPage()
})

When('he select\'s a file', () => {
    fileUpload.selectUploadFile()
})

When('user drag and drop a file', () => {
    fileUpload.dragDropFile()
})

And('he clicks on upload button', () => {
    fileUpload.clickOnUploadButton()
})

Then('file should get uploaded', () => {
    fileUpload.uploadConfirmation()
})

Then('file should appear in dropzone', () => {
    fileUpload.fileProccessed()
})
