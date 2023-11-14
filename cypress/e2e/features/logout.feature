Feature: Logout functionality check

    Scenario Outline: Logout
        Given User navigated to the login page of the saucedemo website
        And User logged in with the valid credentials
            | username                | password     |
            | standard_user           | secret_sauce |
        When User clicks the 'Burger' button in the inventory page
        And User clicks the 'Logout' button in the inventory page
        Then User is redirected to the login page
        And The 'Username' field is empty
        And The 'Password' field is empty

