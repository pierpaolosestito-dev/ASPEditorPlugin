export class DynamicTermsDictionary {

	dictionary: Map<string, Map<string,string[]>>;
	private static _instance: DynamicTermsDictionary;

	constructor() {
		this.dictionary = new Map<string, Map<string,string[]>>;
	}

	static getInstance(): DynamicTermsDictionary {
		if (!DynamicTermsDictionary._instance) {
			DynamicTermsDictionary._instance = new DynamicTermsDictionary();
		}

		return DynamicTermsDictionary._instance;
	}

	add_field(key: string, values: Map<string,string[]>) {
		this.dictionary.set(key, values);
	}

	remove_field(key: string) {
		this.dictionary.delete(key);
	}

	get_field(key: string): Map<string,string[]> {
		return this.dictionary.get(key)||new Map<string,string[]>();
	}

	get_dictionary() {
		return this.dictionary;
	}

	clear() {
		this.dictionary.clear();
	}
}
