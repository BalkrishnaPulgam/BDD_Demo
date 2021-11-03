@login
Feature: JBK offline website

Scenario Outline:login Test

When user enters "<uname>" and "<pass>"
And user click on login button
Then user will be on home page

Examples:
|uname|pass|
|kiran@gmail.com|123456|
|Krishna|123456|
|kiran@gmail.com|456789|

#Scenario: JBK logo test

#Given user should be on login page
#Then  user should see a logo