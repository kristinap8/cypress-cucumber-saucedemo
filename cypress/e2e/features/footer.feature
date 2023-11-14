Feature: Footer functionality check

    Scenario Outline: Footer links
        Given User navigated to the login page of the saucedemo website
        And User logged in with the valid credentials
            | username                | password     |
            | standard_user           | secret_sauce |
        When User scrolls down to the footer
        Then The '<social_media>' link contains correct href attribute

        Examples:
            | social_media |
            | Twitter      |
            | Facebook     |
            | LinkedIn     |


