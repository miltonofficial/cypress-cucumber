Feature: uploading file 

    Background:
        Given user is on File Uploader page

    Scenario: As a user, I should be able to upload a file
        When he select's a file
        And he clicks on upload button
        Then file should get uploaded 

    Scenario: As a user, I should be able to drag and drop a file
        When user drag and drop a file 
        Then file should appear in dropzone
