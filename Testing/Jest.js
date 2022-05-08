npm install --save-dev jest

// sum.js file
        function sum(a, b) {
            return a + b;
        }
        module.exports = sum;

// sum.test.js
    const sum = require('./sum');

    test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    });
// package.json
    {
        "scripts": {
        "test": "jest"
        }
    }

// Mock
    const mockCallback = jest.fn(x => 42 + x);
    mockCallback.mock.calls.length