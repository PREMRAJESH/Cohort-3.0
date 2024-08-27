class rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  circle() {
    const area = this.width * this.height;
    return area;
  }
}
const rect = new rectangle(6, 2);
const area = rect.circle();
console.log(area);
