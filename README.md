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

## Usage
```js
const encode = require('MB-Warband-Parser').encode;
const decode = require('MB-Warband-Parser').decode;

let stringFormat = encode(dataArray);
let arrayFormat = decode(dataString);
```
