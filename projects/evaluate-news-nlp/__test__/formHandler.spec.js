import { handleSubmit } from "../src/client/js/formHandler"
describe("Testing handle submit", () => {
    test("Checking if handleSubmit is defined", () => {
        expect(handleSubmit).toBeDefined()
    });
});