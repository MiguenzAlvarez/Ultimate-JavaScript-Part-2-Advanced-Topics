//FUNCTIONS ARE OBJECTS

/*OBJECT LITERALS:

const circle = {
  radius: 1, //properties
  location: {
    x: 1,
    y: 1,
  },
  draw: function () { //method
    console.log("draw");
  },
};

circle.draw();*/

/*FACTORIES:

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();*/

/*CONSTRUCTOR FUNCTION: 

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);*/

/*PRIVATE PROPERTIES AND METHODS:

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0}; //declare private properties

  let computeOptimumLocation = function(factor) {
    //...
  }

  this.draw = function() {
    computeOptimumLocation(0.1); //call that propertie

    console.log('draw');
  };
}
 
const circle = new Circle(10);
circle.draw(); //you cant call that propertie from the outside*/
