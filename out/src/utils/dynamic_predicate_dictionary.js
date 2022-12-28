"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicPredicateDictionary = void 0;
class DynamicPredicateDictionary {
    constructor() {
        this.dictionary = new Map();
    }
    static getInstance() {
        if (!DynamicPredicateDictionary._instance) {
            DynamicPredicateDictionary._instance = new DynamicPredicateDictionary();
        }
        return DynamicPredicateDictionary._instance;
    }
    add_field(key, values) {
        const uniqueArray = values.filter((value, index, self) => index === self.findIndex((t) => (t.label === value.label)));
        this.dictionary.set(key, uniqueArray);
    }
    remove_field(key) {
        this.dictionary.delete(key);
    }
    get_field(key) {
        return this.dictionary.get(key);
    }
    get_dictionary() {
        return this.dictionary;
    }
    clear() {
        this.dictionary.clear();
    }
}
exports.DynamicPredicateDictionary = DynamicPredicateDictionary;
//# sourceMappingURL=dynamic_predicate_dictionary.js.map