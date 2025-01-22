import { Repository } from "./solution.js";
import { expect } from "chai";

describe("Testing repository task…", function () {
    
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    let repository = new Repository(properties);
    describe("TODO …", () => {
        it("TODO …", () => {
            // TODO: …
        });
    });
    // TODO: …
});
