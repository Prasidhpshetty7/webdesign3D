const fs = require('fs');

const gltf = JSON.parse(fs.readFileSync('static/models/ramenShop/glTF/ramenShop.gltf', 'utf8'));

// Remove node index 1 (jesseZhouJoined) from scene nodes
gltf.scenes[0].nodes = gltf.scenes[0].nodes.filter(n => n !== 1);

// Write back
fs.writeFileSync('static/models/ramenShop/glTF/ramenShop.gltf', JSON.stringify(gltf, null, 4));

console.log('Removed jesseZhouJoined from scene');
