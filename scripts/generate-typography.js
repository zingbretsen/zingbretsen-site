const Typography = require('typography');
const parnassusTheme = require('typography-theme-parnassus');
const fs = require('fs');
const path = require('path');

const typography = new Typography(parnassusTheme);

const css = typography.toString();

const outputPath = path.join(__dirname, '..', 'styles', 'typography.css');

fs.writeFileSync(outputPath, css);

console.log('Generated typography.css');
