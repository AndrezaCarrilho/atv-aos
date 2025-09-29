import express from "express";
import {
  criarTarefa,
  listarTarefas,
  buscarTarefa,
  atualizarTarefa,
  deletarTarefa
} from "../controllers/tarefasController.js";

const router = express.Router();

router.post("/tarefas", criarTarefa);
router.get("/tarefas", listarTarefas);
router.get("/tarefas/:id", buscarTarefa);
router.put("/tarefas/:id", atualizarTarefa);
router.delete("/tarefas/:id", deletarTarefa);

export default router;
