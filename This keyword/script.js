// method => obj
// function => global (window, global)

// Ovaj primer nam vraca window objekat u konzoli.

// function Hellow() {
//     console.log(this)
// }

// Hellow()


// ======================================================================= //

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach((item) => {
//       console.log(this.title, item);
//     });
//   },
// };

// video.showTags();

// Ovaj nacin vraca u konzoli:
// a, a
// a, b
// a, c



// ======================================================================== //


function f() {
    return this.a
}

var g = f.bind({ a: "Davud" })
console.log(g());

var h = g.bind({ a: "Mejra" });  // Ne radi. Ispisuje u konzoli Davud
console.log(h());


var o = { a: 8, f: f, g: g, h: h }
console.log(o.f(), o.g(), o.h())