Feature: Product sorting check

    Scenario Outline: Sort products by different criteria
        Given User navigated to the login page of the saucedemo website
        And User logged in with the valid credentials
            | username                | password     |
            | standard_user           | secret_sauce |
        When User selects '<sorting_option>' from the sorting dropdown
        Then Products are displayed in '<expected_order1>' and '<expected_order2>' order

        Examples:
            | sorting_option      | expected_order1 | expected_order2 |
            | Name (A to Z)       | alphabetical    | ascending       |
            | Name (Z to A)       | alphabetical    | descending      |
            | Price (low to high) | numerical       | ascending       |
            | Price (high to low) | numerical       | descending      |
