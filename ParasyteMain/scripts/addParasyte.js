import fs from 'fs'
import {installSubmodule} from './syncSubmodules.js'

const argValue = (args, arg) => (
  args[args.indexOf(arg)+1]
  )

fs.readFile('./package.json', 'utf8', function (err, data) {
  var myArgs = process.argv.slice(2);
  var packageObj = JSON.parse(data)

    packageObj.submodules[argValue(myArgs, '-n')] = {}
    packageObj.submodules[argValue(myArgs, '-n')].name = argValue(myArgs, '-n')
    packageObj.submodules[argValue(myArgs, '-n')].path = argValue(myArgs, '-p')
    packageObj.submodules[argValue(myArgs, '-n')].origin = argValue(myArgs, '-o')
    packageObj.submodules[argValue(myArgs, '-n')].tag = argValue(myArgs, '-t')

      try {
        installSubmodule({ path:  packageObj.submodules[argValue(myArgs, '-n')].path, name: packageObj.submodules[argValue(myArgs, '-n')].name, tag: packageObj.submodules[argValue(myArgs, '-n')].tag })
        .then( () => 
        {
        fs.writeFile('package.json', JSON.stringify(packageObj, null, "\t"), function (err) {
        if (err) return console.log(err);
      })}
        ).catch( (error) => {
          console.log(' execSync error', error);
        } )
  } catch (error) {
   console.log(' execSync error', error);
  }
});
