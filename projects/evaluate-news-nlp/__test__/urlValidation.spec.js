import { urlValidation } from "../src/client/js/urlChecker"
describe("Checking if a string is a valid URL ", () => {
    test("Testing https", () => {
        const input = "https://google.com/"
        expect(urlValidation(input)).toBeTruthy();
    });
    test("Testing http", () => {
        const input = "http://google.com/"
        expect(urlValidation(input)).toBeTruthy();
    });
    test("Testing www", () => {
        const input = "www.google.com"
        expect(urlValidation(input)).toBeTruthy();
    });
    test("Testing without www case", () => {
        const input = "google.com"
        expect(urlValidation(input)).toBeTruthy();
    });
    test("Testing case sensitivity", () => {
        const input = "GOOGLE.COM"
        expect(urlValidation(input)).toBeTruthy();
    });
    test("Testing invalid input", () => {
        const input = "BLAH"
        expect(urlValidation(input)).toBeFalsy();
    });
});
