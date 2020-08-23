const square=require('./square.js');
const calsquare=(a)=>
{
    console.log(`The value of a is ${a} and the area of square is`+square.areas(a));
    console.log(`The value of a is ${a} and the area of perimeter is`+square.perimeters(a));
}
calsquare(5);