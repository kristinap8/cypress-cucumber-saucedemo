Feature: Checkout functionality check

    Background:
        Given User navigated to the login page of the saucedemo website
        And User logged in with the valid credentials
            | username      | password     |
            | standard_user | secret_sauce |
        And User clicked the 'Add to cart' button for '[random]' product in the inventory page
        And User clicked the 'shopping cart' icon in the inventory page
        And User clicked the 'Checkout' button in the cart page

    Scenario: Cancel checkout at the first step of the checkout process
        When User clicks the 'Cancel' button in the checkout step one page
        Then User is redirected to the cart page

    Scenario Outline: Checkout with incomplete buyer information
        When User enters a '<first_name>' into the 'First name' field in the checkout step one page
        And User enters a '<last_name>' into the 'Last name' field in the checkout step one page
        And User enters a '<postal_code>' into the 'Zip/Postal code' field in the checkout step one page
        And User clicks the 'Continue' button in the checkout step one page
        Then User sees '<error_message>' error message

        Examples:
            | first_name | last_name | postal_code | error_message                  |
            | [random]   | [random]  | [blank]     | Error: Postal Code is required |
            | [random]   | [blank]   | [random]    | Error: Last Name is required   |
            | [blank]    | [random]  | [random]    | Error: First Name is required  |

    Scenario: Complete checkout process
        Given User entered a '[random]' into the 'First name' field in the checkout step one page
        And User entered a '[random]' into the 'Last name' field in the checkout step one page
        And User entered a '[random]' into the 'Zip/Postal code' field in the checkout step one page
        And User clicked the 'Continue' button in the checkout step one page
        When User clicks the 'Finish' button in the checkout step two page
        Then User is redirected to the 'Checkout: Complete!' page
        And User sees the 'Thank you for your order!' message

