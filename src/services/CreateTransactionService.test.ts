import * as CreateTransactionService from "./CreateTransactionService"
// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new CreateTransactionService.default()
    })

    test("0", async () => {
        await inst.execute({ title: "International Intranet Coordinator", type: "outcome", value: 64, category: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart" })
    })

    test("1", async () => {
        await inst.execute({ title: "International Intranet Coordinator", type: "outcome", value: 0, category: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart" })
    })

    test("2", async () => {
        await inst.execute({ title: "Future Interactions Representative", type: "income", value: 64, category: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart" })
    })

    test("3", async () => {
        await inst.execute({ title: "Internal Interactions Strategist", type: "outcome", value: 10, category: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J" })
    })

    test("4", async () => {
        await inst.execute({ title: "Direct Functionality Orchestrator", type: "outcome", value: 10, category: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality" })
    })

    test("5", async () => {
        await inst.execute({ title: "", type: "income", value: Infinity, category: "" })
    })
})
