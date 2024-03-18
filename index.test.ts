import { Crowd4Cash } from "./index";

describe("crowd-4-cash-typescript-sdk", () => {
    it("initialize client", async () => {
        const crowd4cash = new Crowd4Cash({
            apiKey: "API_KEY",
        });
    });
});
