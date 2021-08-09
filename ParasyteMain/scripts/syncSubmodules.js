import fs from 'fs'
import {execSync} from 'child_process'

export const installSubmodule = (element, index, array) => new Promise( (resolve, reject) => {
    const formatedElement = element.length ? element[1] : element
    try {
      const output = execSync(
        // `rm -rf ${element[1].path}/${element[1].name} && cd ${element[1].path} && git submodule add ${element[1].origin} && cd ${element[1].name} && git checkout ${element[1].tag}`,
        `cd ${formatedElement.path}/${formatedElement.name} && git checkout ${formatedElement.tag}`,
        {
          encoding: 'utf-8',
        },
      ); // the default is 'buffer'
      console.log('Output was:\n', output);
      resolve(output)
    } catch (error) {
      console.log('error was:\n', error);
      reject(error)
      // try {
      //   const deinit = execSync(
      //     // `rm -rf ${element[1].path}/${element[1].name} && cd ${element[1].path} && git submodule add ${element[1].origin} && cd ${element[1].name} && git checkout ${element[1].tag}`,
      //     `git submodule deinit -f -- ${element[1].path}`,
      //     {
      //       encoding: 'utf-8',
      //     },
      //   );
      // } catch (error) {}
  
      // const addSubmodule = execSync(
      //   // `rm -rf ${element[1].path}/${element[1].name} && cd ${element[1].path} && git submodule add ${element[1].origin} && cd ${element[1].name} && git checkout ${element[1].tag}`,
      //   `cd ${element[1].path} && git submodule add ${element[1].origin} && cd ${element[1].name} && git checkout ${element[1].tag}`,
      //   {
      //     encoding: 'utf-8',
      //   },
      // );
      // console.log('Output was:\n', addSubmodule);
    }
  } 
)

fs.readFile('./package.json', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(JSON.parse(data).submodules);
  execSync(
    `git submodule init && git submodule update`,
    {
      encoding: 'utf-8',
    },
  )

  const submodules = Object.entries(JSON.parse(data).submodules);

  submodules.forEach(installSubmodule);
});
