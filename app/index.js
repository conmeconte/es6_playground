
//if you want to import everything
import * as math from './calc'
console.log('math:', math);
console.log('5 + 7 = ', math.default(5, 7));

console.log('8 - 9 = ', math.subtract(8, 9));

console.log('9 x 10 = ', math.multiply(9, 10));

// if you want to import ont by one
// import addStuff, {subtract, multiply} from './calc';
//
//
//
// console.log('5 + 7 = ', addStuff(5, 7));
//
// console.log('8 - 9 = ', subtract(8, 9));
//
// console.log('9 x 10 = ', multiply(9, 10));
