const {circle, square, triangle} = require("./shapes")

describe("shapes", () => {
    describe("circle", () => {
        it("should return a circle SVG element", () => {
            const shape = new circle();
            var color = ("red");
            shape.setColor(color);
            expect(shape.render()).toBe('<circle cx="50" cy="50" r="100" fill="red"/>');
        });
    });
    describe("square", () => {
        it("should return a square SVG element", () => {
            const shape = new square();
            var color = ("blue");
            shape.setColor(color);
            expect(shape.render()).toBe('<rect x="25" y="25" width="150" height="150" fill="blue"/>');
        });
    });
    describe("triangle", () => {
        it("should return a triangle SVG element", () => {
            const shape = new triangle();
            var color = ("green");
            shape.setColor(color); 
            expect(shape.render()).toBe('<polygon points="150,0 200,100 100,100" fill="green"/>');
        });
    });
}); 

