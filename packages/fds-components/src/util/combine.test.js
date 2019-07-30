import combine from './combine'

describe('combine', () => {
    it('combines multiple functions', () => {
        /* We create 2 dummy functions */
        const sampleFunc1 = jest.fn(() => { });
        const sampleFunc2 = jest.fn(() => { });

        /* We combine them into one, and execute that one */
        combine(sampleFunc1, sampleFunc2)();

        /* If we correctly combined the functions, firing that one
        function should have fired both */
        expect(sampleFunc1.mock.calls.length).toBe(1);
        expect(sampleFunc2.mock.calls.length).toBe(1);
    });
});