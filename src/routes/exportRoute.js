import  express  from "express";
import ExportController from "../controllers/exportController.js";

const router = express.Router();

router
    .get("/exportar", ExportController.listarCandidatos);
    
export default router;