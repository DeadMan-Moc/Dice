describe("Dice should return error messages", () => {
    it("Returns error messages", ()=>{
        let dice = new Die([])
        
    })    
})

describe('Dice returns 1 value of its sides', ()=>{
    it('Returns value between 1 and 6', ()=>{
        let dice = new Die(6)
        let value = dice.roll()
        if (value >= 1 && value <= 6) {
            var range = true;
        }
        expect(range).toBe(true);
    });
})