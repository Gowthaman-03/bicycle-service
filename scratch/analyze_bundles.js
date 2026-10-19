const fs = require('fs');
const path = require('path');

const bundleDir = path.join(__dirname, 'bundles');
const sites = ['url1', 'url2', 'url3', 'url4'];

function analyze() {
  console.log('=== FORENSIC BUNDLE ANALYSIS ===\n');

  for (const s of sites) {
    const js = fs.readFileSync(path.join(bundleDir, `${s}_main.js`), 'utf8');
    const css = fs.readFileSync(path.join(bundleDir, `${s}_styles.css`), 'utf8');

    console.log(`----------------------------------------`);
    console.log(`SITE: ${s.toUpperCase()}`);
    console.log(`Bundle Sizes: JS = ${(js.length / 1024).toFixed(1)} KB, CSS = ${(css.length / 1024).toFixed(1)} KB`);

    // 1. Branding Analysis
    const brandFreewheel = js.includes('Freewheel Factory') || js.includes('FREEWHEEL FACTORY');
    const brandCycleService = js.includes('Cycle Service Center');
    const brandBicycleService = js.includes('BicycleService');
    console.log(`\n1. BRANDING:`);
    console.log(`   - "Freewheel Factory": ${brandFreewheel}`);
    console.log(`   - "Cycle Service Center": ${brandCycleService}`);
    console.log(`   - "BicycleService": ${brandBicycleService}`);

    // Check for founders
    const hasThilothamma = js.includes('Thilothamma');
    const hasGokul = js.includes('Gokul');
    console.log(`   - Founder "Thilothamma": ${hasThilothamma}`);
    console.log(`   - Founder "Gokul Krishnan": ${hasGokul}`);

    // 2. Hero Headline & Positioning
    console.log(`\n2. HERO & POSITIONING:`);
    const heroMatches = js.match(/(?:PRECISION|RACE-READY|ELEVATE|ENGINEERED|PERFORMANCE|SUSPENSION)[^"'\<\>]{10,80}/gi) || [];
    console.log(`   - Hero phrase snippets:`, heroMatches.slice(0, 5));

    // 3. Routes configured in router
    console.log(`\n3. ROUTER CONFIGURATION:`);
    const routeRegex = /path:\s*['"]([^'"]*)['"]/g;
    let match;
    const paths = new Set();
    while ((match = routeRegex.exec(js)) !== null) {
      paths.add(match[1]);
    }
    console.log(`   - Configured route paths:`, Array.from(paths));

    // Check authGuard / login / dashboard
    const hasLoginRoute = paths.has('login');
    const hasDashboardRoute = paths.has('dashboard');
    const hasAppointmentRoute = paths.has('appointment');
    const hasServiceRoute = paths.has('service');
    console.log(`   - Login route: ${hasLoginRoute}, Dashboard route: ${hasDashboardRoute}`);
    console.log(`   - Appointment route: ${hasAppointmentRoute}, Service route: ${hasServiceRoute}`);

    // 4. Services Catalog Data
    console.log(`\n4. SERVICES CATALOG:`);
    const hasServicesProvided = js.includes('SERVICES_PROVIDED') || js.includes('General Service') || js.includes('Suspension');
    const hasFilterLogic = js.includes('selectedCategory') || js.includes('filteredServices') || js.includes('categories');
    console.log(`   - Has service catalog data: ${hasServicesProvided}`);
    console.log(`   - Has category filtering logic: ${hasFilterLogic}`);
    
    // Check pricing matches
    const priceMatches = js.match(/₹\s*\d+[\d,]*/g) || [];
    console.log(`   - Sample pricing found in bundle:`, Array.from(new Set(priceMatches)).slice(0, 8));

    // 5. Booking / Appointment Logic
    console.log(`\n5. APPOINTMENT & BOOKING:`);
    const hasWhatsApp = js.includes('wa.me') || js.includes('api.whatsapp.com') || js.includes('whatsapp');
    const hasDemoRequests = js.includes('demo-requests') || js.includes('/api/demo-requests');
    const hasServiceQueryParam = js.includes('queryParams') || js.includes('serviceId') || js.includes('selectedService');
    console.log(`   - WhatsApp dispatch: ${hasWhatsApp}`);
    console.log(`   - API endpoint (demo-requests): ${hasDemoRequests}`);
    console.log(`   - Pre-selects service via queryParams: ${hasServiceQueryParam}`);

    // 6. CSS & Theme
    console.log(`\n6. CSS & DESIGN TOKENS:`);
    const hasObsidian = css.includes('#060709') || css.includes('#040609');
    const hasLime = css.includes('#d8ff3e');
    const hasOrange = css.includes('#ff5a00');
    const hasBeige = css.includes('#f4f3ef');
    console.log(`   - Obsidian Dark (#060709 / #040609): ${hasObsidian}`);
    console.log(`   - Lime Accent (#d8ff3e): ${hasLime}`);
    console.log(`   - Electric/Racing Orange (#ff5a00): ${hasOrange}`);
    console.log(`   - Light/Beige background (#f4f3ef): ${hasBeige}`);

    // 7. Hero Bike Image scaling bug check
    const hasDistortedScale = css.includes('scaleX(1.5)') || css.includes('scaleY(2.5)');
    console.log(`   - Distorted bike wheel scale (scaleX(1.5) scaleY(2.5)): ${hasDistortedScale}`);

    console.log('\n');
  }
}

analyze();
