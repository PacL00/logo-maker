class shape{
    constructor(){
        this.color = ""
    }
    setColor(color){
        this.color =(color);
    }
}

class circle extends shape{
    
    render(){
        return `<circle cx="50" cy="50" r="100" fill="${this.color}"/>`
    }
}
class square extends shape{
    render(){
        return `<rect x="25" y="25" width="150" height="150" fill="${this.color}"/>`
    }
}

class triangle extends shape{
    render(){
        return `<polygon points="150,0 200,100 100,100" fill="${this.color}"/>`
    }
};

module.exports = {circle, square, triangle}
