#!/usr/bin/env node

const nodeV = process.versions.node;


const { versions: {v8, node} } = process;

console.log(`Node.js version: ${node} \n V8 version: ${v8}`);