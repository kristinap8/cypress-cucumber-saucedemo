Feature: Add products

    Background:
        Given User navigated to the login page of the saucedemo website
        And User logged in with the valid credentials
            | username                | password     |
            | standard_user           | secret_sauce |

    Scenario: Product presence in the cart after adding random product
        When User clicks the 'Add to cart' button for '[random]' product in the inventory page
        And User clicks the 'shopping cart' icon in the inventory page
        Then User is redirected to the cart page
        And User sees the details of the previously added product, including the product name, product description, and product price

    Scenario: Cart badge update after adding a single product
        When User clicks the 'Add to cart' button for '[random]' product in the inventory page
        Then The header's shopping cart badge displays '1'

    Scenario: Cart badge update after adding multiple products
        When User clicks the 'Add to cart' button for '[different random]' products in the inventory page
        Then The header's shopping cart badge displays 'the correct count'

    Scenario: Check whether user can see the remove button when add items to cart
        When User clicks the 'Add to cart' button for '[random]' product in the inventory page
        Then User sees "the 'Remove' button" in the inventory page


    