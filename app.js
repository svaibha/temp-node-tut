const help = require('lodash') 

const item = [1,[2,[3,[4]]]]
const  newitem = help.flattenDeep(item);
console.log(newitem)