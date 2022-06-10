import express from 'express';
import routes from './routes/index.js'
const PORT = process.env.PORT || 5000;

db.on("error", console.log.bind(console, 'Erro de Conexao'));
db.once("open", () => {
    console.log("Conexão feita com sucesso")
});

const app = express();

routes(app);

export default app

// app.
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
