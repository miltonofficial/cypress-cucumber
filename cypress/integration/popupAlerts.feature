Feature: Browser Popups 

    Background:
        Given user is on JavaScript Alerts page

    Scenario: As a user, I should be able to accept ok on alert
        When User clicks on "Click for JS Alert" button
        And User clicks "ok" on the popup
        Then "You successfuly clicked an alert" message should appear

    Scenario: As a user, I should be able to confirm popup
        When User clicks on "Click for JS Confirm" button
        And User clicks "ok" on the confrim popup
        Then "You clicked: Ok" message should appear

    Scenario: As a user, I should be able to confirm popup
        When User clicks on "Click for JS Confirm" button
        And User clicks "cancel" on the confrim popup
        Then "You clicked: Cancel" message should appear