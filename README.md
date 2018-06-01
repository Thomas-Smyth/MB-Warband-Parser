<div align="center">

# Mount and Blade: Warband - Data Parser

[![GitHub release](https://img.shields.io/github/release/Thomas-Smyth/MB-Warband-Parser.svg)](https://github.com/Thomas-Smyth/MB-Warband-Parser/releases)
[![GitHub issues](https://img.shields.io/github/issues/Thomas-Smyth/MB-Warband-Parser.svg)](https://github.com/Thomas-Smyth/MB-Warband-Parser/issues)
[![GitHub stars](https://img.shields.io/github/stars/Thomas-Smyth/MB-Warband-Parser.svg)](https://github.com/Thomas-Smyth/MB-Warband-Parser/stargazers)
[![GitHub license](https://img.shields.io/github/license/Thomas-Smyth/MB-Warband-Parser.svg)](https://github.com/Thomas-Smyth/MB-Warband-Parser)

### A lightweight and simple module to encode and decode data for M&B Warband Clients

<br><br>

</div>

## Installation
To install via `npm` use:
`npm i MB-Warband-Parser`

## Node.js Usage
```js
const MBParser = require('MB-Warband-Parser');

// Turn Javascript array into '|' format.
let encodeOutput = await Parser.encode(['var1', 'var2', '', ' ', '1', '2', '3']);

// Turn '|' format to Javascript array.
let decodeOutput = await Parser.decode("var1|var2|| |1|2|3");
```

## Browser Usage
```js
// Turn Javascript array into '|' format.
MBWarbandParser.encode(['var1', 'var2', '', ' ', '1', '2', '3']);

// Turn '|' format to Javascript array.
MBWarbandParser.decode("var1|var2|| |1|2|3");
```