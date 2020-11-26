const {builder} = require('./dist/blueprint_gen.js').default.default;
builder.buildBlueprintFile()
    .then(r => console.log('Files written!'))
    .catch(err => console.error(err))
