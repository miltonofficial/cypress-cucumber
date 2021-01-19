Feature: Adding and Delete element 

    Background:
        Given user is on Add Elements page
    @sanity 
    Scenario: As a user, I should be able to add element
        When he clicks on 'Add Element'
        Then Delete button should appear
    @regression 
    Scenario: As a user, I should be able to delete element
        When he clicks on 'Add Element'
        And  he clicks on 'Delete' button
        Then Delete button should disappear
