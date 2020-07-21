Feature: Check title in google

	# to check first cucumber works or not
	Scenario: Verify the title of the page
		Given The browser is open
		When open the homepage
		Then the title should be "Sample Site"