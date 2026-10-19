const https = require('https');
const fs = require('fs');
const path = require('path');

const targets = [
  { name: 'url1', base: 'https://bicycle-service-18g5.vercel.app', js: 'main-E2R5BTGM.js', css: 'styles-YWXM3XSP.css' },
  { name: 'url2', base: 'https://bicycle-service.vercel.app', js: 'main-ABRVYN43.js', css: 'styles-MPCIIITU.css' },
  { name: 'url3', base: 'https://bicycle-service-mmw1.vercel.app', js: 'main-YPQ4A5J5.js', css: 'styles-3UQ3HLX2.css' },
  { name: 'url4', base: 'https://bicycle-service-lake.vercel.app', js: 'main-BT34LYYH.js', css: 'styles-A2Q473FA.css' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return resolve({ error: `HTTP ${res.statusCode}` });
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(dest, data);
        resolve({ size: data.length });
      });
    }).on('error', reject);
  });
}

async function run() {
  const dir = path.join(__dirname, 'bundles');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const t of targets) {
    console.log(`Downloading bundles for ${t.name}...`);
    const jsPath = path.join(dir, `${t.name}_main.js`);
    const cssPath = path.join(dir, `${t.name}_styles.css`);
    const jsRes = await download(`${t.base}/${t.js}`, jsPath);
    const cssRes = await download(`${t.base}/${t.css}`, cssPath);
    console.log(`  ${t.name} JS: ${jsRes.size || jsRes.error} bytes, CSS: ${cssRes.size || cssRes.error} bytes`);
  }
  console.log('Done downloading.');
}

run();
