const fs = require("fs");
const inquirer = require("inquirer");

class SVG {
    constructor(){
        this.textContent = ""  
        this.shapeContent = ""
    }
    render(){
        return `<svg version="1.1" 
        width="300" height="200" 
        xmlns="http://www.w3.org/2000/svg">
        ${this.shapeContent}
        ${this.textContent}
        </svg>`
    }
    setTextContent(characters,color){
        this.textContent = `<text x="150" y="125" font-size="50" text-ancor=middle fill="${color}">${characters}</text>`
    }
    setShapeContent(shape){
        this.shapeContent = shape.render()
    }
}
const questions = [
    {
        type: "input",
        name: "characters",
        message: "give 3 characters you would like to include in your SVG logo."
    },
    {
        type: "input",
        name: "character-color",
        message: "Enter a color keyword (OR a hexadecimal number) for the logo Text"
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a color keyword (OR a hexadecimal number) for the shape color"
    },
    {
        type: "list",
        name: "shape",
        message: "choose a shape you would like to use for your SVG logo.",
        choices: ["circle", "Square", "triangle"]
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Generated logo.svg");
    });
}

async function init() {
    
    var svgString = "";
    var svgFile = "logo.svg";
    
    const response = await inquirer.prompt(questions);

    var user_characters = "";
    if (response.characters.length > 0 && response.characters.length < 4) {
        user_characters = response.characters;
    }else{
        console.log("Please enter 3 characters");
        return;
    }
    
console.log("Characters: [" + user_characters + "]");
user_character_color = response["character-color"];
console.log("Character Color: [" + user_character_color + "]");
user_shape_color = response["shape-color"];
console.log("Shape Color: [" + user_shape_color + "]");
user_shape_choice = response.shape;
console.log("Shape: [" + user_shape_choice + "]");

let user_shape;
if (user_shape_choice === "circle") {
    user_shape = new circle();
}
else if (user_shape_choice === "Square") {
    user_shape = new square();
}
else if (user_shape_choice === "triangle") {
    user_shape = new triangle();
}
else {
    console.log("Invalid shape choice");
}
user_shape.setColor(user_shape_color);

const svg = new SVG();
svg.setTextContent(user_characters, user_character_color);
svg.setShapeContent(user_shape);
svgString = svg.render();

console.log("Your shape has been Generated!");
writeToFile(svgFile, svgString);

}
init();

