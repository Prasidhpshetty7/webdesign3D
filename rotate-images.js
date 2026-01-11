const sharp = require('sharp');
const path = require('path');

const basePath = './static/textures/screens/aboutMeScreens/';

const files = [
    'ChatGPT Image Jan 11, 2026, 01_24_46 PM.png',
    '42c5cbd7-af2c-4cd3-bea8-6b1fcd39469c.png',
    '8269c086-479b-4c56-9a85-db1fa0c5a08c.png'
];

async function rotateImages() {
    for (const file of files) {
        const inputPath = path.join(basePath, file);
        const outputPath = path.join(basePath, file.replace('.png', '_rotated.png'));
        
        try {
            await sharp(inputPath)
                .rotate(90)
                .toFile(outputPath);
            console.log(`Rotated: ${file}`);
        } catch (err) {
            console.error(`Error rotating ${file}:`, err.message);
        }
    }
    console.log('Done!');
}

rotateImages();
