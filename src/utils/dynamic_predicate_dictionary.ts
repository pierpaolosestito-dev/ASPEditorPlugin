import { PrompterDetail } from "./prompter_detail";

export class DynamicPredicateDictionary {

	dictionary: Map<string, PrompterDetail[]>;
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

	add_field(key: string, values: PrompterDetail[]) {
		const uniqueArray = values.filter((value: PrompterDetail, index: number, array: PrompterDetail[]) => index === array.findIndex(
			(t: PrompterDetail) =>
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

	get_field(key: string): PrompterDetail[] {
		return this.dictionary.get(key)||[];
	}

	get_dictionary() {
		return this.dictionary;
	}

	clear() {
		this.dictionary.clear();
	}
}
