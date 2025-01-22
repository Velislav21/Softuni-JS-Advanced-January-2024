function rectangle(width, height, color){
    let rect = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),

        calcArea() {
            return this.width * this.height
        }
    }
    return rect
}
rectangle(10, 10, "bordo")
let rect = rectangle(10, 10, 'bordo');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());