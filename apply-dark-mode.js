const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && f !== 'Hero.tsx'); // exclude Hero as we just did it carefully

const replacements = [
  { regex: /\bbg-black\b/g, repl: 'bg-white dark:bg-black' },
  { regex: /\btext-white\b(?![\/\-])/g, repl: 'text-black dark:text-white' },
  { regex: /text-white\/40/g, repl: 'text-black/60 dark:text-white/40' },
  { regex: /text-white\/30/g, repl: 'text-black/50 dark:text-white/30' },
  { regex: /text-white\/50/g, repl: 'text-black/50 dark:text-white/50' },
  { regex: /text-white\/60/g, repl: 'text-black/60 dark:text-white/60' },
  { regex: /text-white\/70/g, repl: 'text-black/70 dark:text-white/70' },
  { regex: /border-white\/10/g, repl: 'border-black/10 dark:border-white/10' },
  { regex: /border-white\/20/g, repl: 'border-black/20 dark:border-white/20' },
  { regex: /border-white\/5/g, repl: 'border-black/5 dark:border-white/5' },
  { regex: /bg-white\/5(?!0)/g, repl: 'bg-black/5 dark:bg-white/5' },
  { regex: /bg-white\/10/g, repl: 'bg-black/10 dark:bg-white/10' },
  { regex: /bg-white\/20/g, repl: 'bg-black/20 dark:bg-white/20' },
  { regex: /bg-black\/20/g, repl: 'bg-black/5 dark:bg-white/5 dark:bg-black/20' },
  { regex: /bg-black\/40/g, repl: 'bg-black/10 dark:bg-white/5 dark:bg-black/40' },
  { regex: /rgba\(255,255,255,0\.1\)/g, repl: 'rgba(0,0,0,0.1)' } // shadows mostly
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  replacements.forEach(({regex, repl}) => {
     content = content.replace(regex, repl);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Processed', file);
  }
});
