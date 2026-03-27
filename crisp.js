const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { regex: /text-black\/40/g, repl: 'text-black/80' },
  { regex: /text-black\/50/g, repl: 'text-black/80' },
  { regex: /text-black\/60/g, repl: 'text-black/80' },
  { regex: /text-black\/70/g, repl: 'text-black/90' }
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
    console.log('Fixed opacities in', file);
  }
});
