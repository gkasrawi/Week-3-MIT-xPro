5.Factory Model
// When creating objects, it is much faster to make a "blueprint" of the object and use that to create many different copies of the objects with different parameters.
// For example, if you want to make a graph with many different coordinate points on it, it is faster to write a function which generates those points with the parameters you put into it, 
// to make a point every time you wish to create one. 
// const- cant reassign variable/ general default to const than can change to let. 
// variables-let, const, var simple difference= always use let nowadays.. doesnt use hoisting, and uses more traditional clock scope
// in 2022 use let keyword/acts very similar to var.. in that 

const graphPoints = []; 
const makeCooridinatePoint = function makeCooridinatePoint(x,y){
    let point = {xCooridinate:x, yCoordinate:y};
    return point; 
}
let pointOne = makeCoordinatePoints(3,4); 
graphPoints.push(pointOne);              // add.push to the variable name followed by the element, in order to add (pointOne) to the end of the array.
                                         // JSON-//way to exchange data usually to the front end, a syntax not javascript..
console.log(JSON. stringify (graphPoints));
>>[{"xcoordinate" :3, "ycoordinate:4"}]

let PointOne = makeCooridinatePoint(7, 24);
graphPoints.push(pointTwo);
// JSON.stringify-An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
console.log(JSON).stringify(grpahPoints)); 
>>[{"xCooridinate":3, "yCoordinate":4, {"xCoordinate":7, "yCoordinate":24}]


