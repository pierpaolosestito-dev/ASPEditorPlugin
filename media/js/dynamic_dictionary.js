class DynamicDictionary {
	constructor() {
	  this.dictionary = {};
	}

	add_field(key,values){
		let uniqueArray = values.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.label === value.label
  ))
)
			this.dictionary[key] = uniqueArray;
			//this.dictionary[key] = [...new Set(values)];
		
		 
	}
	remove_field(key,value){
		this.dictionary[key] = value;
	}
	get_field(key){
		return this.dictionary[key];
	}
	get_dictionary(){
		return this.dictionary;
	}
	clear(){
		this.dictionary = {};
	}
  }

module.exports = new DynamicDictionary();