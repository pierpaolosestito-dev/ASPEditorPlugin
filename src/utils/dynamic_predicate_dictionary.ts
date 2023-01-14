import { IntelliDetail } from "./intelli_detail";

export class DynamicPredicateDictionary {

	dictionary: Map<string, IntelliDetail[]>;
	private static _instance: DynamicPredicateDictionary;

	constructor() {
		this.dictionary = new Map<string, any>();
	}

	static getInstance(): DynamicPredicateDictionary {
		if (!DynamicPredicateDictionary._instance) {
			DynamicPredicateDictionary._instance = new DynamicPredicateDictionary();
		}

		return DynamicPredicateDictionary._instance;
	}

	add_field(key: string, values: IntelliDetail[]) {
		const uniqueArray = values.filter((value: IntelliDetail, index: number, array: IntelliDetail[]) => index === array.findIndex(
			(t: IntelliDetail) =>
			(
				t.label === value.label
			)
		)
		);
		this.dictionary.set(key, uniqueArray);
	}

	get_field(key: string): IntelliDetail[] {
		return this.dictionary.get(key)||[];
	}

}
