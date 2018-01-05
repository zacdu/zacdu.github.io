var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
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

function Circle(x, y, dx, dy, radius, r, g, b, a, minRadius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;

    this.draw = function () {
        var rgb = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + a + ")"
        // var rgb = "rgba(202, 217, 217, 0.2)"
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
                    this.g += 80;
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
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
        // var r = Math.floor(Math.random() * 255)
        // var g = Math.floor(Math.random() * 0)
        // var b = Math.floor(Math.random() * 0)
        // var a = 0.3;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * innerHeight - (radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        var radius = Math.random() * 3 + 1;
        circleArray.push(new Circle(x, y, dx, dy, radius, 9, 48, 40, 0.2));
        } else if (i % 5 === 0) {
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * innerHeight - (radius * 2) + radius;
            var dx = (Math.random() - 0.5);
            var dy = (Math.random() - 0.5);
            var radius = Math.random() * 3 + 1;
            circleArray.push(new Circle(x, y, dx, dy, radius, 35, 122, 28, 0.3));
        } else {
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * innerHeight - (radius * 2) + radius;
            var dx = (Math.random() - 0.5);
            var dy = (Math.random() - 0.5);
            var radius = Math.random() * 3 + 1;
            circleArray.push(new Circle(x, y, dx, dy, radius, 198, 152, 46, 0.3));            
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