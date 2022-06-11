import  express  from "express";
import EscolaController from "../controllers/escolasController.js";

const router = express.Router();

router
    .get("/escolas", EscolaController.listarEscolas)
    .post("/escolas", EscolaController.cadastrarEscola)
    .put("/escolas/:id", EscolaController.atualizarEscola)
    .delete("/escolas/:id", EscolaController.excluirEscola)
    .get("/diretores", EscolaController.listarDiretores)

export default router;