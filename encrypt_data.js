
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/data/addressData.json');
const outputPath = path.join(process.cwd(), 'src/data/addressDataEncrypted.js');

try {
    const rawData = fs.readFileSync(dataPath, 'utf8');

    // Obfuscation: Base64 -> Reverse -> Prefix
    const base64 = Buffer.from(rawData).toString('base64');
    const reversed = base64.split('').reverse().join('');
    const finalString = "KRYSEC_" + reversed;

    const outputContent = `// Encrypted Address Data
// This file is auto-generated. Do not edit.
export const encryptedData = "${finalString}";
`;

    fs.writeFileSync(outputPath, outputContent);
    console.log('✅ Data encrypted successfully!');
} catch (err) {
    console.error('Data encryption failed:', err);
}
