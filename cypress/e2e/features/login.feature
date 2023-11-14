Feature: Login functionality check

    Background:
        Given User navigated to the login page of the saucedemo website

    Scenario Outline: Log in with accepted username and password
        When User enters '<username>' into the 'Username' field in the login page
        And User enters '<password>' into the 'Password' field in the login page
        And User clicks the 'Login' button in the login page
        Then User is redirected to the inventory page

        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |

    Scenario: Log in with a locked-out account
        When User enters 'locked_out_user' into the 'Username' field in the login page
        And User enters 'secret_sauce' into the 'Password' field in the login page
        And User clicks the 'Login' button in the login page
        Then User sees the 'Epic sadface: Sorry, this user has been locked out.' error message

    Scenario Outline: Log in with accepted username and incorrect password
        When User enters '<username>' into the 'Username' field in the login page
        And User enters '[random]' into the 'Password' field in the login page
        And User clicks the 'Login' button in the login page
        Then User sees the 'Epic sadface: Username and password do not match any user in this service' error message

        Examples:
            | username                |
            | standard_user           |
            | problem_user            |
            | performance_glitch_user |
            | error_user              |
            | visual_user             |