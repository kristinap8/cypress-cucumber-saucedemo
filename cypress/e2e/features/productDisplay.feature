Feature: Product display check

    Background:
        Given User navigated to the login page of the saucedemo website
        And User logged in with the valid credentials
            | username                | password     |
            | standard_user           | secret_sauce |

    Scenario: Product images display
        Then User sees "product images that match their names" in the inventory page

    Scenario Outline: View product details
        When User clicks the 'product title' link for '<item_number>' product in the inventory page
        Then User is redirected to the product view page
        And User sees product details that match the clicked product

        Examples:
            | item_number |
            | 0           |
            | 1           |
            | 2           |
            | 3           |
            | 4           |
            | 5           |