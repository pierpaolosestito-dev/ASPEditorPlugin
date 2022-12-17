"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicDictionary = void 0;
class DynamicDictionary {
    constructor() {
        this.dictionary = new Map();
    }
    static getInstance() {
        if (!DynamicDictionary._instance) {
            DynamicDictionary._instance = new DynamicDictionary();
        }
        return DynamicDictionary._instance;
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
exports.DynamicDictionary = DynamicDictionary;
//# sourceMappingURL=dynamic_dictionary.js.map