import { compile } from '@tailwindcss/node';
import fs from 'fs';
const css = fs.readFileSync('./src/index.css', 'utf8');
const result = await compile(css);
console.log(result.build(['dark:bg-red-500']));
