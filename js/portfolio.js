// var SPY = (function () {
//     function e(a, d, b) {
//         var c, f, g, h;
//         b == a.length
//             ? (k.animationComplete = !0)
//             : ((g = d.innerHTML),
//                 (h = Math.floor(21 * Math.random() + 5)),
//                 (c = 32 === a[b] ? 32 : a[b] - h),
//                 (f = setInterval(function () {
//                     d.innerHTML = g + String.fromCharCode(c);
//                     c == a[b]
//                         ? (clearInterval(f),
//                             (c = 32),
//                             b++ ,
//                             setTimeout(function () {
//                                 e(a, d, b);
//                             }, 10))
//                         : c++;
//                 }, 5)));
//     }
//     var k = {};
//     return (k = {
//         animationComplete: !1,
//         text: function (a) {
//             this.animationComplete = !1;
//             a = document.getElementById(a);
//             for (var d = a.innerHTML, b = [], c = 0; c < d.length; c++) {
//                 b.push(d.charCodeAt(c));
//             }
//             a.innerHTML = "";
//             e(b, a, 0);
//         }
//     });
// })();

// $("document").ready(function () {
//     // Hide header
//     $(".hackView").hide();
//     // Transition background
//     $(".london").fadeIn(1200);

//     // Timeout for crypto text
//     setTimeout(function () {
//         $(".hackView").fadeIn("slow");
//         SPY.text("op");
//     }, 1000);
// });

function createText() {
    var subtitle = new TypeIt("#secondNameText", {
        strings: "",
        speed: 100,
        breakLines: false,
        lifeLike: true,
        autoStart: false
    });
    subtitle.type("..and I like to write")
}

var title = new TypeIt('#nameHeader', {
    strings: ["Hello"],
    speed: 90,
    breakLines: false,
    lifeLike: true,
});
title.pause(300);
title.type("! I am Zac,");
title.pause(2000);
title.break();
title.pause(500);
title.type("and I like to develop web & mobile apps.");
title.pause(200);
title.break();
title.break();
title.break();
title.pause(2500);
title.options({speed: 80});
title.type("<h1 class='bottomHackView'>...I also write and make music.</h1>");






