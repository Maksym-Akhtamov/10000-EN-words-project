// Run this script whenever you add or remove sound files:
//   node generate-sounds-manifest.js

const fs   = require('fs');
const path = require('path');

const SOUNDS_DIR    = path.join(__dirname, 'sounds');
const OUTPUT_FILE   = path.join(__dirname, 'sounds-manifest.js');

// Recursively collect all .mp3 files, grouped by their parent folder
function scan(dir, base = SOUNDS_DIR) {
  const result = {};
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      Object.assign(result, scan(full, base));
    } else if (entry.name.endsWith('.mp3')) {
      const folder = path.relative(base, dir).replace(/\\/g, '/');
      (result[folder] = result[folder] || []).push(entry.name);
    }
  }
  return result;
}

const manifest = scan(SOUNDS_DIR);

const lines = Object.entries(manifest)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([folder, files]) => `  '${folder}': ${JSON.stringify(files.sort())},`);

const output =
  `// AUTO-GENERATED — run "node generate-sounds-manifest.js" after adding/removing files\n` +
  `const SOUNDS_MANIFEST = {\n${lines.join('\n')}\n};\n`;

fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
console.log(`✅ sounds-manifest.js updated (${Object.keys(manifest).length} folders, ${Object.values(manifest).flat().length} files)`);
