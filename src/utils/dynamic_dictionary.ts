export class DynamicDictionary {

	dictionary: Map<string, any>;
	private static _instance: DynamicDictionary;

	constructor() {
		this.dictionary = new Map<string, any>();
	}

	static getInstance(): DynamicDictionary {
		if (!DynamicDictionary._instance) {
			DynamicDictionary._instance = new DynamicDictionary();
		}

		return DynamicDictionary._instance;
	}

	add_field(key: string, values: any) {
		const uniqueArray = values.filter((value: any, index: number, self: []) => index === self.findIndex(
			(t: any) =>
			(
				t.label === value.label
			)
		)
		);
		this.dictionary.set(key, uniqueArray);
	}

	remove_field(key: string) {
		this.dictionary.delete(key);
	}

	get_field(key: string) {
		return this.dictionary.get(key);
	}

	get_dictionary() {
		return this.dictionary;
	}

	clear() {
		this.dictionary.clear();
	}
}
