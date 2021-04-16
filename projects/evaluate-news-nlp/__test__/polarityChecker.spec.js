import { getPolarity } from "../src/client/js/polarityChecker"
describe("Testing the output of convertion score_tag to Polarity", () => {
    test("Testing P+", () => {
        const input = "P+"
        const output = "STRONG POSTIVE"
        expect(getPolarity(input)).toEqual(output);
    });
    test("Testing P", () => {
        const input = "P"
        const output = "POSTIVE"
        expect(getPolarity(input)).toEqual(output);
    });
    test("Testing NEU", () => {
        const input = "NEU"
        const output = "NEUTRAL"
        expect(getPolarity(input)).toEqual(output);
    });
    test("Testing N", () => {
        const input = "N"
        const output = "NEGATIVE"
        expect(getPolarity(input)).toEqual(output);
    });
    test("Testing N+", () => {
        const input = "N+"
        const output = "STRONG NEGATIVE"
        expect(getPolarity(input)).toEqual(output);
    });
    test("Testing invalid input", () => {
        const input = "PO"
        const output = "PO"
        expect(getPolarity(input)).toEqual(output);
    });
    test("Testing null", () => {
        const input = null
        const output = null
        expect(getPolarity(input)).toEqual(output);
    });
    test("Testing undefined", () => {
        const input = undefined
        const output = undefined
        expect(getPolarity(input)).toEqual(output);
    });
});
