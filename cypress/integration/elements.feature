Feature: Adding and Delete element 

    Scenario: As a user, I should be able to add element
        Given user is on Add Elements page
        When he clicks on 'Add Element'
        Then Delete button should appear

    Scenario: As a user, I should be able to delete element
        Given user is on Add Elements page
        When he clicks on 'Add Element'
        And  he click on 'Delete' button
        Then Delete button should disappear
