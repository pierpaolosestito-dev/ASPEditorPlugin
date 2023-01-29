Feature: Dynamic Predicates Autocompletion List Filling.
	
	Scenario: A developer open a new ASP file and start to write predicates.
		Given A DynamicPredicateDictionary with 0 saved predicates for that file
		When A developer open a new file and write a predicate in it.
		Then DynamicPredicateDictionary saves it