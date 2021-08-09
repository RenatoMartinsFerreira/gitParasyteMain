import fs from 'fs'
import {execSync} from 'child_process'

 const argValue = (args, arg) => (
  args[args.indexOf(arg)+1]
   )


fs.readFile('./package.json', 'utf8', function (err, data) {
  var myArgs = process.argv.slice(2);
  var package = JSON.parse(data)
  package.submodules[argValue(myArgs, '-n')] = undefined

  fs.writeFile('package.json', JSON.stringify(package, null, "\t"), function (err) {
  if (err) return console.log(err);
 
 try {
   const sync = execSync(
     `yarn syncSubmodules`,
     {
       encoding: 'utf-8',
     },
   );
   console.log('Output was:\n', sync);
 } catch (error) {
  console.log(' execSync error', error);
 }
});
});
