import fs from 'fs'


export function props(name){
  // var config = require(`./${name}/index`)
  var config = fs.readFileSync(`./components/${name}/package.json`);
  return config
}
