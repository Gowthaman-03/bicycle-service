const fs = require('fs');
const path = require('path');

const bundleDir = path.join(__dirname, 'bundles');
for (const s of ['url1', 'url2', 'url3', 'url4']) {
  const js = fs.readFileSync(path.join(bundleDir, `${s}_main.js`), 'utf8');
  console.log(`\n=== ${s.toUpperCase()} APPOINTMENT LOGIC ===`);
  
  // Find appointment submission method / window.open / http post
  const submitIdx = js.indexOf('submit');
  const appointmentMatches = js.match(/[a-zA-Z0-9_$]+\.post\([^\)]+\)/g) || [];
  console.log('HTTP POST calls:', appointmentMatches);

  const waMatches = js.match(/https?:\/\/(?:wa\.me|api\.whatsapp\.com)[^\s"'`\)]+/g) || [];
  console.log('WhatsApp links found:', waMatches);

  const windowOpenMatches = js.match(/window\.open\([^\)]+\)/g) || [];
  console.log('Window open calls:', windowOpenMatches);
}
