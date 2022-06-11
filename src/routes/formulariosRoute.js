import express from "express";
import FormController from "../controllers/formularioController.js";

const router = express.Router();

router  
    .post("/formulario", FormController.cadastrarCandidato)
    .get("/candidatos", FormController.listarCandidatos)

export default router;