"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicTermsDictionary = void 0;
class DynamicTermsDictionary {
    constructor() {
        this.dictionary = new Map;
    }
    static getInstance() {
        if (!DynamicTermsDictionary._instance) {
            DynamicTermsDictionary._instance = new DynamicTermsDictionary();
        }
        return DynamicTermsDictionary._instance;
    }
    add_field(key, values) {
        this.dictionary.set(key, values);
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
exports.DynamicTermsDictionary = DynamicTermsDictionary;
//# sourceMappingURL=dynamic_terms_dictionary.js.map