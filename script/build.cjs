/* eslint-disable */

const esbuild = require('esbuild');
const fs = require('node:fs/promises');
const pkg = require('../package.json');
// const path = require('path');

exports = async() => {
    // console.log(`${process.cwd()}`)

    const startTime = Date.now();

    console.log('Building core...');
    await esbuild.build({
        entryPoints: ['./src/core.js'],
        format: 'iife',
        bundle: true,
        minify: true,
        outfile: './dist/core.min.js'
    });
    
    console.log('Connecting...');
    const header = await fs.readFile('./src/header.js', 'utf-8');
    const coreJS = await fs.readFile('./dist/core.min.js', 'utf-8');
    const connected = 
        `${header.replace('{{version}}', pkg.version)}\n${coreJS.replace('{{version}}', pkg.version)}`;
    
    await fs.writeFile('./dist/LuoguShowEmoji.min.user.js', connected);
    
    await fs.writeFile('./dist/version', pkg.version);

    console.log('Built LGSE in %d ms.', Date.now() - startTime);
}
    
try {
    exports()
} catch (err) {
    console.error("Failed to build: %o", err);
}
