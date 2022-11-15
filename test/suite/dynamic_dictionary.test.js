const dynamicdictionary = require('../../media/js/dynamic_dictionary.js');
const dictionarizer = require('../../media/js/dictionarizer.js');

beforeEach(() => {
	dynamicdictionary.add_field(1,[{label:"Test"}]);
	dynamicdictionary.add_field(2,[{label:"Test"},{label:"Test"}]);
	vals = {};
	vals[1]=[{label:"Test"}];
	vals[2]=[{label:"Test"}];
	console.log(vals);
	
  });
test("add value in dictionary and get value by key",()=>{
	
		expect(
			dynamicdictionary.get_field(1)
		).toEqual([{label:"Test"}])
	
});
test("add value and get full dictionary",()=>{
	
	expect(
		dynamicdictionary.get_dictionary()
	).toEqual(  { '1': [ { label: 'Test' } ], '2': [ { label: 'Test' } ] })

});

test("no duplication inside the value",()=>{
	
	expect(
		dynamicdictionary.get_field(2)
	).toEqual([{ label: 'Test' } ])

});

afterEach(() => {
	dynamicdictionary.clear();
  });

