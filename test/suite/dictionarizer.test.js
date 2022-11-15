const dictionarizer = require('../../media/js/dictionarizer.js');

test("dictionarizer",()=>{
	expect(
		dictionarizer("./constants.json")
	).toEqual({
		"language-constants": [
		  'U_INT',   'UT_INT',
		  'UR_INT',  'T_INT',
		  'R_INT',   'CONST',
		  'Q_CONST'
		]
	  })
});