var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
var colorsArray = [
    ["rgba(9, 48, 40, 0.2)", "rgba(35, 122, 87, 0.3)", "rgba(249, 210, 32, 0.3)"],
    ["rgba(147, 192, 40, 0.2)", "rgba(202, 217, 217, 0.3)", "rgba(181, 39, 37, 0.1)"],
    ["rgba(118, 163, 210, 0.3)", "rgba(225, 224, 87, 0.4)", "rgba(122, 202, 201, 0.3)"]
]
var mouse = {
    x: undefined,
    y: undefined
};
var maxRadius = 10;
var minRadius = 2;

window.addEventListener("mousemove", function(event){
    mouse.x = event.x
    mouse.y = event.y
});

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

function Circle(x, y, dx, dy, radius, rgba, minRadius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    // this.r = r; K
    // this.g = g; E
    // this.b = b; E
    // this.a = a; P!
    this.rgba = rgba;

    this.draw = function () {
        // var rgb = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + a + ")" KEEP!!
        var rgb = rgba
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2.2, false);
        c.strokeStyle = rgb;
        c.fillStyle = rgb;
        c.stroke();
        c.fill();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // Mouse interactivity occurs
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 1.2;
                    this.dy += 0.09;
                }
        } else if (this.radius > this.minRadius){ 
            // this.radius -= 1;
        }

        this.draw();
    }

}

var circleArray = [];

console.log(circleArray)

function init() {
    circleArray = []
    var randomNumber = Math.floor(Math.random() * colorsArray.length) 
    var color = colorsArray[randomNumber]
    var radius = Math.random() * 5 + 1;

    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
        // var r = Math.floor(Math.random() * 255)
        // var g = Math.floor(Math.random() * 0)
        // var b = Math.floor(Math.random() * 0)
        // var a = 0.3;
        var radius = radius;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * innerHeight - (radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius, color[0]));
        } else if (i % 5 === 0) {
            var radius = radius;
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * innerHeight - (radius * 2) + radius;
            var dx = (Math.random() - 0.5);
            var dy = (Math.random() - 0.5);
            var radius = Math.random() * 3 + 1.2;
            circleArray.push(new Circle(x, y, dx, dy, radius, color[1]));
        } else {
            var radius = radius;
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * innerHeight - (radius * 2) + radius;
            var dx = (Math.random() - 0.5);
            var dy = (Math.random() - 0.5);
            var radius = Math.random() * 3 + 1;
            circleArray.push(new Circle(x, y, dx, dy, radius, color[2]));            
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()        
    }
}

init();
animate();