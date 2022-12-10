"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dynamic_dictionary_1 = require("../../utils/dynamic_dictionary");
const assert = require("assert");
describe('Dynamic Dictionary Test Suite', () => {
    const dynamicdictionary = new dynamic_dictionary_1.DynamicDictionary();
    beforeEach(() => {
        dynamicdictionary.add_field('1', [{ label: "Test" }]);
        dynamicdictionary.add_field('2', [{ label: "Test" }, { label: "Test" }]);
        const vals = [];
        vals[1] = [{ label: "Test" }];
        vals[2] = [{ label: "Test" }];
    });
    it("add value in dictionary and get value by key", () => {
        assert.equal(dynamicdictionary.get_field('1'), [{ label: "Test" }]);
    });
    it("add value and get full dictionary", () => {
        assert.equal(dynamicdictionary.get_dictionary(), { '1': [{ label: 'Test' }], '2': [{ label: 'Test' }] });
    });
    it("no duplication inside the value", () => {
        assert.equal(dynamicdictionary.get_field('2'), [{ label: 'Test' }]);
    });
    afterEach(() => {
        dynamicdictionary.clear();
    });
});
//# sourceMappingURL=dynamic_dictionary.spec.js.map