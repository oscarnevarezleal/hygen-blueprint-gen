const fs = require('fs')
const path = require('path')
const readModule = (p, args) => require(path.join(p, 'export.js'))(args)
const yaml = require('js-yaml');
const BLUEPRINT_BUILD_PATH = process.env.BLUEPRINT_BUILD_PATH || path.join(__dirname, '.blueprint');

console.log(BLUEPRINT_BUILD_PATH);

const modules = ['controllers', 'models'];

let result = {};

modules.forEach(e => {
    result[e] = {};
    try {
        const path = BLUEPRINT_BUILD_PATH + "/" + e;
        const arrayOfFiles = fs.readdirSync(path)
        const moduleItems = arrayOfFiles.map(f => {
            const module = require(`${path}/${f}`);
            const { name, definition } = module;
            const item = {
                [name]: { ...definition[name] } };

            result[e][name] = { ...definition };
        })
    }
    catch (e) {
        console.log(e)
    }
});

const BluePrintJSON = JSON.stringify(result, null, 3);
const BluePrintYaml = yaml.safeDump(result);

console.log('result', result)

fs.writeFile(BLUEPRINT_BUILD_PATH + '/.blueprint.json',
    BluePrintJSON,
    'utf8', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

fs.writeFile(BLUEPRINT_BUILD_PATH + '/.blueprint.yml',
    BluePrintYaml,
    'utf8', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
