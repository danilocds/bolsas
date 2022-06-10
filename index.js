import app from './src/app.js';
import path from 'path';
import {fileURLToPath} from 'url';

const PORT = process.env.PORT || 5000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

