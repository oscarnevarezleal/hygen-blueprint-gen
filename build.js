const lib = require('blueprint-gen').default;
console.log('<>', lib)
lib.builder.buildBlueprintFile()
    .then(r => console.log('Files written!'))
    .catch(err => console.error(err))
