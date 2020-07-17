Feature: Search chercher tech in google

	# to check first cucumber works or not
	Scenario: Verify result for google search
		Given The browser is open
		When open the Jumbo page
		Then the title should be "Altijd lage prijzen op je dagelijkse boodschappen | Jumbo Supermarkten"