
import { getKmRate } from './lib/calculations.js';

console.log('--- Verification: New KM Bonus Logic ---');

const cases = [
    { dist: 2, packets: 1, expectedRate: 5, expectedTotal: 10 },    // 1 Pkt, 2 KM (Rate 5) -> 1 * 2 * 5 = 10
    { dist: 4, packets: 1, expectedRate: 6, expectedTotal: 24 },    // 1 Pkt, 4 KM (Rate 6) -> 1 * 4 * 6 = 24
    { dist: 6, packets: 1, expectedRate: 7, expectedTotal: 42 },    // 1 Pkt, 6 KM (Rate 7) -> 1 * 6 * 7 = 42
    { dist: 10, packets: 1, expectedRate: 8, expectedTotal: 80 },   // 1 Pkt, 10 KM (Rate 8) -> 1 * 10 * 8 = 80
    { dist: 2.92, packets: 16, expectedRate: 5, expectedTotal: 233.6 } // User Case: 16 Pkt, ~2.92 KM -> 16 * 2.92 * 5 = 233.6
];

let allPass = true;

cases.forEach((c, i) => {
    const rate = getKmRate(c.dist);
    const total = c.packets * c.dist * rate;
    const diff = Math.abs(total - c.expectedTotal);

    console.log(`Case ${i + 1}: Dist ${c.dist}km, Packets ${c.packets}`);
    console.log(`  Rate: ${rate} (Exp: ${c.expectedRate}) -> ${rate === c.expectedRate ? 'OK' : 'FAIL'}`);
    console.log(`  Total: ${total.toFixed(2)} (Exp: ${c.expectedTotal}) -> ${diff < 0.5 ? 'OK' : 'FAIL'}`);

    if (rate !== c.expectedRate || diff >= 0.5) allPass = false;
});

if (allPass) {
    console.log('\nSUCCESS: All verification cases passed.');
    process.exit(0);
} else {
    console.error('\nFAILURE: Some cases failed.');
    process.exit(1);
}
