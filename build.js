const lib = require('blueprint-gen').default;
lib.builder.buildBlueprintFile()
    .then(r => console.log('Files written!'))
    .catch(err => console.error(err))
