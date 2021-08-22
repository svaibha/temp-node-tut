const filesystem = require('fs');

const first = filesystem.readFileSync('./text/test.txt','utf-8');
const second  = filesystem.readFileSync('./text/second.txt','utf8');

console.log(first,second);

filesystem.writeFileSync('./text/newfile.txt',`hello this is new file with ${first} and ${second}`,{flag:'a'});