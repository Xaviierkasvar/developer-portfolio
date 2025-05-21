// list.js
const { readdirSync, statSync } = require('fs');
const { join } = require('path');

function walk(dir, prefix = '') {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules') continue;
    const full = join(dir, name);
    console.log(prefix + name);
    if (statSync(full).isDirectory()) {
      walk(full, prefix + '  ');
    }
  }
}

walk(process.cwd());
