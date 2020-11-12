# Hygen Blueprint Plugin

This is a [hygen](https://www.hygen.io/) plugin  that facilitates the creation of [blueprint](https://github.com/laravel-shift/blueprint) templates.


## Installation

Install this plugin via _hygen-add_ command like this `hygen-add blueprint-gen`

## Before start

This plugin extends the default helpers, which are only available when you explicitly say so by creating a `.hygen.js` file.

```
// .hygen.js
module.exports = require('hygen-blueprint-gen')
```

## Usage

```
hygen model new ModelName
hygen controller new ControllerName
```

