const https = require('https');

const urls = {
  'URL 1 (18g5)': 'https://bicycle-service-18g5.vercel.app',
  'URL 2 (root)': 'https://bicycle-service.vercel.app',
  'URL 3 (mmw1)': 'https://bicycle-service-mmw1.vercel.app',
  'URL 4 (lake)': 'https://bicycle-service-lake.vercel.app'
};

const routes = ['', 'service', 'appointment', 'login', 'dashboard', 'services'];

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', (err) => {
      resolve({ error: err.message });
    });
  });
}

async function run() {
  console.log('=== 1. ROUTE ACCESSIBILITY AUDIT ===');
  for (const [name, base] of Object.entries(urls)) {
    console.log(`\nTesting ${name}: ${base}`);
    for (const r of routes) {
      const target = r ? `${base}/${r}` : base;
      const res = await fetchUrl(target);
      console.log(`  Route /${r.padEnd(12)} -> Status: ${res.statusCode} (length: ${res.body ? res.body.length : 0})`);
    }
  }
}

run();
