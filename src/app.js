import express from 'express';
import db from "./config/dbConnect.js"
import routes from './routes/index.js'
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

db.on("error", console.log.bind(console, 'Erro de Conexao'));
db.once("open", () => {
    console.log("Conexão feita com sucesso")
});

const app = express();

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/obrigado', (req, res) => res.render('pages/obrigado'))
  .use(express.json())
  .use(express.urlencoded())

routes(app);

export default app
